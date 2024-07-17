<template>
    <Header></Header>
    <div class="authorization">
        <h1>
            Авторизация
        </h1>
        <div class="params">
            <div class="enterparams">
                <div class="title">
                    Параметры ввода <span class="question question_enterparams"><div class="answer answer_enterparams">Введите логин, введите пароль из 8 символов и повторите его</div></span> 
                </div>
                <div class="input_block"><span class="symbol_input symbol_input__login"></span><my-input placeholder="Логин"  class="input-auth"></my-input></div>
                <div class="input_block"><span class="symbol_input symbol_input__password"></span> <my-input placeholder="Придумайте пароль" class="input-auth" type="password"></my-input></div>
            </div>
            <div class="captcha">
                <div class="title">
                    Решите задачу <span class="question question_captcha"><div class="answer answer_captcha">Введите символы, которые видете на изображении</div></span> 
                </div>
                <img />
                <div class="input_block"><span class="symbol_input symbol_input__captcha"></span><my-input placeholder="Текст на картинке"  class="input-auth"></my-input></div>
            </div>
            <div class="buttonsenter">
                <my-button class="button_regist">Зайти в аккаунт</my-button>
                <router-link to="/main/registration">Создать новый</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '../Parts/Header.vue'

export default {
    name: 'reg-block',
    components: {
        Header
    },  
}

</script>

<style scoped>

    .authorization
    {
        width: 53%;
        height: 117vh;
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
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4%;
        border-top: 1px solid #E7E7E7;
    }

    .enterparams
    {
        width: 48%;
        height: 28%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 5%;
    }

    .captcha
    {
        width: 48%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 5%;
    }

    .enterparams > .title, .captcha > .title
    {
        color: #515151;
        font-size: 1.5em;
        padding-left: 5px;
        display: flex;
        position: relative;
        align-items: center;
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

    .input_block
    {
        width: 100%;
        height: 21%;
        display: flex;
        align-items: center;
        background-color: #F3F3F3;
        border-radius: 30px;
        display: flex;
        align-items: center;
    }

    .captcha > .input_block
    {
        height: 15%;
    }

    .captcha > img
    {
        width: 100%;
        height: 61%;
        border-radius: 30px;
    }

    .symbol_input
    {
        width: 6%;
        height: 50%;
        margin-left: 20px;
        display: inline-block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        vertical-align: middle;
        position: relative;
    }

    .symbol_input__captcha
    {
        background-image: url('@/assets/regist_auth/capcha.svg');
    }

    .symbol_input__password
    {
        background-image: url('@/assets/regist_auth/password.svg');
    }

    .symbol_input__login
    {
        background-image: url('@/assets/regist_auth/login.svg');
    }

    .buttonsenter
    {
        width: 100%;
        height: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 9%;
        position: relative;
    }

    .buttonsenter> a
    {
        font-size: 1.6em;
        text-decoration: none;
        color: #0000A9;
        margin-top: 3%;
    }



</style>
    