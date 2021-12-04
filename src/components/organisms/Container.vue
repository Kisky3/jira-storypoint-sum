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

<script lang="ts">
import DoughnutChart from '../molecules/DoughnutChart.vue'
import SearchPanel from '../molecules/SearchPanel.vue'
import api from '../../api/info'

// データの型を定義する
export type SearchData = {
  team: string,
  sprint: string
}

export default {
  components: {
    DoughnutChart,
    SearchPanel,
  },
  data():SearchData {
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
  methods: {
    searchData(event:SearchData): void {
      if(event) {
        this.team = event.team;
        this.sprint = event.sprint;
      }
    },
  },
}
</script>
