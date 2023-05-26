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
//主题色
const theme = computed(() => useThemeStore.themeColor);

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
      mainColorLight3: new TinyColor(value).tint(30).toHexString(),
      mainColorLight5: new TinyColor(value).tint(50).toHexString(),
      mainColorLight7: new TinyColor(value).tint(70).toHexString(),
      mainColorLight8: new TinyColor(value).tint(80).toHexString(),
      mainColorLight9: new TinyColor(value).tint(90).toHexString(),
      mainColorDark2: new TinyColor(value).shade(20).toHexString()
    });
  }
};
/**
 * 修改系统鼠标悬浮色
 * @param value 将要修改的颜色
 */
const singleColorChange = (value: string, variable) => {
  useThemeStore.setThemeColor({
    [variable]: value
  });
};
</script>

<template>
  <div class="theme-page">
    <div class="color-content">
      <h1>修改主题色</h1>
      <!-- 主题色-主色 -->
      <div class="system-color">
        <span>主色:{{ theme.mainColor }}</span>
        <el-color-picker
          v-model="theme.mainColor"
          :predefine="predefineColors"
          color-format="hex"
          :persistent="false"
          @change="mainColorChange"
        />
      </div>
      <!-- 主题色-主色变亮30% -->
      <div class="system-color">
        <span>主色变亮30%:{{ theme.mainColorLight3 }}</span>
        <el-color-picker
          v-model="theme.mainColorLight3"
          :predefine="predefineColors"
          color-format="hex"
          :persistent="false"
          @change="singleColorChange($event, 'mainColorLight3')"
        />
      </div>
      <!-- 主题色-主色变亮50% -->
      <div class="system-color">
        <span>主色变亮50%:{{ theme.mainColorLight5 }}</span>
        <el-color-picker
          v-model="theme.mainColorLight5"
          :predefine="predefineColors"
          color-format="hex"
          :persistent="false"
          @change="singleColorChange($event, 'mainColorLight5')"
        />
      </div>
      <!-- 主题色-主色变亮70% -->
      <div class="system-color">
        <span>主色变亮70%:{{ theme.mainColorLight7 }}</span>
        <el-color-picker
          v-model="theme.mainColorLight7"
          :predefine="predefineColors"
          color-format="hex"
          :persistent="false"
          @change="singleColorChange($event, 'mainColorLight7')"
        />
      </div>
      <!-- 主题色-主色变亮80%(悬浮色) -->
      <div class="system-color">
        <span>主色变亮80%(悬浮色):{{ theme.mainColorLight8 }}</span>
        <el-color-picker
          v-model="theme.mainColorLight8"
          :predefine="predefineColors"
          color-format="hex"
          :persistent="false"
          @change="singleColorChange($event, 'mainColorLight8')"
        />
      </div>
      <!-- 主题色-主色变亮90% -->
      <div class="system-color">
        <span>主色变亮90%:{{ theme.mainColorLight9 }}</span>
        <el-color-picker
          v-model="theme.mainColorLight9"
          :predefine="predefineColors"
          color-format="hex"
          :persistent="false"
          @change="singleColorChange($event, 'mainColorLight9')"
        />
      </div>

      <!-- 主题色-主色变暗20% -->
      <div class="system-color">
        <span>主色变暗20%:{{ theme.mainColorDark2 }}</span>
        <el-color-picker
          v-model="theme.mainColorDark2"
          :predefine="predefineColors"
          color-format="hex"
          :persistent="false"
          @change="singleColorChange($event, 'mainColorDark2')"
        />
      </div>
    </div>
    <div class="dark-content">
      <h1>切换明暗模式</h1>
      <wy-dark-toogle></wy-dark-toogle>
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
      width: 450px;
      height: 60px;
      box-shadow: 0 0 5px #888;
    }
  }

  .dark-content {
    margin-left: 100px;
  }
}
</style>
