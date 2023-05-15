<script setup lang="ts">
import { computed } from "vue";

import user from "/@/assets/user.jpg";
import { useAppHook } from "/@/hooks/app";
import { useTranslate } from "/@/hooks/useTranslate";
import { appStore } from "/@/store/modules/app";
import { settingStore } from "/@/store/modules/settings";
import { themeStore } from "/@/store/modules/theme";

import { useLayoutHook } from "../../hooks/useLayout";
import OpenBtn from "../OpenBtn/OpenBtn.vue";
import Breadcrumb from "./Breadcrumb.vue";
import ScreenFull from "./ScreenFull.vue";
import SimpleWeather from "./SimpleWeather.vue";

defineOptions({
  name: "Navbar"
});

const {
  logout //登出
} = useAppHook();

const { showScreenFull, showDarkToogle, openBtnPosition } = settingStore();

// 登录用户名
const userName = computed(() => {
  return appStore().signUser?.userName;
});

/**
 * 头像样式
 */
const avatarsStyle = computed(() => {
  return userName.value ? { marginRight: "10px" } : "";
});

/**
 * 设置国际化选中后的样式
 */
const getDropdownItemStyle = computed(() => {
  return (locale, t) => {
    return {
      background: locale === t ? themeStore().themeColor.mainColor : "",
      color: locale === t ? "#fff" : "#000"
    };
  };
});
const {
  locale, //当前系统语言
  translateZh, //切换中文
  translateEn //切换英文
} = useTranslate();

/**
 * isCollapse 侧边栏是否折叠 true-折叠 false-展开
 * toggleSideBar 侧边栏折叠/伸展方法
 */
const { isCollapse, toggleSideBar } = useLayoutHook();
/**
 * 设置侧边栏伸缩按钮样式
 */
const getOpenBtnStyle = {
  display: "inline-flex",
  float: "left",
  width: "auto",
  height: "50px",
  "align-items": "center"
};
</script>

<template>
  <div class="navbar">
    <OpenBtn
      :collapse="isCollapse"
      @toggleClick="toggleSideBar"
      v-if="openBtnPosition === 'top'"
      :style="getOpenBtnStyle"
    ></OpenBtn>

    <!-- 面包屑 -->
    <Breadcrumb></Breadcrumb>

    <!-- 右侧功能按钮 -->
    <div class="vertical-header-right">
      <!-- 天气 -->
      <SimpleWeather></SimpleWeather>

      <!-- 全屏 -->
      <ScreenFull v-if="showScreenFull" />
      <!-- 国际化 -->
      <el-dropdown trigger="click" class="toogle-locale">
        <span>
          <WyIconFont
            icon="icon-zhongyingwenqiehuan-yingwen"
            class="toogle-locale-icon"
            v-if="locale === 'en'"
          ></WyIconFont>
          <WyIconFont
            icon="icon-zhongyingwenqiehuan-zhongwen"
            class="toogle-locale-icon"
            v-if="locale === 'zh-CN'"
          ></WyIconFont>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="translate">
            <!-- 切换中文 -->
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'zh-CN')"
              class="transition-dropdown-item"
              @click="translateZh"
            >
              简体中文
              <icon-ep-check
                style="margin-left: 10px"
                v-show="locale === 'zh-CN'"
              />
            </el-dropdown-item>
            <!-- 切换英文 -->
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'en')"
              class="transition-dropdown-item"
              @click="translateEn"
            >
              English
              <icon-ep-check
                style="margin-left: 10px"
                v-show="locale === 'en'"
              />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- 切换明暗模式 -->
      <WyDarkToogle v-if="showDarkToogle"></WyDarkToogle>

      <!-- 用户 -->
      <el-dropdown trigger="click">
        <span class="user-box">
          <!-- 头像 -->
          <img v-if="user" :src="user" :style="avatarsStyle" />
          <!-- 用户名 -->
          <p v-if="userName">{{ userName }}</p>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="logout">
            <!-- 退出系统 -->
            <el-dropdown-item @click="logout">
              <icon-ep-back style="margin-right: 5px" />
              {{ $t("buttons.loginOut") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  overflow: hidden;
  width: 100%;
  height: 50px;

  .vertical-header-right {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    height: 50px;

    .toogle-locale {
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 50px;
      :deep(.toogle-locale-icon) {
        font-size: 20px;
        cursor: pointer;
        &:hover {
          color: $main-color;
        }
      }
    }

    :deep(.wy-dark-toogle) {
      margin: 0 12px;
    }
    .user-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 10px;
      height: 50px;
      cursor: pointer;

      &:hover {
        color: $main-color;
      }

      p {
        font-size: 14px;
      }

      img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
  }
}
</style>
