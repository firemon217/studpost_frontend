<template>
    <input :value="modelValue" @input="Input"/>
</template>

<script>

export default {
    name: 'my-input',
    props:{
        modelValue: String, Number
    },
    methods:
    {
        Input(event)
        {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

    .input-main
    {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0);
        border: none;
        padding-left: 5px;
        padding-right: 10px;
        font-size: 1em;
        color: #000;
    }

    .input-main::placeholder
    {
        color: #000;
    }

    .input-registr
    {       
        width: 94%;
        height: 100%;
        background-color: rgba(0,0,0,0);
        border: none;
        font-size: 1.6em;
        padding-left: 1em;
        padding-right: 1em;
    } 
    
    .input-registr::placeholder
    {
        color: #CECECE
    }

    .input-auth
    {       
        width: 94%;
        height: 100%;
        background-color: rgba(0,0,0,0);
        border: none;
        font-size: 1.6em;
        padding-left: 1em;
        padding-right: 1em;
    } 

    .input-createpost
    {       
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0);
        border: none;
        font-size: 1.6em;
        padding-left: 1em;
        padding-right: 1em;
    } 
    
    .input-auth::placeholder
    {
        color: #CECECE
    }

</style>
    