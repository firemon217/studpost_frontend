<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    outline-offset: 0;
    font-family: "Inter", sans-serif;
  }

  #app {
    width: 100%;
    min-height: 200vh;
    background-image: url("@/assets/main/background.svg");
    background-size: 100%;
    background-repeat: repeat-y;
    position: relative;
  }

  @media (max-width: 1745px)
  {
    #app
    {
      font-size: 14px;
    }
  }

  @media (max-width: 1536px)
  {
    #app
    {
      font-size: 12px;
    }
  }

  @media (max-width: 1280px)
  {
    #app
    {
      font-size: 10px;
    }
  }

</style>
