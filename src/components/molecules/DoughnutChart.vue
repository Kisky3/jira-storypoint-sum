<template>
    <canvas id="chart" class="doughnut"></canvas>
</template>

<script>

//記事末尾で補足
import Chart from 'chart.js/auto';

export default {
  props:['data'],
  methods: {
    renderChart() {
      let ctx = document.getElementById("chart");
      new Chart(ctx, {
        type: 'doughnut',
        data: this.data
      });
    }
  },
  mounted() {
    this.renderChart();
  }
};
</script>
<style scoped>
 .doughnut {
   max-width:400px;
   max-height: 400px;
 }
</style>
