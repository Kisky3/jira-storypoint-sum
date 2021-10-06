<template>
  <button type="button" class="c-arrow-btn" @click="submit">
    <slot />
  </button>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BasicBtn',
  methods: {
    submit(): void {
      this.$emit('handleOnClick')
    },
  },
})
</script>
<style lang="scss">
.nav__toggle {
  width: 70px;
  height: 40px;
  background: linear-gradient(to bottom, #4eb5e5 0%, #389ed5 100%); /* W3C */
  border: none;
  border-radius: 5px;
  position: relative;
  color: #fbfbfb;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  font-size: 15px;
  text-align: left;
  text-indent: 5px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}
</style>
