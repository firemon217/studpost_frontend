<template>
    <button><slot></slot></button>
</template>

<script>

export default {
    name: 'my-button',
}
</script>

<style scoped>

    .addPost
   {
        width: 1000px;
        height: 340px;
        background-color: white;
        margin-top: 70px;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
        border: none;
        cursor: pointer;
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

    @media (max-width: 1366px)
    {

        .addPost
        {
            width: 600px;
        }

    }

</style>
    