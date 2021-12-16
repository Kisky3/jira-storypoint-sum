<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/molecules/Header.vue'

export default ({
  components: { Header },
})
</script>
