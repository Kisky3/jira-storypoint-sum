<template>
  <div>
    <my-header />
    <nuxt/>
    <my-footer />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>

<script>
  import MyHeader from '../components//Header.vue';
  import MyFooter from '../components/Footer';

  export default {
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>
