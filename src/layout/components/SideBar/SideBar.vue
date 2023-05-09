<script setup lang="ts">
import { menuData } from "/@/router";
import { settingStore } from "/@/store/modules/settings";

import { useLayoutHook } from "../../hooks/useLayout";
import OpenBtn from "../OpenBtn/OpenBtn.vue";
import Logo from "./Logo.vue";
import SideBarItem from "./SideBarItem.vue";

defineOptions({
  name: "SideBar"
});

const route = useRoute();

const { openBtnPosition } = settingStore();
/**
 * isCollapse 侧边栏是否折叠 true-折叠 false-展开
 * toggleSideBar 侧边栏折叠/伸展方法
 */
const { isCollapse, toggleSideBar } = useLayoutHook();
/**
 * 点击菜单回调
 */
const menuSelect = (indexPath: string) => {
  console.log("选择菜单", indexPath);
};
</script>

<template>
  <div class="side-bar">
    <!-- logo & 标题组件 -->
    <div class="side-bar-top">
      <Logo :collapse="isCollapse" />
    </div>
    <!-- 侧边栏组件 -->
    <div class="side-bar-middle">
      <el-scrollbar>
        <el-menu
          router
          unique-opened
          mode="vertical"
          class="outer-most"
          :collapse="isCollapse"
          :default-active="route.path"
          :collapse-transition="false"
          @select="(indexPath:string) => menuSelect(indexPath)"
        >
          <side-bar-item
            v-for="routes in menuData"
            :key="routes.path"
            :item="routes"
          />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 点击展开/点击收缩组件 -->
    <div class="side-bar-bottom" v-if="openBtnPosition === 'bottom'">
      <OpenBtn :collapse="isCollapse" @toggleClick="toggleSideBar"></OpenBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-bar {
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column;
  .side-bar-top {
    height: 50px;
    background: $main-color;
  }

  .side-bar-middle {
    overflow: hidden;
    padding: 1px 0;
    flex: 1;
  }

  .side-bar-bottom {
    height: 40px;
  }
}
</style>
