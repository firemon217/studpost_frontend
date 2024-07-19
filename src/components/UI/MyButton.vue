<template>
    <button><slot></slot></button>
</template>

<script>

export default {
    name: 'my-button',
}
</script>

<style scoped>

    .addButton
   {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        border: 4px dotted #ad79f0;
        margin-top: 30px;
        cursor: pointer;
   }

    .hideSearch
    {
        position: relative;
        top: 0;
        left: 47.5%;
        width: 5%;
        height: 50px;
        background-image: url('@/assets/header/dropout.svg');
        background-size: 100% 100%;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        transform: rotate(180deg);
        transition: 0.3s;
    }

    .hideSearchHidden
    {
        transform: rotate(0);
        top: -6vh;
    }
   
   .content__image
   {
        width: 90%;
        max-height: 243px;
        border-radius: 30px;
        margin-top: 50px;
        overflow: hidden;
        position: relative;
        border: none;
        cursor: pointer;
   }

    .morePost
    {
        width: 252px;
        height: 60px;
        border-radius: 30px;
        font-size: 1.6em;
        border: none;
        background-color: white;
        margin-top: 60px;
        transition-duration: 0.2s;
        cursor: pointer;
    }

    .morePost:hover
    {
        background-color: rgb(216, 216, 216);
    }

    .morePost:active
    {
        transition-duration: 0.2s;
        background-color: rgb(128, 128, 128);
    }

    .button_regist
    {
        width: 47%;
        height: 60%;
        background-color: #AC2DFE;
        color: white;
        border: none;
        border-radius: 20px;
        font-size: 1.9em;
        transition-duration: 0.2s;
    }

    .button_regist:hover
    {
        background-color: #9323dd;
        color: rgb(212, 212, 212);
    }

    
    .button_regist:active
    {
        transition-duration: 0.1s;
        background-color: #65169b;
        color: rgb(167, 167, 167);
    }

    .button_auth
    {
        width: 47%;
        height: 60%;
        background-color: #AC2DFE;
        color: white;
        border: none;
        border-radius: 20px;
        font-size: 1.9em;
        transition-duration: 0.2s;
    }

    .button_auth:hover
    {
        background-color: #9323dd;
        color: rgb(212, 212, 212);
    }

    
    .button_auth:active
    {
        transition-duration: 0.1s;
        background-color: #65169b;
        color: rgb(167, 167, 167);
    }

    .button_create
    {
        width: 48%;
        height: 4%;
        background-color: #AC2DFE;
        color: white;
        border: none;
        border-radius: 20px;
        font-size: 1.7em;
        transition-duration: 0.2s;
        position: relative;
        left: 26.5%;
        margin-top: 10%;
    }

    .button_create:hover
    {
        background-color: #9323dd;
        color: rgb(212, 212, 212);
    }

    
    .button_create:active
    {
        transition-duration: 0.1s;
        background-color: #65169b;
        color: rgb(167, 167, 167);
    }

    .button_edit
    {
        width: 48%;
        height: 4%;
        background-color: #AC2DFE;
        color: white;
        border: none;
        border-radius: 20px;
        font-size: 1.7em;
        transition-duration: 0.2s;
        position: relative;
        left: 26.5%;
        margin-top: 10%;
    }

    .button_edit:hover
    {
        background-color: #9323dd;
        color: rgb(212, 212, 212);
    }

    
    .button_edit:active
    {
        transition-duration: 0.1s;
        background-color: #65169b;
        color: rgb(167, 167, 167);
    }

    .closeError
    {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 7.5%;
        height: 15%;
        transform: rotate(45deg);
        background-color: #65169b;
        clip-path: polygon(45% 0,
                            55% 0,
                            55% 45%,
                            100% 45%,
                            100% 55%,
                            55% 55%,
                            55% 100%,
                            45% 100%,
                            45% 55%,
                            0 55%,
                            0 45%,
                            45% 45%);
    }

</style>
    