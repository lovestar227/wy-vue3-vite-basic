<script setup lang="ts">
import { HomeFanItem } from "/@/types/view/homePage";
defineOptions({
  name: "Origin"
});
interface Props {
  index: number;
  item: HomeFanItem;
  activeFanIndex: number;
  closeFan: Function;
  showFanBagImage: Function;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="home-origin">
    <!-- 头部 -->
    <header class="open-fan-header">
      <div class="open-fan-header-left">
        <WyIconFont
          :icon="props.item.icon"
          svg
          class="open-fan-header-icon"
          v-motion-fade
        ></WyIconFont>
        <span>{{ props.item.title }}</span>
      </div>
      <div class="open-fan-header-right">
        <el-button
          class="right-close-btn"
          @click="
            () => {
              props.showFanBagImage(props.index, props.activeFanIndex);
              props.closeFan();
            }
          "
          >关闭</el-button
        >
      </div>
    </header>
    <!-- 主要内容 -->
    <div class="open-fan-body">建造中</div>
    <!-- 底部 -->
    <footer class="open-fan-footer">
      <div class="poem-box">
        <span
          class="poem-item"
          v-for="(item, index) in props.item.poems"
          :key="index"
          >{{ item }}</span
        >
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
// 打开的扇面
.home-origin {
  padding: 20px;
  height: 100%;
  .open-fan-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30%;
    .open-fan-header-left {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 30px;
    }
    .open-fan-header-right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
      .right-close-btn {
        width: 30%;
        height: 10%;
      }
    }
    .open-fan-header-icon {
      margin-right: 20px;
      width: 30%;
      height: 80%;
    }
  }

  .open-fan-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
  }
  .open-fan-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 20%;
    border-top: 1px solid #e4e7ed;
    .poem-box {
      width: 150px;
      text-align: center;
      .poem-item {
        display: inline-block;
        width: 20px;
      }
    }
  }
}
</style>
