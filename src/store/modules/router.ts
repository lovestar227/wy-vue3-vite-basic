/**
 * 路由相关Store
 */
import { findIndex } from "lodash-unified";
import { defineStore } from "pinia";

import { mainRoutes, router } from "/@/router/index";
import { routerStoreType } from "/@/types/store";

import { initAllAliveRoute } from "./hook";

export const routerStore = defineStore({
  id: "router",
  state: (): routerStoreType => ({
    //所有可以被缓存的路由
    allAliveRoute: initAllAliveRoute(mainRoutes as WYRouterUseType[]),
    //路由记录
    routeHistroy: []
  }),
  getters: {
    /**
     * 获取所有可以被缓存的路由
     */
    getallAliveRoute(state): WYRouterUseType[] {
      return state.allAliveRoute;
    },
    /**
     * 获取所有的路由记录
     */
    getRouteHistory(state): WYRouterUseType[] {
      return state.routeHistroy;
    }
  },
  actions: {
    /**
     * 设置可以被缓存的路由
     * @param newRoute
     */
    setAllAliveRoute(newAllAliveRoute: WYRouterUseType[]) {
      if (newAllAliveRoute) this.newAllAliveRoute = newAllAliveRoute;
    },
    /**
     * 添加新的路由记录
     * @param newRoute
     */
    addRouteHistory(newRoute: WYRouterUseType) {
      if (
        newRoute.redirect ||
        newRoute.path.indexOf("/redirect") > -1 ||
        newRoute.path === "/login"
      ) {
        return;
      }
      if (findIndex(this.routeHistroy, { path: newRoute.path }) < 0) {
        this.routeHistroy.push(newRoute);
      }
    },
    /**
     * 删除单个路由记录
     * @param {string} path 点击的标签对应的path
     */
    removeRouteHistory(path: string) {
      const index = findIndex(this.routeHistroy, { path });
      if (index > -1) {
        this.routeHistroy.splice(index, 1);
        //清除删除的路由缓存
        this.clearKeepAliveCache(path);
      }
    },
    /**
     * 删除该路由左侧记录
     * @param {string} path 点击的标签对应的path
     */
    removeRouteHistoryLeft(path: string) {
      const index = findIndex(this.routeHistroy, { path });
      if (index > -1) {
        const deleteRouteHistory = this.routeHistroy.slice(0, index);
        this.routeHistroy = this.routeHistroy.slice(index);
        this.batchClearKeepAliveCache(deleteRouteHistory);
      }
    },
    /**
     * 删除该路由右侧记录
     * @param {string} path 点击的标签对应的path
     */
    removeRouteHistoryRight(path: string) {
      const index = findIndex(this.routeHistroy, { path });
      if (path == "/home") {
        this.routeHistroy = [];
      }
      if (index > -1) {
        const deleteRouteHistory = this.routeHistroy.slice(index + 1);
        this.routeHistroy.splice(index + 1);
        this.batchClearKeepAliveCache(deleteRouteHistory);
      }
    },
    /**
     * 删除该路由之外其他的记录
     * @param {string} path 点击的标签对应的path
     */
    removeRouteHistoryOther(path: string) {
      const index = findIndex(this.routeHistroy, { path });
      if (index > -1) {
        const deleteRouteHistory = [
          ...this.routeHistroy.slice(0, index),
          ...this.routeHistroy.slice(index + 1)
        ];
        this.routeHistroy = this.routeHistroy.slice(index, index + 1);
        this.batchClearKeepAliveCache(deleteRouteHistory);
      }
    },
    /**
     * 删除所有路由记录
     */
    removeRouteHistoryAll() {
      this.routeHistroy = [];
      router.replace({
        path: "/redirect/home"
      });
    },
    /**
     * 手动清除单个keep-alive缓存
     */
    clearKeepAliveCache(path: string) {
      const index = findIndex(this.allAliveRoute, { path });
      if (index > -1) {
        const beforeAllAliveRoute = this.allAliveRoute.slice(0);
        this.allAliveRoute.splice(index, 1);
        //恢复Keep Alive缓存机制
        setTimeout(() => {
          this.allAliveRoute = beforeAllAliveRoute.slice(0);
        }, 500);
      }
    },
    /**
     * 批量清除多个keep-alive缓存,首页(Home)除外
     * @param {WYRouterUseType[]} deletePaths 删除的路由数组
     */
    batchClearKeepAliveCache(deletePaths: WYRouterUseType[]) {
      const newAllAliveRoute = [];
      this.allAliveRoute.forEach(item => {
        if (item.path != "/home") {
          if (findIndex(deletePaths, { path: item.path }) === -1) {
            newAllAliveRoute.push(item);
          }
        } else {
          //批量不清除首页(Home)缓存
          newAllAliveRoute.push(item);
        }
      });
      if (newAllAliveRoute.length < this.allAliveRoute.length) {
        const beforeAllAliveRoute = this.allAliveRoute.slice(0);
        this.allAliveRoute = newAllAliveRoute;
        //批量清除缓存时，包括当前页面路由，则跳转到最后一个打开的标签
        if (
          findIndex(deletePaths, { path: router.currentRoute.value.fullPath }) >
          -1
        ) {
          if (this.routeHistroy && this.routeHistroy.length) {
            router.replace({
              path: this.routeHistroy[this.routeHistroy.length - 1].path
            });
          } else {
            router.replace({
              path: "/redirect/home"
            });
          }
        }
        //恢复Keep Alive缓存机制
        setTimeout(() => {
          this.allAliveRoute = beforeAllAliveRoute.slice(0);
        }, 500);
      }
    }
  }
});
