<template>
  <input
    :type="type"
    :value="value"
    :name="name"
    :placeholder="placeholder"
    @input="updateValue"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BasicInput',
  props: ['value', 'type', 'name', 'placeholder'],
  methods: {
    // TODO: fix ts error
    // @ts-ignore: Unreachable code error
    updateValue(e: VueEvent<HTMLInputElement>): void {
      this.$emit('input', e.target.value)
      this.$emit('change')
    },
  },
})
</script>
<style scoped="scss">
input[type='text'],
select {
  width: 100%;
  border: solid 1px #e1e1e1;
  height: 40px;
  padding: 10px 15px;
  background: #fff;
  outline: none;
}

input[type='text']:focus,
select:focus {
  border: solid 1px #4eb5e5;
  box-shadow: 0 0 3px 0 #4eb5e5 inset;
}
</style>
