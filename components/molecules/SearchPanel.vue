<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- Search Panel Start -->
    <basic-input></basic-input>
    <basic-radio></basic-radio>
    <button @click="searchData">Search</button>

    <!-- Search Panel End -->
  </div>
</template>
<style scope lang="scss"></style>

<script lang="ts">
import BasicInput from '../atoms/BasicInput.vue'
import BasicRadio from '../atoms/BasicRadio.vue'
export default {
  components: {
    BasicInput,
    BasicRadio,
  },
  methods: {
    searchData(): void {
      this.$emit('searchData')
    },
  },
}
</script>
