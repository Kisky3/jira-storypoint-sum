<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- Container Start -->
    <div class="container">
      <search-panel @searchData="searchData($event)" />
      {{team}} {{sprint}}
      <doughnut-chart :data="data" />
    </div>

    <!-- Container End -->
  </div>
</template>
<style scope lang="scss">
.container {
  max-width: 800px;
  max-height: 800px;
  position: absolute;
  left: 50%;
  top: 420px;
  transform: translate(-50%, -50%);
}
</style>

<script>
import DoughnutChart from '../molecules/DoughnutChart.vue'
import SearchPanel from '../molecules/SearchPanel.vue'
import api from '../../api/info.js'

export default {
  components: {
    DoughnutChart,
    SearchPanel,
  },
  // @ts-ignore: Unreachable code error
  data() {
    return {
      team: "",
      sprint: ""
    }
  },
  computed: {
    // Chart用のデータプロパティ
    data() {
      api.getJiraStoryPointData(this.team, this.sprint)
      return {
          datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['pink', 'skyblue', 'gray'],
            borderColor: 'transparent'
          }],
          // これらのラベルは凡例とツールチップに表示されます。
          labels: [
            'Red',
            'Yellow',
            'Blue'
          ]}
    },
  },
  methods: {
    searchData(event) {
      if(event) {
        this.team = event.team;
        this.sprint = event.sprint;
      }
    },
  },
}
</script>
