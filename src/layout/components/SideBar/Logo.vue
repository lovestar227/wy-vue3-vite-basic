<script setup lang="ts">
defineOptions({
  name: "Logo"
});

const props = defineProps({
  collapse: Boolean //侧边栏是否折叠 true-折叠 false-展开
});
/**
 * 标题
 */
const title = "WYJS";
/**
 * 标题样式
 */
const sidebarTitleStyle = {
  "margin-left": "10px",
  color: "#fff",
  "font-weight": 600,
  "font-size": "20px",
  flex: 1
};
</script>

<template>
  <div class="sidebar-logo-box" :class="{ collapse: props.collapse }">
    <!-- 折叠状态无标题 -->
    <router-link
      v-if="props.collapse"
      :title="title"
      class="sidebar-logo-link"
      to="/"
    >
      <!-- Logo -->
      <WyIconFont
        icon="icon-food-cookie"
        svg
        style="width: 35px; height: 35px"
      />
    </router-link>

    <!-- 展开状态有标题 -->
    <router-link v-else :title="title" class="sidebar-logo-link" to="/">
      <!-- Logo -->
      <WyIconFont
        icon="icon-food-cookie"
        svg
        style="width: 35px; height: 35px"
      />
      <!-- 标题 -->
      <WyToolTip :text="title" :style="sidebarTitleStyle" multipleJudgments>
      </WyToolTip>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-box {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50px;

  .sidebar-logo-link {
    display: flex;
    align-items: center;
    overflow: hidden;
    padding-left: 10px;
    height: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .collapse {
    .sidebar-logo {
      margin-right: 0;
    }
  }
}
</style>
