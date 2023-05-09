<script setup lang="ts">
import { TinyColor } from "@ctrl/tinycolor";
import { computed } from "vue";

import WyDarkToogle from "/@/components/WyDarkToogle/index.vue";
import { getConfig } from "/@/config";
import { themeStore } from "/@/store/modules/theme";

defineOptions({
  name: "ThemePage"
});
/* 预设颜色 */
const predefineColors = ref([
  "#C71A54",
  "#ff4500",
  "#ff8c00",
  "#ffd700",
  "#90ee90",
  "#00ced1",
  "#1e90ff",
  "#9515C7",
  "#c71585"
]);

/* 主题色追踪显示 */
const useThemeStore = themeStore();
const mainColor = computed(() => {
  return useThemeStore.themeColor?.mainColor;
});
const hoverColor = computed(() => useThemeStore.themeColor?.hoverColor);

/* 颜色改变事件 */
/**
 * 修改系统主色
 * @param value 将要修改的颜色
 */
const mainColorChange = (value: string) => {
  //还原默认主题色
  if (!value) {
    useThemeStore.setThemeColor(getConfig().themeColor);
  } else {
    useThemeStore.setThemeColor({
      mainColor: value,
      hoverColor: new TinyColor(value).tint(80).toHexString()
    });
  }
};
/**
 * 修改系统鼠标悬浮色
 * @param value 将要修改的颜色
 */
const hoverColorChange = (value: string) => {
  useThemeStore.setThemeColor({
    hoverColor: value
  });
};
</script>

<template>
  <div class="theme-page">
    <div class="color-content">
      <h1>修改主题色</h1>
      <!-- 主题色-主色 -->
      <div class="system-color">
        <span>主色:{{ mainColor }}</span>
        <el-color-picker
          v-model="mainColor"
          :predefine="predefineColors"
          color-format="hex"
          @change="mainColorChange"
        />
      </div>
      <!-- 主题色-鼠标悬浮色 -->
      <div class="system-color">
        <span>鼠标悬浮色:{{ hoverColor }}</span>
        <el-color-picker
          v-model="hoverColor"
          :predefine="predefineColors"
          color-format="hex"
          @change="hoverColorChange"
        />
      </div>
    </div>
    <div class="dark-content">
      <h1>切换明暗模式</h1>
      <WyDarkToogle></WyDarkToogle>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-page {
  display: flex;
  .color-content {
    .system-color {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 0 20px;
      width: 350px;
      height: 60px;
      box-shadow: 0 0 5px #888;
    }
  }

  .dark-content {
    margin-left: 100px;
  }
}
</style>
