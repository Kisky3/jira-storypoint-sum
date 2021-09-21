<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  name: 'chart',
  data () {
    return {
      data: {
        labels: ['メンバー１', '向井', 'メンバー3'],
        datasets: [
          {
            label: 'Dataset',
            data: [10, 60, 30],
            backgroundColor: ['pink', 'skyblue', 'gray'],
            borderColor: 'transparent'
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'right',
          labels : {
            fontSize: 28,
          }
        },
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>