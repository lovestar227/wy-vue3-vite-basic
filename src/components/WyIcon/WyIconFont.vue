<script setup lang="ts">
/**
 * iconfont图标组件
 *  @see icon图标使用 {@link https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.27&helptype=code#:~:text=%22%3E%3C/i%3E-,symbol%20%E5%BC%95%E7%94%A8,-%E8%BF%99%E6%98%AF%E4%B8%80%E7%A7%8D}
 */
defineOptions({
  name: "WyIconFont",
  //禁用默认的组件 attribute 透传行为
  inheritAttrs: false
});
interface Props {
  icon: string;
  svg?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  //图标代码
  icon: "",
  //是否为symbol引用-svg
  svg: false
});
</script>

<template>
  <!-- iconfont symbol 引用 -->
  <svg class="wy-icon-svg" aria-hidden="true" v-bind="$attrs" v-if="props.svg">
    <use :xlink:href="'#' + props.icon"></use>
  </svg>
  <!-- iconfont font-class 引用 -->
  <i class="iconfont wy-icon" :class="props.icon" v-bind="$attrs" v-else></i>
</template>

<style lang="scss" scoped></style>
