<template>
  <div>
    <template v-for="(option, index) in options">
      <input
        :id="option.label"
        :key="index"
        :name="name"
        type="radio"
        v-model="selected"
        :value="option.value"
      />
      <label :key="option.label" :for="option.label" class="radio">
        <span>{{ option.label }}</span>
      </label>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InputRadio',
  props: ['value', 'options', 'name'],
  computed: {
    selected: {
      get(): string | number | boolean {
        return this.value
      },
      set(newValue: string | number | boolean): void {
        this.$emit('input', newValue)
      },
    },
  },
})
</script>
<style>
input[type='radio'] {
  display: none;
}

.radio {
  width: 120px;
  box-sizing: border-box;
  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
  position: relative;
  display: inline-block;
  border-radius: 8px;
  vertical-align: middle;
  cursor: pointer;
}

.radio:hover {
  background-color: #e2edd7;
}

.radio:hover:after {
  border-color: #4eb5ac !important;
}

.radio:after {
  -webkit-transition: border-color 0.2s linear;
  transition: border-color 0.2s linear;
  position: absolute;
  top: 50%;
  display: block;
  margin-top: -10px;
  width: 16px;
  height: 16px;
  background: #fff;
  border: 2px solid #bbb;
  border-radius: 6px;
  content: '';
}

.radio:before {
  -webkit-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
  position: absolute;
  top: 50%;
  left: 5px;
  display: block;
  margin-top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4eb5ac;
  content: '';
  opacity: 0;
  z-index: 20;
}

.radio > span {
  margin-left: 25px;
}

input[type='radio']:checked + .radio:before {
  opacity: 1;
}
</style>
