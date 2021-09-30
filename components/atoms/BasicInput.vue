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
