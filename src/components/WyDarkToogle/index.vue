<script setup lang="ts">
/**
 * 明暗模式切换开关
 * @see 切换明暗模式API {@link https://vueuse.org/core/useDark/#usedark}
 */
import { useDark, useToggle } from "@vueuse/core";

import moon from "/@/assets/svg/moon.svg?component";
import sunny from "/@/assets/svg/sunny.svg?component";
import WySwitch from "/@/components/WySwitch/index.vue";
defineOptions({
  name: "WyDarkToogle"
});

const emit = defineEmits<{
  change: [v: boolean];
}>();

/**
 * 开关样式
 */
const wySwitchStyle = {
  "--wy-switch-open-bgc": "#616162",
  "--wy-switch-close-bgc": "#f1f1f1",
  "--wy-switch-open-circle-color": "#000000"
};
/**
 * 当前模式
 * true-暗黑模式
 * false-明亮模式
 */
const isDark = useDark();
/**
 * vue Use切换模式
 */
const toggleDark = useToggle(isDark);
/**
 * 切换模式
 * @param {boolean} value
 */
function changeDark(value: boolean) {
  //通知父组件模式变化
  emit("change", value);
  //vue use 切换明暗模式
  toggleDark(value);
}
</script>

<template>
  <wy-switch
    :model-value="isDark"
    @change="changeDark"
    :style="wySwitchStyle"
    has-border
    class="wy-dark-toogle"
  >
    <template #open-circle>
      <moon :style="{ color: '#fff' }"></moon>
    </template>
    <template #close-circle>
      <sunny></sunny>
    </template>
  </wy-switch>
</template>

<style lang="scss" scoped></style>
