<script setup lang="ts">
/**
 * WY开关组件
 */

import { computed, unref, watch } from "vue";

defineOptions({
  name: "WySwitch"
});

const emit = defineEmits<{
  "update:modelValue": [v: boolean];
  change: [v: boolean];
}>();

interface Props {
  modelValue?: boolean;
  width?: number;
  height?: number;
  hasBorder?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  /* 开关状态: true-开启, false-关闭 */
  modelValue: false,

  /* 开关宽度 */
  width: 40,

  /* 开关高度 */
  height: 22,

  /* 是否有边框 */
  hasBorder: false
});
/* 初始开关状态 非响应式*/
const init_isOpen = unref(props.modelValue);

/**
 * --------------------------------------------
 * 样式 start
 * --------------------------------------------
 */
/* css变量 */
const wySwitchStyle = {
  /* 背景色 */
  "--wy-switch-open-bgc": "#409eff",
  "--wy-switch-close-bgc": "#dcdfe6",
  /* 边框颜色 */
  "--wy-switch-open-border-color": "#8e8e93",
  "--wy-switch-close-border-color": "#8e8e93",
  /* 圆的背景色 */
  "--wy-switch-open-circle-color": "#fff",
  "--wy-switch-close-circle-color": "#fff",
  /* 动画持续时间 */
  "--wy-switch-transition": "0.5s"
};

/* 按钮的动态样式 */
const buttonStyle = computed(() => {
  return {
    border: props.hasBorder ? "" : "0",
    width: props.width ? `${props.width}px` : "100%",
    height: props.height ? `${props.height}px` : "22px",
    "border-radius": props.height ? `${props.height / 2}px` : "11px"
  };
});

/* 圆的动态样式 */
const circleStyle = computed(() => {
  return {
    top: props.hasBorder ? "1px" : "2px",
    right: init_isOpen ? "1px" : "auto",
    left: init_isOpen ? "auto" : "1px",
    width: props.width ? `${props.height - 4}px` : "100%",
    height: props.height ? `${props.height - 4}px` : "22px"
  };
});

/**
 * --------------------------------------------
 * 样式 end
 * --------------------------------------------
 */

//button Ref
const buttonRef = ref<HTMLElement | undefined>(null);

//circle Ref
const circleRef = ref<HTMLElement | undefined>(null);

/**
 * 开关切换
 */
const toggleSwitch = () => {
  emit("update:modelValue", !props.modelValue);
  emit("change", !props.modelValue);
};

/**
 * 通过监听的方式触发开关移动动画
 * PS：通过watch触发，可以让多个监听同一个值的开关，在切换的时候一起切换动画
 */
watch(
  () => props.modelValue,
  newVal => {
    /* 开启/关闭 圆的动画 */
    if (init_isOpen === newVal) {
      circleRef.value.style.transform = "none";
    } else if (init_isOpen) {
      circleRef.value.style.transform = `translateX(calc( -${buttonRef.value.clientWidth}px + 100% + 2px))`;
    } else if (!init_isOpen) {
      circleRef.value.style.transform = `translateX(calc( ${buttonRef.value.clientWidth}px - 100% - 2px))`;
    }
  }
);
</script>

<template>
  <div
    class="wy-switch"
    :class="props.modelValue ? 'wy-switch-open' : 'wy-switch-close'"
    :style="wySwitchStyle"
  >
    <button
      class="wy-switch-botton"
      type="button"
      @click="toggleSwitch"
      :style="buttonStyle"
      ref="buttonRef"
    >
      <span class="circle" :style="circleStyle" ref="circleRef">
        <!-- 开关-开启-图标 -->
        <span class="icon" v-show="props.modelValue">
          <slot name="open-circle"></slot>
        </span>
        <!-- 开关-关闭-图标 -->
        <span class="icon" v-show="!props.modelValue">
          <slot name="close-circle"></slot>
        </span>
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.wy-switch {
  .wy-switch-botton {
    position: relative;
    display: block;
    transition: background-color var(--wy-switch-transition);
    flex-shrink: 0;
    .circle {
      position: absolute;
      top: 1px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      transition: transform var(--wy-switch-transition);
      .icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
  }
}

/* switch 打开样式 */
.wy-switch-open {
  .wy-switch-botton {
    border: 1px solid var(--wy-switch-open-border-color);
    background-color: var(--wy-switch-open-bgc);
    .circle {
      background-color: var(--wy-switch-open-circle-color);
      box-shadow: 0 1px 2px rgb(0 0 0 / 4%), 0 1px 2px rgb(0 0 0 / 6%);
    }
  }
}

/* switch 关闭样式 */
.wy-switch-close {
  .wy-switch-botton {
    border: 1px solid var(--wy-switch-close-border-color);
    background-color: var(--wy-switch-close-bgc);
    .circle {
      background-color: var(--wy-switch-close-circle-color);
      box-shadow: 0 1px 2px rgb(0 0 0 / 4%), 0 1px 2px rgb(0 0 0 / 6%);
    }
  }
}

button:enabled {
  cursor: pointer;
}
</style>
