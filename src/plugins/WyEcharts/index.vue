<script setup lang="ts">
/**
 * WyEcharts组件
 */
import { ShallowRef } from "vue";

import { mainViewResizeDataProvideKey } from "/@/provide";

import echarts, { ECOption } from "./index";

defineOptions({
  name: "WyEcharts"
});

interface Props {
  options: ECOption;
  theme?: string;
}

const props = withDefaults(defineProps<Props>(), {
  //Echarts Option
  options: null,
  //echarts 主题 默认主题为basic-write
  theme: "basic-write"
});

//echart DOM id
const eid = ref(`echarts-eid-${parseInt((Math.random() * 1000).toString())}`);
//echart DOM Ref
const echartsDom = ref<HTMLElement>(null);
//echart 创建之后的实例 echarts实例不要用响应式
const eChartInstance = shallowRef<echarts.ECharts>(null);

//监听图表数据变化，重新渲染图表
watch(
  () => props.options,
  newOptions => {
    eChartInstance.value.setOption(newOptions);
  },
  {
    deep: true
  }
);

/* 监听mainView大小调整，重新调整图表 */
const mainViewResizeData = inject(mainViewResizeDataProvideKey);

watch(
  () => mainViewResizeData,
  () => {
    eChartInstance.value.resize();
  },
  { deep: true }
);

onMounted(() => {
  //初始化 echart 实例
  eChartInstance.value = echarts.init(echartsDom.value, props.theme);
  //设置 eachrt option
  eChartInstance.value.setOption(props.options, true);
});

onBeforeUnmount(() => {
  eChartInstance.value.dispose();
});

export interface WyEchartsAPI {
  eChartInstance: ShallowRef<echarts.ECharts>;
}

defineExpose<WyEchartsAPI>({
  //expose echarts实例
  eChartInstance: eChartInstance
});
</script>

<template>
  <div class="wy-echarts" ref="echartsDom" :id="eid"></div>
</template>

<style lang="scss" scoped></style>
