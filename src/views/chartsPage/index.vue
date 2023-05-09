<script setup lang="ts">
import WyEcharts from "/@/plugins/WyEcharts/index.vue";

import gradientStackedAreaOptions from "./charts/gradientStackedAreaChart.js";
import otherChartOptions from "./charts/otherChart.js";
import simpleBarChartOptions from "./charts/simpleBarChart.js";
import simplePieOptions from "./charts/simplePieChart.js";

defineOptions({
  name: "ChartsPage"
});
</script>

<template>
  <div class="charts-page">
    <div class="chart-item">
      <WyEcharts :options="simpleBarChartOptions"></WyEcharts>
    </div>
    <div class="chart-item">
      <WyEcharts :options="otherChartOptions"></WyEcharts>
    </div>
    <div class="chart-item">
      <WyEcharts :options="gradientStackedAreaOptions"></WyEcharts>
    </div>
    <div class="chart-item">
      <WyEcharts :options="simplePieOptions"></WyEcharts>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.charts-page {
  .chart-item {
    :deep(.wy-echarts) {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
