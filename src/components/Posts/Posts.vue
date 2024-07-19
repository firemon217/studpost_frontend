<template>
    <Header :isProfile="true" :isSearchSort="true" :isPost="true"></Header>
    <div class="posts">
        <div class="addPost">
            <h1>
                Делитесь своими iдеями, мыслями и историями, о чем вы сейчас думаете ?
            </h1>
            <my-button class="addButton" @click="$router.push('/home/createpost')"><Vue3Lottie :animationData="animButton"/></my-button>
            <h2>
                Добавить публикацию
            </h2>
        </div>
        <div class="post">
            <div class="info">
                <div>
                    <img src="@/assets/main/userposts.svg" /> Андрю Линкольн Николаевич
                </div>
                <div>
                    10 июля в 11:30 <img />
                </div>
            </div>
            <div class="title">
                <span>"</span>Как научится правильно писать Backend на Python?<span>"</span>
            </div>
            <div class="content__text">
                Данный документ описывает соглашение о том, как писать код для языка Python, включая стандартную библиотеку, входящую в состав Python...
            </div>
            <my-button class="content__image">
                <img src="@/assets/main/backgroundpost.jpg"/>
                <div></div>
                <div class="button-post">Читать</div>
            </my-button>
            <div class="rates">
                <span class="rates__info">
                    <span class="info__icon_char info__icon_char_view"></span> 1000 / <span class="info__icon_char info__icon_char_like"></span> 200 / <span class="info__icon_char info__icon_char_dislike"></span> 10
                 </span>
            </div>
        </div>
        <div class="post">
            <div class="info">
                <div>
                    <img src="@/assets/main/userposts.svg" /> Андрю Линкольн Николаевич
                </div>
                <div>
                    10 июля в 11:30 <img />
                </div>
            </div>
            <div class="title">
                <span>"</span>Как научится современному веб дизайну?<span>"</span>
            </div>
            <div class="content__text">
                В первую очередь нужно знать базовые понятия теории дизайна. К ним относятся: композиция. Знания в этой области нужны для правильной работы ...
            </div>
            <my-button class="content__image">
                <img src="@/assets/main/backgroundpost.jpg"/>
                <div></div>
                <div class="button-post">Читать</div>
            </my-button>
            <div class="rates">
                 <span class="rates__info">
                    <span class="info__icon_char info__icon_char_view"></span> 1000 / <span class="info__icon_char info__icon_char_like"></span> 200 / <span class="info__icon_char info__icon_char_dislike"></span> 10
                 </span>
            </div>
        </div>

        <my-button class="morePost">
            Еще посты
        </my-button>
    </div>
    <Footer></Footer>
</template>

<script>

import Header from '../Parts/Header.vue';
import Footer from '../Parts/Footer.vue';
import { Vue3Lottie } from 'vue3-lottie'
import animButton from '@/assets/main/data.json'

export default {
    name: 'posts-block',
    components: {
        Header,
        Vue3Lottie,
        Footer
    },  
    data()
    {
        return {
            animButton
        }
    },
    methods: {
        animationButton()
        {
            // let container = document.getElementById('animButton');
            // let params = {
            //     container: container,
            //     renderer: 'svg',
            //     loop: true,
            //     autoplay: false,
            //     path: data
            // };

        }
    },

    mounted()
    {
        this.animationButton()
    }
}
</script>

<style scoped>

   .posts
   {
        width: 100%;
        min-height: 118vh;
        display: flex;
        flex-direction: column;
        align-items: center;
   }

   .addPost
    {
        width: 1000px;
        height: 340px;
        background-color: white;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
        border: none;
        cursor: pointer;
    }

   .addPost> h1
   {
        width: 900px;
        font-weight: 400;
        font-size: 1.7em;
        margin-top: 3%;
        text-align: left;
   } 

   .addPost> h2
   {
        font-weight: 400;
        font-size: 1.4em;
        margin-top: 2%;
        color: #8A8989;
   }

   .post
   {
        width: 1000px;
        background-color: white;
        margin-top: 60px;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
   }

   .post> .info
   {
        width: 90%;
        height: 71px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2em;
        margin-top: 40px;
   }

   .post> .info> div:nth-child(1)
   {
        display: flex;
        align-items: center;
        font-size: 1.4em;
   }

   .post> .info> div:nth-child(1)> img
   {
        width: 71px;
        height: 71px;
        margin-right: 15px;
   }

   .post> .info> div:nth-child(2)
   {
        display: flex;
        align-items: center;
        color: #CECECE;
        font-size: 1.2em;
   }

   .post> .title
   {
        width: 80%;
        font-size: 2.3em;
        align-items: right;
        font-weight: 700;
        margin-top: 40px;
        font-family: "Montserrat", sans-serif;
   }

   .post> .content__text
   {
        width: 70%;
        font-size: 1.8em;
        margin-top: 40px;
   }

   .post> .content__image> img
   {
        width: 100%;
   }

   .button-post
    {
        width: 252px;
        height: 60px;
        border-radius: 30px;
        font-size: 1.6em;
        position: absolute;
        border: none;
        background-color: white;
        left: calc(50% - 126px);
        bottom: 0px;
        color: #8C3CFF;
        font-weight: 700;
        opacity: 0;
        transition: all .33s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
    }

   .post> .content__image> div:nth-child(2)
   {
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0,0,0,0.3), rgba(255, 255, 255, 0.4));
        border-radius: 30px;
        position: absolute;
        opacity: 0.5;
        top: 0;
        transition: opacity 0.33s ease-in-out;
   }

   .content__image:hover > div:nth-child(2)
   {
        opacity: 1;
   }

   .content__image:hover > .button-post
   {
        opacity: 1;
        transform: translateY(-20px);
   }

   .post> .rates
   {
        width: 90%;
        height: 60px;
        display: flex;
        justify-content: right;
        align-items: center;
        color: #CECECE;
        font-size: 1.25em;
        font-weight: 900;
        margin-top: 30px;
        margin-bottom: 30px;
   }

   .info__icon_char
   {
        display: inline-block; /* Сделать span блочным элементом */
        width: 40px; /* Ширина иконки */
        height: 40px; /* Высота иконки */
        background-size: cover; /* Растянуть изображение по размерам блока */
        background-repeat: no-repeat; /* Не повторять изображение */
        /* Дополнительные стили для красоты */
        background-position: center; /* Выравнивание по вертикали */
        vertical-align: middle;
        position: relative;
   }

   .info__icon_char_view
   {
        background-image: url('@/assets/main/view.svg'); /* Путь к изображению */
   }

   .info__icon_char_like
   {
        background-image: url('@/assets/main/like.svg'); /* Путь к изображению */
   }

   .info__icon_char_dislike
   {
        background-image: url('@/assets/main/dislike.svg'); /* Путь к изображению */
   }

   @media (max-width: 1366px)
  {

    .addPost
    {
        width: 600px;
    }

    .addPost> h1
    {
        width: 500px
    }

    .post
    {
        width: 600px;
    }

  }


</style>
    