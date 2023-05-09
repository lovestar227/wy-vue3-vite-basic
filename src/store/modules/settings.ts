/**
 * 全局设置相关Store
 */
import { defineStore } from "pinia";

import { getConfig } from "/@/config";
import { settingStoreType } from "/@/types/store";
import { storageLocal } from "/@/utils/index";

export const settingStore = defineStore({
  id: "setting",
  state: (): settingStoreType => ({
    //网页左上角系统标题
    title: getConfig().title,
    //是否显示头部组件
    showHeader:
      storageLocal.getItem<GolbalSetting>("setting")?.showHeader ??
      getConfig().showHeader,
    //侧边栏伸展切换按钮位置：top、bottom、none
    openBtnPosition:
      storageLocal.getItem<GolbalSetting>("setting")?.openBtnPosition ??
      getConfig().openBtnPosition,
    //侧边栏伸展/收缩状态
    sidebarIsOpen:
      storageLocal.getItem<GolbalSetting>("setting")?.sidebarIsOpen ??
      getConfig().sidebarIsOpen,
    //是否显示切换全屏按钮
    showScreenFull:
      storageLocal.getItem<GolbalSetting>("setting")?.showScreenFull ??
      getConfig().showScreenFull,
    //是否显示暗黑模式切换按钮
    showDarkToogle:
      storageLocal.getItem<GolbalSetting>("setting")?.showScreenFull ??
      getConfig().showDarkToogle
  }),
  getters: {
    /**
     * 获取网页标题
     * @returns {string}
     */
    getTitle(state): string {
      return state.title;
    },
    /**
     * 获取侧边栏伸展切换按钮位置：top、bottom、none
     * @returns {boolean}
     */
    getopenBtnPosition(state): string {
      return state.openBtnPosition;
    },
    /**
     * 获取头部组件显示状态
     * @returns {boolean}
     */
    getShowHeader(state): boolean {
      return state.showHeader;
    },
    /**
     * 获取侧边栏伸展/收缩状态
     * @returns {boolean}
     */
    getSidebarIsOpen(state): boolean {
      return state.sidebarIsOpen;
    },
    /**
     * 获取 是否显示切换全屏按钮
     * @returns {boolean}
     */
    getShowScreenFull(state): boolean {
      return state.showScreenFull;
    },
    /**
     * 获取 是否显示暗黑模式切换按钮
     * @returns {boolean}
     */
    getShowDarkToogle(state): boolean {
      return state.showDarkToogle;
    }
  },
  actions: {
    /**
     * 侧边栏 收缩/打开 切换
     * @param {boolean} open
     */
    toggleSideBar(open?: boolean) {
      open = open ?? !this.sidebarIsOpen;
      this.sidebarIsOpen = open;
      this.changeSetting({ sidebarIsOpen: open });
    },
    /**
     * 头部组件显示切换
     * @param {boolean} show
     */
    toggleHeader(show?: boolean) {
      show = show ?? !this.showHeader;
      this.showHeader = show;
      this.changeSetting({ showHeader: show });
    },
    /**
     * setting设置-改变储存localstorage
     * @param {GolbalSetting} newSetting
     */
    changeSetting(newSetting: GolbalSetting) {
      const setting = storageLocal.getItem<GolbalSetting>("setting") || {};
      Object.assign(setting, newSetting);
      storageLocal.setItem("setting", setting);
    }
  }
});
