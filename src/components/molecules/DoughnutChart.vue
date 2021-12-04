<template>
    <canvas id="chart"></canvas>
</template>

<script>

//記事末尾で補足
import Chart from 'chart.js/auto';

export default {
  methods: {
    renderChart() {
      let ctx = document.getElementById("chart");
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [10, 20, 30]
          }],

          // これらのラベルは凡例とツールチップに表示されます。
          labels: [
            'Red',
            'Yellow',
            'Blue'
          ]
        }
      });
    }
  },
  mounted() {
    this.renderChart();
  }
};
</script>
