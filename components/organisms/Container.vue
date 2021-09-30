<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- Container Start -->
    <div class="container">
      <search-panel @searchData="searchData()" />
      <doughnut-chart />
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
export default {
  components: {
    DoughnutChart,
  },
  methods: {
    searchData(): void {
      alert('hey')
    },
  },
}
</script>
