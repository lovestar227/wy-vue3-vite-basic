/**
 * 主题色设置相关Store
 */
import { defineStore } from "pinia";

import { themeStoreType } from "/@/types/store";
import { storageLocal } from "/@/utils/index";

import { getThemeColorFromStorageLocal, setRootThemeColor } from "./hook";

export const themeStore = defineStore({
  id: "Theme",
  state: (): themeStoreType => ({
    //系统主题色
    themeColor: getThemeColorFromStorageLocal()
  }),
  getters: {
    /**
     * 获取系统主题色
     * @returns {themeColorType}
     */
    getThemeColor(state): themeColorType {
      return state.themeColor;
    }
  },
  actions: {
    /**
     * 设置系统主题色 & 存储localstorage & 应用主题色
     * @param {themeColorType} newColor
     */
    setThemeColor(newColor: themeColorType) {
      const themeColor =
        storageLocal.getItem<themeColorType>("themeColor") || {};
      Object.assign(themeColor, this.themeColor, newColor);
      this.themeColor = themeColor;
      storageLocal.setItem("themeColor", themeColor);
      /* 应用主题色 */
      setRootThemeColor(newColor);
    }
  }
});
