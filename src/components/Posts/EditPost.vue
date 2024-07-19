<template>
    <Header :isProfile="true"></Header>
    <div class="editpost">
        <h1>
            Публикация
        </h1>
        <div class="params">
            <div class="entertitle">
                <div class="title">
                    Придумайте название публикации <span class="question question_enterparams"><div class="answer answer_enterparams">Введите логин, введите пароль из 8 символов и повторите его</div></span> 
                </div>
                <div class="input_block"><my-input placeholder="Какие места стоит посетить на отпуске ?" class="input-editpost" v-model="title"></my-input></div>
            </div>
            <div class="entercontent">
                <div class="title">
                    Добавьте содержание для публикации <span class="question question_captcha"><div class="answer answer_captcha">Введите символы, которые видете на изображении</div></span> 
                </div>
                <div class="input_block"><my-textarea placeholder="Отпуск это прежде всего ответственная задача..." class="textarea-editpost" v-model="content"></my-textarea></div>
            </div>
            <div class="entertags">
                <div class="title">
                    Укажите категории для поста<span class="question question_enterparams"><div class="answer answer_enterparams">Введите логин, введите пароль из 8 символов и повторите его</div></span> 
                </div>
                <div class="input_block"><my-input placeholder="отдых отпуск планирование..." class="input-editpost"  v-model="tags"></my-input></div>
            </div>
            <div class="enterpicture">
                <div class="title">
                    Добавьте картинку для поста <span class="question question_enterparams"><div class="answer answer_enterparams" >Введите логин, введите пароль из 8 символов и повторите его</div></span> 
                </div>
                <div :class="{ 'input-editpost-picture-container-ready': isPictureOnload, 'input-editpost-picture-container': !isPictureOnload }">
                    <input class="input-editpost-picture" type="file" @change="loadPicture($event)" v-if="!isPictureOnload"/>
                    <img src="@/assets/editpost/inputpicture.svg" v-if="!isPictureOnload"/>
                    <img ref="loadPictureContainer" v-show="isPictureOnload"/>
                </div>
            </div>
            <my-button class="button_edit" @click="editpost">Добавить публикацию</my-button>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>

import Header from '../Parts/Header.vue'
import Footer from '../Parts/Footer.vue'

export default {
    name: 'create-post',
    components: {
        Header,
        Footer
    },  
    data()
    {
        return {
            title: '',
            content: '',
            tags: '',
            picture: '',
            isPictureOnload: false
        }
    },

    methods:
    {
        loadPicture(event)
        {   
            let file = event.target.files[0];
            let loadPictureContainer = this.$refs.loadPictureContainer;
            if(file)
            {
                let reader = new FileReader();
                reader.onload = function(e) {
                    loadPictureContainer.src = e.target.result
                };
                reader.readAsDataURL(file);
                this.isPictureOnload = true
            }
        },

        async editpost()
        {
            if(this.title == '' || this.content == '' || this.tags == '')
            {
                alert('Введены не все данные')
                return
            }
            let loadPictureContainer = this.$refs.loadPictureContainer;
            const response = await fetch("http://127.0.0.1:5000/api/create_post/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": document.cookie.split('session_token=')[1]	
                },
                body: JSON.stringify({
                    title: this.title,
                    content: this.content,
                    tags: this.tags,
                    imagedata: loadPictureContainer.src
                })
            })
            if(!response)
            {
                alert('Error')
            }
            const data = await response.json()
            if(/2../.test(String(data.status)))
            {
                this.$router.push('/home')
            }
            else
            {
                alert(data.message)
            }
        }
    }
}

</script>

<style scoped>

    .editpost
    {
        width: 53%;
        height: 215vh;
        position: relative;
        left: 23.5%;
        margin-top: 50px;
        background-color: white;
        border-radius: 50px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1
    {
        font-size: 4.3em;
        color: #AC2DFE;
        font-weight: 400;
        margin-top: 4%;
        margin-bottom: 6%;
        font-family: "Montserrat", sans-serif;
    }

    .params
    {
        width: 75%;
        height: 90%;
        display: flex;
        flex-direction: column;
        padding-top: 4%;
        border-top: 1px solid #E7E7E7;
    }

    .entertitle, .entertags
    {
        width: 100%;
        height: 6%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 6%;
    }

    .input_block
    {
        width: 100%;
        height: 18%;
        display: flex;
        align-items: center;
        background-color: #F3F3F3;
        border-radius: 30px;
        display: flex;
    }

    .title
    {
        color: #515151;
        font-size: 1.5em;
        padding-left: 5px;
        display: flex;
        position: relative;
        align-items: center;
    }

    .entertitle > .input_block, .entertags > .input_block
    {
        height: 52%;
    }

    .entercontent
    {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 6%;
    }

    .entercontent> .input_block
    {
        height: 91%;
        align-items: flex-start;
    }

    .enterpicture
    {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        margin-top: 6%;
    }

    .input-editpost-picture-container
    {
        width: 45%;
        height: 50%;
        border-radius: 15px;
        border: 3px #E0E0E0 dashed;
        position: relative;
        left: 27.5%;
        top: 25%;
    }

    .input-editpost-picture-container-ready
    {
        width: 100%;
        height: 98%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .input-editpost-picture-container > img
    {
        position: absolute;
        width: 90%;
        height: 90%;
        top: 5%;
        left: 5%;
        z-index: 1;
    }

    .input-editpost-picture-container-ready > img
    {
        position: absolute;
        max-width: 100%;
        max-height: 100%;
        z-index: 1;
    }

    .input-editpost-picture-container::after
    {
        content: "Выберите или перетащите";
        position: absolute;
        top: 100%;
        font-size: 1.4em;
        left: 0;
        color: #E0E0E0;
        width: 100%;
        text-align: center;
        margin-top: 10px;
    }

    .input-editpost-picture
    {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 2;
    }

    .question
    {
        display: inline-block;
        height: 20px;
        width: 20px;
        margin-left: 15px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        vertical-align: middle;
        position: relative;
        background-image: url('@/assets/regist_auth/info.svg');
        font-size: 0.8em;
    }

    .answer
    {
        width: 200px;
        padding: 10px;
        position: absolute;
        background-color: white;
        border-radius: 25px;
        left: 20px;
        display: none;
        border: 1px solid #AC2DFE;
        transition-duration: 0.5s;
        z-index: 2;
    }

    .question_enterparams:hover > .answer_enterparams, .question_captcha:hover > .answer_captcha
    {
        display: inline-block;
    }

</style>
    