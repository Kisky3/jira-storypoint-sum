<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Header />
    <Container />
  </div>
</template>

<script>
import Container from './components/organisms/Container.vue'
import Header from './components/molecules/Header.vue'

export default ({
  components: { Container, Header },
})
</script>
