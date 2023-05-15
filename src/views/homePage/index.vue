<script setup lang="ts">
import userImage from "/@/assets/user.jpg";
import { HomeFanItem } from "/@/types/view/homePage";
import { addClass, hasClass } from "/@/utils/index";

import Imagine from "./components/Imagine.vue";
import Origin from "./components/Origin.vue";
import Run from "./components/Run.vue";
import Study from "./components/Study.vue";
import UpdateLog from "./components/UpdateLog.vue";
defineOptions({
  name: "HomePage"
});
const fanStatus = ref<HomeFanItem[]>([
  {
    id: 1,
    icon: "icon-food-pistachio",
    open: false,
    title: "起点",
    poems: [
      "合抱之木",
      "生于毫末",
      "九层之台",
      "起于垒土",
      "千里之行",
      "始于足下"
    ]
  },
  {
    id: 2,
    icon: "icon-food-strawberry",
    open: false,
    title: "过程"
  },
  {
    id: 3,
    icon: "icon-food-popcorn",
    open: false,
    title: "学习"
  },
  {
    id: 4,
    icon: "icon-food-pecan",
    open: false,
    title: "奔跑"
  },
  {
    id: 5,
    icon: "icon-food-eggyolkcake",
    open: false,
    title: "想象"
  }
]);

const instance = getCurrentInstance();
/**
 * 根据id判断当前显示的扇面内容
 * @param {HomeFanItem} item 扇面数据
 */
const nowOpenFan = (item: HomeFanItem) => {
  switch (item.id) {
    case 1:
      return Origin;
    case 2:
      return UpdateLog;
    case 3:
      return Study;

    case 4:
      return Run;

    case 5:
      return Imagine;
  }
};
/**
 *  //关闭扇面背景渐出动画
 * @param {number} index 点击的扇面index
 * @param {number} activeFanIndex 打开的扇面index
 */
const showFanBagImage = (index: number, activeFanIndex: number) => {
  if (activeFanIndex > -1) {
    const fanActiveItemBagImageDOM = instance.refs[
      "fan-item-bagImage" + activeFanIndex
    ] as HTMLDivElement;
    if (
      fanActiveItemBagImageDOM &&
      !hasClass(fanActiveItemBagImageDOM, "fan-item-opacity-in")
    ) {
      addClass(fanActiveItemBagImageDOM, "fan-item-opacity-in");
    }
  }
};
//图片-骨架屏 loading
const imageLoading = ref(true);
onMounted(() => {
  const img = new Image();
  img.onload = () => {
    imageLoading.value = false;
  };
  img.src = userImage;
});
</script>

<template>
  <div class="home-page">
    <WyFan :list="fanStatus" :default-active="1">
      <!-- 关闭的扇面 -->
      <template v-slot:hide-fan="{ item, index, activeFanIndex, openFan }">
        <div class="fan-hide-item">
          <div
            class="fan-item-open-btn"
            @click="
              () => {
                showFanBagImage(index, activeFanIndex);
                openFan(index);
              }
            "
          >
            <WyIconFont
              :icon="item.icon"
              svg
              class="open-btn-icon"
            ></WyIconFont>
          </div>
          <div class="fan-item-title">
            {{ item.title }}
          </div>
          <!-- 图片-骨架屏 过渡 -->
          <el-skeleton
            :loading="imageLoading"
            animated
            class="fan-item-bagImage"
          >
            <template #template>
              <el-skeleton-item
                variant="image"
                :style="`width: 100%; height: 100%`"
              />
            </template>
            <template #default>
              <div
                v-show="!item.open"
                :class="['fan-item-bagImage']"
                :ref="'fan-item-bagImage' + index"
              ></div>
            </template>
          </el-skeleton>
        </div>
      </template>
      <!-- 打开的扇面 -->
      <template v-slot:open-fan="{ item, index, activeFanIndex, closeFan }">
        <!-- 根据id判断当前显示的扇面内容 -->
        <component
          :is="nowOpenFan(item)"
          :item="item"
          :index="index"
          :activeFanIndex="activeFanIndex"
          :closeFan="closeFan"
          :showFanBagImage="showFanBagImage"
        ></component>
      </template>
    </WyFan>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  height: 100%;

  // 关闭的扇面
  .fan-hide-item {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;

    .fan-item-open-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #e4e7ed;
      border-radius: 5px 5px 0 0;
      background-color: #a7c8c8;
      cursor: pointer;
      .open-btn-icon {
        width: 80%;
        height: 80%;
      }
    }

    .fan-item-title {
      position: absolute;
      top: 180px;
      z-index: 1;
      width: 50px;
      font-size: 30px;
      text-align: center;
      user-select: none;
    }
    .fan-item-bagImage {
      flex: 1;
      background-image: url("/@/assets/user.jpg");
    }
    .fan-item-opacity-in {
      animation: opacity-in 1000ms;
    }
  }
}
</style>
