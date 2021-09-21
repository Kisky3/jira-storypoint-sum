<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  name: 'chart',
  data () {
    return {
      data: {
        labels: ['向井', '鳥越', '楠'],
        datasets: [
          {
            label: 'Dataset',
            data: [10, 60, 30],
            backgroundColor: ['pink', 'skyblue', 'gray']
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>