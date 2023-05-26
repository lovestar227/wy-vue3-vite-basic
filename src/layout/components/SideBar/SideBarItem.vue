<script setup lang="ts">
import { computed, CSSProperties, PropType, toRaw } from "vue";

defineOptions({
  name: "SideBarItem"
});

const props = defineProps({
  //单个路由
  item: {
    type: Object as PropType<WYRouterUseType>
  }
});
/**
 * 没有子菜单的菜单样式
 */
const getNoDropdownStyle = computed((): CSSProperties => {
  const style = {
    display: "flex",
    alignItems: "center"
  };
  if (props.item.parentName) {
    style["font-size"] = "12px";
  }

  return style;
});
</script>

<template>
  <!-- 没有子菜单 -->
  <template v-if="!props.item.children || props.item.children.length == 0">
    <el-menu-item :index="props.item.path" :style="getNoDropdownStyle">
      <!-- 菜单图标 -->
      <div class="sub-menu-icon" v-if="props.item.meta?.icon">
        <wy-iconify :icon="props.item.meta?.icon" />
      </div>
      <!-- 菜单名称 -->
      <template #title>
        <div class="menu-text-box">
          <!-- 内容 -->
          <wy-toolTip>
            <template #content>
              {{ $t(props.item.meta.title) }}
            </template>
            {{ $t(props.item.meta.title) }}
          </wy-toolTip>
        </div>
      </template>
    </el-menu-item>
  </template>
  <!-- 有子菜单 -->
  <el-sub-menu v-else :index="props.item.path" popper-class="side-bar-popper">
    <template #title>
      <!-- 图标 -->
      <div v-if="props.item.meta?.icon" class="sub-menu-icon">
        <wy-iconify :icon="props.item.meta?.icon" />
      </div>
      <!-- 内容 -->
      <wy-toolTip>
        <template #content>
          {{ $t(props.item.meta.title) }}
        </template>
        {{ $t(props.item.meta.title) }}
      </wy-toolTip>
    </template>
    <!-- 子菜单 -->
    <side-bar-item
      v-for="child in props.item.children"
      :key="child.path"
      :item="child"
    />
  </el-sub-menu>
</template>

<style lang="scss" scoped>
.menu-text-box {
  display: flex;
  overflow: hidden;
}
</style>
