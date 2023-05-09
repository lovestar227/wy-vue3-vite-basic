<script setup lang="ts">
import { computed, reactive } from "vue";

import { mainViewResizeDataProvideKey } from "/@/provide";
import { appStore } from "/@/store/modules/app";
import { settingStore } from "/@/store/modules/settings";

import MainView from "./components/MainView/MainView.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import SideBar from "./components/SideBar/SideBar.vue";
import Tag from "./components/Tag/Tag.vue";
import { useLayoutHook } from "./hooks/useLayout";
import { useSetting } from "./hooks/useSetting";
import { setType } from "./types";

defineOptions({
  name: "Layout"
});

//监听语言改变，动态改变网页标题
useSetting();

const {
  isCollapse //侧边栏是否折叠 true-折叠 false-展开
} = useLayoutHook();
const useSettingStore = settingStore();

const set: setType = reactive({
  //控制遮罩显示
  appMaskShow: computed(() => {
    return appStore().appMaskShow;
  }),
  //控制头部组件显示
  showHeader: computed(() => {
    return useSettingStore.showHeader;
  })
});

/**
 * MainView组件当前大小
 */
const mainViewResizeData: Ref<resizeDataType> = ref({});

provide(mainViewResizeDataProvideKey, mainViewResizeData);
/**
 * 监听MainView组件大小调整 回调函数
 * @param data
 */
function mainViewResize(data: resizeDataType) {
  mainViewResizeData.value = data;
}
</script>

<template>
  <div :class="['app-wrapper', isCollapse ? 'hide-sidebar' : 'open-sidebar']">
    <div class="main-wrapper">
      <div
        class="left-wrapper"
        :class="isCollapse ? 'collapse-left' : 'open-left'"
      >
        <SideBar></SideBar>
      </div>
      <div
        class="right-wrapper"
        :class="isCollapse ? 'open-right' : 'collapse-right'"
      >
        <!-- 遮罩 -->
        <div class="app-mask" v-show="set.appMaskShow"></div>
        <!-- 头部组件 -->
        <div class="header-wrapper" v-if="set.showHeader">
          <Navbar></Navbar>
          <Tag></Tag>
        </div>
        <!-- 主内容组件 -->
        <MainView v-resize="mainViewResize"></MainView>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;

  .main-wrapper {
    width: 100%;
    height: 100%;

    .left-wrapper {
      display: inline-block;
      height: 100%;
      vertical-align: top;
      box-shadow: 2px 0 4px 0 #e1e1e1;
      transition: width 0.5s;
    }

    .collapse-left {
      width: 56px;
    }

    .open-left {
      width: 220px;
    }

    .open-right {
      width: calc(100% - 56px);
    }

    .collapse-right {
      width: calc(100% - 220px);
    }

    .right-wrapper {
      display: inline-block;
      height: 100%;
      transition: width 0.5s;
    }
  }

  .app-mask {
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
  }
}
</style>
