<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/molecules/Header.vue'
import Footer from './components/molecules/Footer.vue'

export default ({
  components: { Header, Footer },
})
</script>
