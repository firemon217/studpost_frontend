<template>
    <Header></Header>
    <div class="register">
        <h1>
            Регистрация
        </h1>
        <div class="params">
            <div class="aboutme">
                <div class="title">
                    Обо мне <span class="question question_aboutme"><div class="answer answer_aboutme">Введите свои имя, фамилию и отчество(при наличии) без пробелов</div></span>
                </div>
                <div class="input_block"><span class="symbol_input symbol_input__user"></span><my-input placeholder="Имя" class="input-registr" v-model="first_name" :class="{input_registr_error: spaceCheck(first_name)}"></my-input></div>
                <div class="input_block"><span class="symbol_input symbol_input__user"></span><my-input placeholder="Фамилия" class="input-registr" v-model="sur_name" :class="{input_registr_error: spaceCheck(sur_name)}"></my-input></div>
                <div class="input_block"><span class="symbol_input symbol_input__user"></span><my-input placeholder="Отчество (при наличии)" class="input-registr" v-model="middle_name" :class="{input_registr_error: spaceCheck(middle_name)}"></my-input></div>
            </div>
            <div class="enterparams">
                <div class="title">
                    Параметры ввода <span class="question question_enterparams"><div class="answer answer_enterparams">Введите логин, введите пароль из 8 символов и повторите его</div></span> 
                </div>
                <div class="input_block"><span class="symbol_input symbol_input__login"></span><my-input placeholder="Логин" class="input-registr" v-model="login" :class="{input_registr_error: spaceCheck(login)}"></my-input></div>
                <div class="input_block"><span class="symbol_input symbol_input__password"></span> <my-input placeholder="Придумайте пароль" class="input-registr" type="password" v-model="password" :class="{input_registr_error: spaceCheck(password)}"></my-input></div>
                <div class="input_block"><span class="symbol_input symbol_input__password"></span><my-input placeholder="Повторите пароль" class="input-registr" type="password" v-model="password_repeat" :class="{input_registr_error: spaceCheck(password_repeat)}"></my-input></div> 
            </div>
            <div class="optional">
                <div class="title">
                    Связь со мной (не обязательно) <span class="question question_optional"><div class="answer answer_optional">Введите действительную почту и номер телефона (не обязательно)</div></span>
                </div>
                <div class="input_block"><span class="symbol_input symbol_input__mail"></span><my-input placeholder="Почта" class="input-registr" v-model="email" :class="{input_registr_error: spaceCheck(email)}"></my-input></div>
                <div class="input_block"><span class="symbol_input symbol_input__phone"></span><my-input placeholder="Номер телефона" class="input-registr" v-model="phone" :class="{input_registr_error: spaceCheck(phone)}"></my-input></div>
            </div>
            <div class="captcha">
                <div class="title">
                    Решите задачу <span class="question question_captcha"><div class="answer answer_captcha">Введите символы, которые видете на изображении</div></span> 
                </div>
                <img ref="captcha__img"/>
                <div class="input_block"><span class="symbol_input symbol_input__captcha"></span><my-input placeholder="Текст на картинке" class="input-registr" v-model="captcha" :class="{input_registr_error: spaceCheck(captcha)}"></my-input></div>
            </div>
            <div class="agree">
                <div>
                    Я ознакомился(-лась) с <router-link>политикой конфеденциальности, </router-link><br>
                    также согласен(-на) с <router-link>правилами поведения на платформе</router-link>
                </div>
                <my-checkbox class="registr_checkbox" @click="checkbox = !checkbox" :checkbox="checkbox"></my-checkbox>
            </div>
            <div class="buttonsenter">
                <my-button class="button_regist" @click = 'registration'>Создать аккаунт</my-button>
                <router-link to="/main/authorization">У меня уже есть аккаунт</router-link>
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
    data()
    {
        return {
            checkbox: false,
            first_name: '',
            sur_name: '',
            middle_name: '',
            login: '',
            password: '',
            password_repeat: '',
            email: '',
            phone: '',
            captcha: '',
            captcha_token: '',
            notSpace: false
        }
    },
    methods:
    {
        getCaptcha()
        {
            const response = fetch("http://127.0.0.1:5000/api/captcha")
            const data = response.json()
            console.log(data)
            this.$refs.captcha__img.src = "data:image/png;base64," + data.captcha_image
            this.captcha_token = data.captcha_token
        },

        registration()
        {
            if(this.first_name == '' && this.sur_name == '' && this.middle_name == '' && this.login == '' && this.password == '' && this.password_repeat == '' && this.captcha == '')
            {
                alert('Введены не все данные')
                return
            }
            if(document.getElementsByClassName('input_registr_error').length != 0)
            {
                alert('Введены некорректные данные')
                return
            }
            if(this.password.length <= 8)
            {
                alert('Слишком короткий пароль')
                return
            }
            if(this.password != this.password_repeat)
            {
                alert('Пароли не совпадают')
                return
            }
            if(!this.checkbox)
            {
                alert('Не согласен(-на) с правилами поведения на платформе')
                return
            }
            const response = fetch("http://127.0.0.1:5000/api/auth", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Target-Action': 'REGISTER'
                },
                body: JSON.stringify({
                    first_name: this.first_name,
                    sur_name: this.sur_name,
                    middle_name: this.middle_name,
                    login: this.login,
                    password: this.password,
                    email: this.email,
                    phone: this.phone,
                    captcha_token: this.captcha_token,
                    input_captcha: this.captcha
                })
            })
            const data = response.json()
            console.log(data)
            if(!response)
            {
                alert("huia")
                return
            }
            this.$router.push("/main")
        },

        spaceCheck(elem)
        {
            let isSpace = false
            Array.from(elem).forEach(element => {
                if (element == ' ')
                {
                    isSpace = true
                }
            });
            if(isSpace)
            {
                return true
            }
            return false 
        }
    },

    mounted()
    {
        // this.getCaptcha()
    }
}
</script>

<style scoped>
    .register
    {
        width: 53%;
        height: 186vh;
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

    .question_aboutme:hover > .answer_aboutme, .question_enterparams:hover > .answer_enterparams, .question_optional:hover > .answer_optional, .question_captcha:hover > .answer_captcha
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

    .symbol_input__phone
    {
        background-image: url('@/assets/regist_auth/phone.svg');
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

    .symbol_input__user
    {
        background-image: url('@/assets/regist_auth/usericon.svg');
    }

    .symbol_input__mail
    {
        background-image: url('@/assets/regist_auth/mail.svg');
    }

    .agree
    {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4%;
    }

    .agree > div:nth-child(1)
    {
        font-size: 1.2em;
    }

    .agree > div:nth-child(1)> a
    {
        text-decoration: none;
        color: #0000A9;
    }

    .buttonsenter
    {
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6%;
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
    