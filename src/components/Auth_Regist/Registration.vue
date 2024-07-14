<template>
    <div class="register">
        <h1>
            Регистрация
        </h1>
        <div class="params">
            <div class="aboutme">
                <div class="title">
                    Обо мне
                </div>
                <div class="input_block"><span class="symbol-input"></span><my-input placeholder="Имя" class="input-registr"></my-input></div>
                <div class="input_block"><span class="symbol-input"></span><my-input placeholder="Фамилия" class="input-registr"></my-input></div>
                <div class="input_block"><span class="symbol-input"></span><my-input placeholder="Отчество (при наличии)" class="input-registr"></my-input></div>
            </div>
            <div class="enterparams">
                <div class="title">
                    Параметры ввода
                </div>
                <div class="input_block"><span class="symbol-input"></span><my-input placeholder="Логин"  class="input-registr"></my-input></div>
                <div class="input_block"><span class="symbol-input"></span> <my-input placeholder="Придумайте пароль" class="input-registr" type="password"></my-input></div>
                <div class="input_block"><span class="symbol-input"></span><my-input placeholder="Повторите пароль" class="input-registr" type="password"></my-input></div> 
            </div>
            <div class="optional">
                <div class="title">
                    Связь со мной (не обязательно)
                </div>
                <div class="input_block"><span class="symbol-input"></span><my-input placeholder="Почта" class="input-registr" type="email"></my-input></div>
                <div class="input_block"><span class="symbol-input"></span><my-input placeholder="Номер телефона" class="input-registr"></my-input></div>
            </div>
            <div class="captcha">
                <div class="title">
                    Решите задачу
                </div>
                <img />
                <div class="input_block"><span class="symbol-input"></span><my-input placeholder="Текст на картинке"  class="input-registr"></my-input></div>
            </div>
            <div class="buttonsenter">
                <my-button class="button_regist">Создать аккаунт</my-button>
                <router-link to="/main/authorization">У меня уже есть аккаунт</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'reg-block',
}
</script>

<style scoped>
    .register
    {
        width: 53%;
        height: 186vh;
        position: relative;
        left: 23.5%;
        margin-top: 7%;
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
        font-weight: 100;
        margin-top: 4%;
        margin-bottom: 6%;
    }

    .params
    {
        width: 100%;
        height: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4%;
        border-top: 1px solid #E7E7E7;
    }

    .aboutme, .enterparams, .optional, .captcha
    {
        width: 48%;
        height: 17%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 5%;
    }

    .optional
    {
        height: 12%;
    }

    .captcha
    {
        height: 24%;
    }
    
    .aboutme > .title, .enterparams > .title, .optional > .title, .captcha > .title
    {
        color: #515151;
        font-size: 1.5em;
        padding-left: 5px;
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

    .optional > .input_block
    {
        height: 30%;
    }

    .captcha > img
    {
        width: 100%;
        height: 61%;
        border-radius: 30px;
    }

    .symbol-input
    {
        width: 6%;
        height: 50%;
        margin-left: 20px;
        display: inline-block;
        background-image: url('@/assets/main/search.svg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        vertical-align: middle;
        position: relative;
    }

    .buttonsenter
    {
        width: 100%;
        height: 9%;
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
    