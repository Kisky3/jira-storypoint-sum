<script lang="ts">
import { Doughnut } from 'vue-chartjs'
import api from '@/api/info'

export default {
  extends: Doughnut,
  name: 'chart',
  data() {
    return {
      options: {
        responsive: true,
        legend: {
          position: 'right',
          labels: {
            fontSize: 28,
          },
        },
      },
    }
  },
  computed: {
    data() {
      api.getJiraStoryPointData()
      return {
        datasets: [
          {
            label: 'Dataset',
            data: [10, 60, 30],
            backgroundColor: ['pink', 'skyblue', 'gray'],
            borderColor: 'transparent',
          },
        ],
        labels: ['メンバー１', 'メンバー２', 'メンバー3'],
      }
    },
  },
  mounted() {
    // @ts-ignore: Unreachable code error
    this.renderChart(this.data, this.options)
  },
}
</script>
