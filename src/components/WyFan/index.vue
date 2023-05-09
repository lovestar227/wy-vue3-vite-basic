<script setup lang="ts">
import { throttle } from "lodash-unified";

defineOptions({
  name: "WyFan"
});
interface FanItem extends RecordAnyForList {
  id: string | number;
  open: boolean;
}
interface Props {
  list: FanItem[];
  defaultActive: number;
}
const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  defaultActive: -1
});
const currentList = ref<FanItem[]>([]);
const activeFanIndex = ref(-1);
/**
 * 打开扇面
 * @param {number} index 点击的扇面index
 */
const openFan = throttle((index: number) => {
  if (activeFanIndex.value > -1) {
    //关闭目前打开的扇面
    currentList.value[activeFanIndex.value].open = false;
  }
  //打开点击的扇面
  currentList.value[index].open = true;
  activeFanIndex.value = index;
}, 500);
/**
 * 关闭扇面
 */
const closeFan = () => {
  if (activeFanIndex.value > -1) {
    //关闭目前打开的扇面
    currentList.value[activeFanIndex.value].open = false;
  }

  activeFanIndex.value = -1;
};

onBeforeMount(() => {
  currentList.value = props.list ? props.list : [];
  //defaultActive为有效范围值则初始化打开的扇面
  if (
    props.defaultActive > -1 &&
    props.defaultActive < currentList.value.length
  ) {
    currentList.value[props.defaultActive].open = true;
    activeFanIndex.value = props.defaultActive;
  }
});
</script>

<template>
  <div class="wy-fan">
    <div
      class="wy-fan-item"
      v-for="(item, index) in currentList"
      :key="item.id"
      :class="[item.open ? 'wy-fan-item-active' : 'wy-fan-item-hide']"
    >
      <!-- 关闭的扇面 -->
      <div class="hide-fan" v-show="!item.open">
        <slot
          name="hide-fan"
          :item="item"
          :index="index"
          :activeFanIndex="activeFanIndex"
          :openFan="openFan"
        >
        </slot>
      </div>

      <!-- 打开的扇面 -->
      <div class="open-fan" v-show="item.open">
        <slot
          name="open-fan"
          :item="item"
          :index="index"
          :activeFanIndex="activeFanIndex"
          :closeFan="closeFan"
        >
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wy-fan {
  display: flex;
  width: 100%;
  height: 100%;
  .wy-fan-item {
    width: 50px;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    transition: all 0.3s;

    &:not(:last-child) {
      margin-right: 2px;
    }

    .hide-fan,
    .open-fan {
      overflow: hidden;
      height: 100%;
    }
  }
  .wy-fan-item-active {
    width: auto;
    flex: 1;
  }
}
</style>
