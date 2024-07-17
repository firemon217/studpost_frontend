<template>
    <Header :isProfile="true"></Header>
    <div class="createpost">
        <h1>
            Публикация
        </h1>
        <div class="params">
            <div class="entertitle">
                <div class="title">
                    Придумайте название публикации <span class="question question_enterparams"><div class="answer answer_enterparams">Введите логин, введите пароль из 8 символов и повторите его</div></span> 
                </div>
                <div class="input_block"><my-input placeholder="Какие места стоит посетить на отпуске ?" class="input-createpost"></my-input></div>
            </div>
            <div class="entercontent">
                <div class="title">
                    Добавьте содержание для публикации <span class="question question_captcha"><div class="answer answer_captcha">Введите символы, которые видете на изображении</div></span> 
                </div>
                <img />
                <div class="input_block"><my-textarea placeholder="Текст на картинке" class="textarea-createpost"></my-textarea></div>
            </div>
            <div class="entertags">
                <div class="title">
                    Укажите категории для поста<span class="question question_enterparams"><div class="answer answer_enterparams">Введите логин, введите пароль из 8 символов и повторите его</div></span> 
                </div>
                <div class="input_block"><my-input placeholder="Логин" class="input-createpost"></my-input></div>
            </div>
            <div class="enterpicture">
                <div class="title">
                    Добавьте картинку для поста <span class="question question_enterparams"><div class="answer answer_enterparams">Введите логин, введите пароль из 8 символов и повторите его</div></span> 
                </div>
                <div class="input-createpost-picture-container">
                    <input class="input-createpost-picture" type="file" @change="loadPicture($event)"/>
                    <img src="@/assets/createpost/inputpicture.svg" ref="loadPictureContainer"/>
                </div>
            </div>
            <my-button class="button_create">Добавить публикацию</my-button>
        </div>
    </div>
</template>

<script>

import Header from '../Parts/Header.vue'

export default {
    name: 'create-post',
    components: {
        Header
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
                    loadPictureContainer.src = e.target.result;
                    alert()
                };
                reader.readAsDataURL(file);
            }
        }
    }
}

</script>

<style scoped>

    .createpost
    {
        width: 53%;
        height: 178vh;
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
        height: 85%;
        display: flex;
        flex-direction: column;
        padding-top: 4%;
        border-top: 1px solid #E7E7E7;
    }

    .entertitle, .entertags
    {
        width: 100%;
        height: 9%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 6%;
    }

    .input_block
    {
        width: 100%;
        height: 21%;
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
        height: 21%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 6%;
    }

    .input-createpost-picture-container
    {
        width: 45%;
        height: 78%;
        border-radius: 15px;
        border: 3px #E0E0E0 dashed;
        position: relative;
        left: 27.5%;
    }

    .input-createpost-picture-container > img
    {
        position: absolute;
        width: 90%;
        height: 90%;
        top: 5%;
        left: 5%;
        z-index: 1;
    }

    .input-createpost-picture-container::after
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

    .input-createpost-picture
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
    }

    .question_enterparams:hover > .answer_enterparams, .question_captcha:hover > .answer_captcha
    {
        display: inline-block;
    }

</style>
    