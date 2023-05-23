<script setup lang="ts">
import { DatasetOption } from "echarts/types/dist/shared";

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

const lineAndPieSorce = [
  ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
  ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
  ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
  ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
  ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1]
];

(lineAndPieChart.dataset as DatasetOption).source = lineAndPieSorce;

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
          //饼图标题
          graphic: {
            elements: [
              {
                style: {
                  text: lineAndPieSorce[0][dimension] + "年",
                  font: '16px "STHeiti", sans-serif'
                }
              }
            ]
          },
          series: {
            id: "pie",
            name: lineAndPieSorce[0][dimension],
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
      <el-card header="联动和共享数据集">
        <WyEcharts
          :options="lineAndPieChart"
          ref="lineAndPieChartRef"
        ></WyEcharts>
      </el-card>
    </div>

    <div class="chart-item">
      <el-card header="渐变堆积图">
        <WyEcharts
          :options="gradientStackedAreaOptions"
          ref="chart1"
        ></WyEcharts>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.charts-page {
  .chart-item {
    margin-bottom: 20px;

    :deep(.wy-echarts) {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
