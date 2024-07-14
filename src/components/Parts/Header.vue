<template>
    <header>
        <div class="profile" >
            <div class="profile__icon" v-if="this.$router.currentRoute._value.path == '/main'">
                <img src="@/assets/main/usericon.svg"/>
            </div>
            <div class="profile__link" v-if="this.$router.currentRoute._value.path == '/main'"><router-link>войти</router-link><router-link>регистрация</router-link></div>
        </div>
        <div class="logo">
            <img class="logo__ncfu" src="@/assets/main/ncfu.svg"/><img class="logo__studposts" src="@/assets/main/studposts.svg"/>
        </div>
        <nav>
            <div class="nav__link" :class="this.$router.currentRoute._value.path == '/main' ? 'nav__link--active' : ''">
                Главная
                <div></div>
            </div>
            <div class="nav__link" :class="this.$router.currentRoute._value.path == '/main/aboutus' ? 'nav__link--active' : ''">
                О проекте
                <div></div>
            </div>
        </nav>
        <div class="sortAndSearch" v-if="this.$router.currentRoute._value.path == '/main'">
            <div class="search__input">
                <img /> <my-input placeholder="Искать по названию" class="input-main"></my-input>
            </div>
                Сортировать по: <my-select class="select-main"></my-select>
        </div>
    </header>
</template>

<script>

export default {
    name: 'header-block',
}

</script>

<style scoped>

header
    {
        width: 100%;
        height: 40vh;
        position: relative;
        background-color: white;
        box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.2);
    }

    .profile
    {
        width: 100%;
        height: 22%;
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .profile__icon
    {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        background-color: #AD6BE2;
        overflow: hidden;
    }

    .profile__icon> img
    {
        width: 60px;
        height: 60px;
        position: relative;
        left: 5px;
        top: 10px;
    }

    .profile__link
    {
        margin-left: 10px;
        color: #4301A1;
        font-size: 1.6em;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
    }

    .profile__link> a
    {
        text-decoration: none;
    }

    .logo
    {
        width: 100%;
        height: 48%;
        display: flex;
        align-items: center;
    }

    .logo__ncfu
    {
        height: 88%;
        width: 12%;
        margin-left: 4%;
        margin-right: 4%;
    }

    .logo__studposts
    {
        height: 90%;
        width: 71%;
    }

    nav
    {
        width: 100%;
        height: 14%;
        display: flex;
        align-items: center;
    }

    .nav__link
    {
        width: 15%;
        height: 100%;
        font-size: 1.8em;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        left: 6%;
        margin-left: 2%;
    }

    .nav__link--active
    {
        color: #8C3CFF;
    }

    .nav__link> div
    {
        width: 100%;
        height: 5px;
        background-color: #C9C9C9;
        position: absolute;
        bottom: 0;
        border-radius: 2.5px;
    }

    .nav__link--active> div
    {
        background-color: #8C3CFF;
    }

    .sortAndSearch
    {
        width: 100%;
        height: 16%;
        display: flex;
        justify-content: right;
        align-items: center;
        border-top: 2px solid #C9C9C9;
        font-size: 1.4em;
    }

    .search__input
    {
        width: 18%;
        height: 60%;
        background-color: #F3F3F3;
        border-radius: 30px;
        display: flex;
        align-items: center;
        margin-right: 20px;
    }

    .search__input> img
    {
        width: 14%;
        height: 85%;
        margin-left: 5%;
    }  

</style>
    