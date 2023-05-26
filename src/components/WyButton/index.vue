<script setup lang="ts">
import type { ElButton } from "element-plus";
import { Ref } from "vue";

defineOptions({
  name: "WyButton"
});

interface Props {
  //点击是否有波浪效果
  wave?: boolean;
  //点击事件
  onClick?: (evt: MouseEvent) => any;
}

const props = withDefaults(defineProps<Props>(), {
  wave: false,
  onClick: null
});

//插槽信息
const slots = defineSlots<{
  default: (props: {}) => any;
  icon: (props: {}) => any;
  loading: (props: {}) => any;
}>();

const elButtonRef = ref<InstanceType<typeof ElButton> | undefined>(null);
//波浪效果状态
const wave = ref(false);
//触发波浪效果
const toggleWave = () => {
  wave.value = true;

  setTimeout(() => {
    wave.value = false;
  }, 1000);
};
//按钮点击事件
const click = (e: MouseEvent) => {
  //判断是否需要触发波浪
  if (wave && props.wave) {
    toggleWave();
  }
  //判断是否有传入的点击回调
  if (props.onClick) {
    props.onClick(e);
  }
};

/* Expose */
interface WyButtonExpose {
  elRef: Ref<InstanceType<typeof ElButton> | undefined>;
}
defineExpose<WyButtonExpose>({
  elRef: elButtonRef
});
</script>

<template>
  <el-button
    ref="elButtonRef"
    :class="wave ? 'wy-button-wave' : ''"
    @click="click($event)"
  >
    <template #default>
      <slot name="default"></slot>
    </template>
    <template #loading v-if="slots.loading">
      <slot name="loading"></slot>
    </template>
    <template #icon v-if="slots.icon">
      <slot name="icon"></slot>
    </template>
  </el-button>
</template>

<style lang="scss" scoped></style>
