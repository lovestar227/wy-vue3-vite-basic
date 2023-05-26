<script setup lang="ts">
/**
 * 自动判断文本是否溢出，显示tooltip
 * PS：需要固定text的宽度，否则无效
 *  @see 依赖el-tooltip组件 {@link https://element-plus.gitee.io/zh-CN/component/tooltip.html}
 */

import { nextTick, ref, withDefaults } from "vue";

defineOptions({
  name: "WyToolTip",
  //禁用默认的组件 attribute 透传行为
  inheritAttrs: false
});

interface Props {
  text?: string;
  multipleJudgments?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  //文本内容&tooltip默认内容
  text: "",
  //多重判断-true-判断多次'文本溢出需要展示tooltip''；false-只判断一次；
  multipleJudgments: false
});
//text Ref
const textRef = ref<HTMLElement | undefined>(null);
//是否显示tooltip
const disabled = ref(true);
//只判断一次是否需要显示toolTip
const onlyOnce = ref(false);
/* 菜单hover判断文本是否溢出来控制tooltip的显示 */
function hoverMenu() {
  //是否只判断一次是否显示tooltip
  if (onlyOnce.value || props.multipleJudgments) return;

  nextTick(() => {
    const spanDom = textRef.value;
    // 如果文本的内容宽度大于文本实际宽度，则显示文本提示tooltip
    spanDom?.scrollWidth > spanDom?.clientWidth
      ? (disabled.value = false)
      : (disabled.value = true);
    onlyOnce.value = true;
  });
}
</script>

<template>
  <el-tooltip placement="top" :offset="-10" :disabled="disabled">
    <template #content>
      <slot name="content">{{ props.text }}</slot>
    </template>
    <span
      ref="textRef"
      @mouseover="hoverMenu"
      class="tool-tip-text"
      v-bind="$attrs"
    >
      <slot>
        {{ props.text }}
      </slot>
    </span>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.tool-tip-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
