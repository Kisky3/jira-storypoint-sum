<template>
  <div class="radio__container">
    <div v-for="(option, index) in options" :key="index">
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
    </div>
  </div>
</template>

<script>

export default ({
  name: 'InputRadio',
  props: ['value', 'options', 'name'],
  computed: {
    selected: {
      get() {
        return this.value
      },
      set(newValue) {
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

.radio__container {
  display: flex;
  flex-direction: row;
}

.radio {
  width: 250px;
  height: 10px;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  border-radius: 8px;
  vertical-align: middle;
  cursor: pointer;
  margin: 5px;
}

.radio:hover:after {
  border-color: #4eb5e5 !important;
}

.radio:after {
  -webkit-transition: border-color 0.2s linear;
  transition: border-color 0.2s linear;
  position: absolute;
  top: 50%;
  display: block;
  margin-top: -10px;
  width: 26px;
  height: 26px;
  background: #fff;
  border: 2px solid #bbb;
  border-radius: 6px;
  content: '';
}

.radio:before {
  transition: opacity 0.2s linear;
  position: absolute;
  top: 50%;
  left: 3px;
  display: block;
  margin-top: -7px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #4eb5e5;
  content: '';
  opacity: 0;
  z-index: 20;
}

.radio > span {
  margin-left: 35px;
}

input[type='radio']:checked + .radio:before {
  opacity: 1;
}
</style>
