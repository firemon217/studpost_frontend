<template>
    <div class="addPhoto">
        <input class="input-picture" type="file" @change="loadPicture($event)"/>
        <img src="@/assets/PhotoBlocks/inputpicture.svg" v-if="isPost"/>
        <Vue3Lottie :animationData="animProfilePhoto" v-if="isProfile"/>
        <img ref="loadPictureContainer" v-show="false" @click="emitPhoto"/>
    </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import animProfilePhoto from '@/assets/regist_auth/profile_anim.json'
export default {
    name: "add-photo",

    props: 
    {
        isProfile: Boolean,
        isPost: Boolean,
        modelValue: String
    },

    components: 
    {
        Vue3Lottie
    },

    data()
    {
        return{
            picture: "",
            animProfilePhoto
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
                    loadPictureContainer.click()
                }; 
                reader.readAsDataURL(file);
            }
        },

        emitPhoto()
        {
            this.$emit('update:modelValue', this.$refs.loadPictureContainer.src)
        }
    },

    watch:
    {

    }
}
</script>

<style scoped>

    .addPhoto
    {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        border: 3px #E0E0E0 dashed;
        position: relative;
    }

    .addPhoto > img
    {
        position: absolute;
        width: 90%;
        height: 90%;
        top: 5%;
        left: 5%;
        z-index: 1;
    }

    .addPhoto::after
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

    .input-picture
    {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 2;
    }

</style>