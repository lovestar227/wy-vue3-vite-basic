<script setup lang="ts">
defineOptions({
  name: "WyPopoverListItem"
});

interface Props {
  item: any;
  activeItemKey: any;
  keyField?: string;
  valueField?: string;
  showField?: string;
}

const props = withDefaults(defineProps<Props>(), {
  //数据源
  item: null,
  //当前选中的单项
  activeItemKey: null,
  //独一无二的id
  keyField: "key",
  //储存的字段
  valueField: "value",
  //显示的字段
  showField: "value"
});

/* emit */
const emit = defineEmits<{
  (e: "update", v: any): void;
}>();

/* 单项容器显示的文本 */
const show = computed(() => {
  return typeof props.item === "object"
    ? props.item[props.showField]
    : props.item;
});

//选择项触发
const clickItem = (item: any) => {
  emit("update", {
    key: item[props.keyField] ? item[props.keyField] : item,
    value: item
  });
};

//判断当前选项是否被选中赋予选中样式
const isActive = () => {
  if (props.activeItemKey) {
    if (typeof props.item === "object") {
      return props.item[props.keyField] === props.activeItemKey
        ? "wy-item-active"
        : "";
    } else {
      return props.item === props.activeItemKey ? "wy-item-active" : "";
    }
  }
};
</script>

<template>
  <!-- WyPopoverListItem 单项容器元素 -->
  <div class="wy-item" @click="clickItem(item)" :class="isActive()">
    <!-- 通过 v-slot="default" 自定义单项容器内容 -->
    <slot name="default">
      <!-- 单项容器默认显示文本 -->
      {{ show }}
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.wy-item-active {
  color: #fff;
  background-color: #4091f7;
  background-color: $main-color;
}
</style>
