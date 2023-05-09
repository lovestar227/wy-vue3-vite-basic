<script setup lang="ts">
import { computed, ComputedRef } from "vue";

import { useTranslate } from "/@/hooks/useTranslate";

import { parentRouter } from "../../../types/router";

defineOptions({
  name: "Breadcrumb"
});

const router = useRouter(); //router实例
/**
 * 面包屑显示数据
 */
const breadcrumbList: ComputedRef<parentRouter[]> = computed(
  (): parentRouter[] =>
    router.currentRoute.value?.meta?.parentRoute as parentRouter[]
);
/**
 * 跳转路由
 * @param {parentRouter} to 跳转的路由
 */
const pushRoute = (to: parentRouter) => {
  if (to.redirect) {
    router.push(to.redirect);
    return;
  }
  router.push(to.path);
};
</script>

<template>
  <div class="header-breadcrumb">
    <el-breadcrumb separator="/">
      <!-- 每一项 -->
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbList"
        :key="item.path"
      >
        <!-- 非最后一项 -->
        <span
          v-if="index != breadcrumbList.length - 1"
          @click="pushRoute(item)"
          class="can-redirect"
          >{{ $t(item.title) }}</span
        >
        <!-- 最后一项 -->
        <span v-else class="no-redirect">{{ $t(item.title) }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
.header-breadcrumb {
  display: inline-flex;
  align-items: center;
  float: left;
  margin-left: 20px;
  height: 50px;

  .el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;

    .can-redirect {
      cursor: pointer;

      &:hover {
        color: $main-color;
      }
    }

    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
}
</style>
