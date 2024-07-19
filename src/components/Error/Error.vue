<template>
    <div class="error">
        <div class="errorBlock">
            <div class="status">
                {{ this.status }}
            </div>
            <div class="title">
                {{ this.title }}
            </div>
            <my-button class="closeError" @click="close"> 

            </my-button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'my-error',
    props:
    {
        status: String,
        title: String,
        modelValue: Boolean
    },
    methods:
    {
        close()
        {
            this.$emit('update:modelValue', false)
        }
    }
}

</script>

<style scoped>
    .error
    {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        z-index: 2;
    }

    .errorBlock
    {
        width: 20%;
        height: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        border: 2px dotted rgb(117, 28, 105);
        background-color: white;
        position: fixed;
        top: 40%;
        left: 40%;
    }

    .status
    {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: rgb(117, 28, 105);
        margin-top: 20px;
    }

    .title
    {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        color: rgb(117, 28, 105);
        margin-top: 20px;
    }

</style>