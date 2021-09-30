<script lang="ts">
import { Doughnut } from 'vue-chartjs'
import api from '@/api/info'

export default {
  extends: Doughnut,
  name: 'chart',
  props: ['team', 'sprint'],
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
      api.getJiraStoryPointData(this.team, this.sprint)
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
    // TODO: fix ts error
    // @ts-ignore: Unreachable code error
    this.renderChart(this.data, this.options)
  },
}
</script>
