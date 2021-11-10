<script lang="ts">
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  name: 'chart',
  props: ["data"],
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
  mounted() {
    // TODO: fix ts error
    // @ts-ignore: Unreachable code error
    this.renderChart(this.data, this.options)
  },
}
</script>
