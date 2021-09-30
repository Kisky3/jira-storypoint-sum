<script lang="ts">
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  name: 'chart',
  data () {
    return {
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
  computed: {
    data() {
       return {
         datasets: [{
            label: 'Dataset',
            data: [10, 60, 30],
            backgroundColor: ['pink', 'skyblue', 'gray'],
            borderColor: 'transparent'
          }],
          labels:['メンバー１', 'メンバー２', 'メンバー3']
       }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>