<script setup lang="ts">
import type { ElScrollbar } from "element-plus";
import { computed, ComputedRef } from "vue";

import { routerStore } from "/@/store/modules/router";
defineOptions({
  name: "MainView"
});

const useRouterStore = routerStore();
/**
 * 需要缓存的页面
 */
const cacheRouteList: ComputedRef<string[]> = computed(() =>
  useRouterStore.allAliveRoute.map(item => item.meta?.componentName)
);
const mainViewScrollBarRef = ref<InstanceType<typeof ElScrollbar>>(null);

const route = useRoute();
/* 监听路由改变，滚动条置顶 */
watch(
  () => route,
  (newVal, oldVal) => {
    //需要置顶的路由，跳转置顶
    if (mainViewScrollBarRef.value && newVal.meta?.scrollTop) {
      mainViewScrollBarRef.value.setScrollTop(0);
    }
  },
  {
    deep: true
  }
);
</script>

<template>
  <div class="main-view">
    <router-view v-slot="{ Component, route }">
      <!-- 页面滚动条 -->
      <el-scrollbar v-if="!route.meta?.fixedPage" ref="mainViewScrollBarRef">
        <!-- 置顶按钮 visibility-height：滚动多少距离出现-->
        <el-backtop
          target=".main-view .el-scrollbar__wrap"
          :visibility-height="50"
        >
        </el-backtop>
        <keep-alive :include="cacheRouteList">
          <component
            :is="Component"
            :key="route.fullPath"
            class="main-content"
          />
        </keep-alive>
      </el-scrollbar>
      <div v-else class="fixed-page">
        <keep-alive :include="cacheRouteList">
          <component
            :is="Component"
            :key="route.fullPath"
            class="main-content"
          />
        </keep-alive>
      </div>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.main-view {
  height: calc(100% - 90px);

  .main-content {
    padding: 10px 20px;
  }

  .fixed-page {
    overflow: hidden;
    height: 100%;
  }
}
</style>
