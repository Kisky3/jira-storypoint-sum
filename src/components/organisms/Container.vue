<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- Container Start -->
    <div class="container">
      <div class="container__wrap">
        <search-panel @searchData="searchData($event)" />
        {{team}} {{sprint}}
        <doughnut-chart :data="data" />
      </div>
    </div>
    <!-- Container End -->
  </div>
</template>
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
          labels: [
            'メンバー1',
            'メンバー2',
            'メンバー3'
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
