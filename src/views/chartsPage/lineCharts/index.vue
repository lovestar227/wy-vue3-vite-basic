<script setup lang="ts">
import echarts from "/@/plugins/WyEcharts/index";
import WyEcharts, { WyEchartsAPI } from "/@/plugins/WyEcharts/index.vue";

import gradientStackedAreaOptions from "./charts/gradientStackedAreaChart";
import lineAndPieChart from "./charts/lineAndPieChart";
import { updateAxisPointerType } from "./type";

defineOptions({
  name: "LineCharts"
});

/* 图表 ref */
const chart1 = ref<WyEchartsAPI | undefined>(null);
const lineAndPieChartRef = ref<WyEchartsAPI | undefined>(null);

onMounted(() => {
  //联动和共享数据集 折线图联动饼图
  lineAndPieChartRef.value.eChartInstance.on(
    "updateAxisPointer",
    function (event: updateAxisPointerType) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        //根据当前定位的点修改饼图的显示数据下标
        lineAndPieChartRef.value.eChartInstance.setOption({
          series: {
            id: "pie",
            label: {
              formatter: "{b}: {@[" + dimension + "]} ({d}%)"
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    }
  );
});
</script>

<template>
  <div class="charts-page">
    <div class="chart-item">
      <el-card header="渐变堆积图">
        <WyEcharts
          :options="gradientStackedAreaOptions"
          ref="chart1"
        ></WyEcharts>
      </el-card>
    </div>

    <div class="chart-item">
      <el-card header="联动和共享数据集">
        <WyEcharts
          :options="lineAndPieChart"
          ref="lineAndPieChartRef"
        ></WyEcharts>
      </el-card>
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
