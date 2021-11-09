<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- Container Start -->
    <div class="container">
      <search-panel @searchData="searchData($event)" />
      <doughnut-chart :team="team" :sprint="sprint"/>
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
import DoughnutChart from '@/components/molecules/DoughnutChart.vue'
import SearchPanel from '@/components/molecules/SearchPanel.vue'
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
