<template>
    <header>
        <div class="empty" >

        </div>
        <div class="logo">
            <img class="logo__ncfu" src="@/assets/header/ncfu.svg"/><img class="logo__studposts" src="@/assets/header/studposts.svg"/>
        </div>
        <nav>
            <router-link to="/main" class="nav__link">
                Главная
                <div></div>
            </router-link>
            <router-link to="/main/aboutus"  class="nav__link">
                О проекте
                <div></div>
            </router-link>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'header-regist-block',
}

</script>

<style scoped>

    header
    {
        width: 100%;
        height: 34vh;
        position: relative;
        background-color: white;
        box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.2);
    }

    .empty
    {
        width: 100%;
        height: 24.6%;
    }

    .logo
    {
        width: 100%;
        height: 56.4%;
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
        height: 19%;
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
        text-decoration: none;
        color: black;
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

</style>