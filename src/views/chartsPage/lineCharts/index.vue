<script setup lang="ts">
import { DatasetOption } from "echarts/types/dist/shared";
import { debounce } from "lodash-unified";

import WyEcharts, { WyEchartsAPI } from "/@/plugins/WyEcharts/index.vue";

import gradientStackedAreaOption from "./charts/gradientStackedAreaChart";
import lineAndPieOption from "./charts/lineAndPieChart";
import { getTemperatureChart } from "./charts/temperatureChart";
import { updateAxisPointerType } from "./type";

defineOptions({
  name: "LineCharts"
});

/* 图表 ref */
const gradientStackedAreaChart = ref<WyEchartsAPI | undefined>(null);
const temperatureChartRef = ref<WyEchartsAPI | undefined>(null);
const lineAndPieChartRef = ref<WyEchartsAPI | undefined>(null);

/* 联动和共享数据集 */
const lineAndPieSorce = [
  ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
  ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
  ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
  ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
  ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1]
];

(lineAndPieOption.dataset as DatasetOption).source = lineAndPieSorce;

/* N天温度图 */
const temperatureDays = ref(30);
const temperaturePercent = ref(0.2);
const temperatureChartOption = ref(
  getTemperatureChart(temperatureDays.value, temperaturePercent.value)
);

const percentOptions = new Array(11).fill(0).map((item, index) => {
  if (index == 0) return { label: "0", value: 0 };
  return { label: "" + index / 10, value: index / 10 };
});
/**
 * 取一组新数据渲染图表
 */
const updatePercentOptions = debounce(() => {
  temperatureChartOption.value = getTemperatureChart(
    temperatureDays.value,
    temperaturePercent.value
  );
}, 0.5);

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
      <el-card>
        <template #header>
          <div class="chart-card-header">
            {{ "未来" + temperatureDays + "天温度图" }}
            <div calss="flex">
              天数：
              <el-input
                v-model="temperatureDays"
                style="margin-right: 20px; width: 80px"
                @change="updatePercentOptions"
              ></el-input>
              稍高温/低温百分比：
              <el-select
                v-model="temperaturePercent"
                class="m-2"
                style="width: 80px"
                @change="updatePercentOptions"
              >
                <el-option
                  v-for="item in percentOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-button @click="updatePercentOptions" type="primary">
                换一组数据
              </el-button>
            </div>
          </div>
        </template>
        <WyEcharts
          :options="temperatureChartOption"
          ref="temperatureChartRef"
        ></WyEcharts>
      </el-card>
    </div>

    <div class="chart-item">
      <el-card header="联动和共享数据集">
        <WyEcharts
          :options="lineAndPieOption"
          ref="lineAndPieChartRef"
        ></WyEcharts>
      </el-card>
    </div>

    <div class="chart-item">
      <el-card header="渐变堆积图">
        <WyEcharts
          :options="gradientStackedAreaOption"
          ref="gradientStackedAreaChart"
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
    .chart-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
