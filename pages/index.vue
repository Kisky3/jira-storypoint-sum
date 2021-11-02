<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Header />
    <Container />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Container from '~/components/organisms/Container.vue'
import Header from '~/components/molecules/Header.vue'
//
export default Vue.extend({
  components: { Container, Header },
})
</script>
