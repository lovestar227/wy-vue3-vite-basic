/**
 * 系统相关Store
 */
import { defineStore } from "pinia";

import { getConfig } from "/@/config";
import { appStoreType } from "/@/types/store";
import { signUserMessageType, tokenType } from "/@/types/user";
import { storageLocal } from "/@/utils/index";
export const appStore = defineStore({
  id: "app",
  state: (): appStoreType => ({
    //遮罩显示
    appMaskShow: false,
    //当前系统语言
    locale: storageLocal.getItem<string>("locale") ?? getConfig().locale,
    //路由切换动画
    routeTransitionName: "router-left",
    //登录令牌
    token: storageLocal.getItem<string>("token") ?? "",
    //登录用户信息
    signUser: storageLocal.getItem<signUserMessageType>("signUser") ?? null
  }),
  getters: {
    /**
     * 获取遮罩状态 true-显示遮罩
     * @returns {boolean}
     */
    getappMaskShow(state): boolean {
      return state.appMaskShow;
    },
    /**
     * 获取当前系统语言
     * @returns {string}
     */
    getLocale(state): string {
      return state.locale;
    },
    /**
     * 获取路由切换动画
     * @returns {string}
     */
    getRouteTransitionName(state): string {
      return state.routeTransitionName;
    },
    /**
     * 获取登录token
     * @returns {string}
     */
    getToken(state): string {
      return state.token;
    },
    /**
     * 获取登录用户信息
     * @returns {signUserMessageType}
     */
    getSignUser(state): signUserMessageType {
      return state.signUser;
    }
  },
  actions: {
    /**
     * 设置遮罩显示状态
     * @param {boolean} value
     */
    setAppMaskShow(value: boolean) {
      this.appMaskShow = value;
    },
    /**
     * 设置系统语言
     * @param {stiring} value
     */
    setLocale(value: string) {
      if (this.locale != value) {
        this.locale = value;
        storageLocal.setItem<string>("locale", value);
      }
    },
    /**
     * 设置当前路由切换动画
     * @param {stiring} value
     */
    setRouteTransitionName(value: string) {
      this.routeTransitionName = value;
    },
    /**
     * 设置登录token
     * @param {tokenType} value
     */
    setToken(value: tokenType) {
      this.token = JSON.stringify(value);
      storageLocal.setItem<string>("token", this.token);
    },
    /**
     * 设置登录用户信息
     * @param {signUserMessageType} value
     */
    setSignUser(value: signUserMessageType) {
      this.signUser = value;
      storageLocal.setItem<signUserMessageType>("signUser", this.signUser);
    },
    /**
     * 退出登录-清空登录token信息和登录用户信息
     */
    loginOut() {
      this.token = "";
      this.signUser = null;
      storageLocal.removeItem("token");
      storageLocal.removeItem("user");
    }
  }
});
