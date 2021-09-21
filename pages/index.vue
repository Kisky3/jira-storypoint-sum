<template>
  <div>
    <Header/>
    <Chart/>
   </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Chart from '@/components/Chart.vue';

export default Vue.extend({
  components: {
    Chart
  }
})
</script>
