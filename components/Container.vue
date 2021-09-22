<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- Container Start -->
    <div class="container">
    <doughnut-chart/>
    </div>

    <!-- Container End -->
  </div>
</template>
<style scope lang="scss">
.container  {
  max-width: 800px;
  max-height: 800px;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%,-50%);
}
</style>

<script>
import DoughnutChart from '@/components/DoughnutChart.vue'
export default {
  components: {
    DoughnutChart
  }
}

</script>

