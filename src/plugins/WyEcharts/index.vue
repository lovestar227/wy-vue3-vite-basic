<script setup lang="ts">
/**
 * WyEcharts组件
 */
import { mainViewResizeDataProvideKey } from "/@/provide";

import echarts, { ECOption } from "./index";

defineOptions({
  name: "WyEcharts"
});

interface Props {
  options: ECOption;
}

const props = withDefaults(defineProps<Props>(), {
  //echarts Option
  options: null
});

//echart DOM id
const eid = ref(`echarts-eid-${parseInt((Math.random() * 1000).toString())}`);
//echart DOM Ref
const echartsDom = ref<HTMLElement>(null);
//echart 创建之后的实例 echarts实例不要用响应式
const eChartInstance = shallowRef(null);

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
  eChartInstance.value = echarts.init(echartsDom.value);
  eChartInstance.value.setOption(props.options, true);
});

onBeforeUnmount(() => {
  eChartInstance.value.dispose();
});
</script>

<template>
  <div class="wy-echarts" ref="echartsDom" :id="eid"></div>
</template>

<style lang="scss" scoped></style>
