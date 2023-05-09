import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  Router,
  RouteRecordRaw
} from "vue-router";
const Layout = () => import("/@/layout/Layout.vue");
const Page404 = () => import("/@/views/errorPage/404.vue");
const Login = () => import("/@/views/login/index.vue");
const Redirect = () => import("/@/layout/Redirect.vue");
import { $$t } from "/@/plugins/i18n";
import NProgress from "/@/plugins/nprogress/index";
import { appStore } from "/@/store/modules/app";
import { routerStore } from "/@/store/modules/router";

import { useAppHook } from "../hooks/app";
import chartsRouter from "./modules/charts";
import errorRouter from "./modules/error";
import homeRouter from "./modules/home";
import hooksRouter from "./modules/hooks";
import iconsRouter from "./modules/icons";
import listRouter from "./modules/list";
import menuRouter from "./modules/menu";
import themeRouter from "./modules/theme";
import { dealAllRoutes, routeToMenuData } from "./utils";
/**
 * 基础路由
 */
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "main",
    component: Layout,
    redirect: "/home",
    meta: {},
    children: null
  },
  //刷新页面
  {
    path: "/redirect",
    component: Layout,
    meta: {},
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: Redirect
      }
    ]
  },
  //登录页面
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {},
    children: null
  },
  //匹配404页面
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: Page404,
    meta: {},
    children: null
  }
];

const allRoutes: any[] = [
  homeRouter,
  themeRouter,
  iconsRouter,
  chartsRouter,
  listRouter,
  hooksRouter,
  menuRouter,
  errorRouter
];
/**
 * 菜单数据
 */
export const menuData = routeToMenuData(allRoutes);
/**
 * 系统内页面路由
 */
export const mainRoutes = dealAllRoutes(allRoutes, [], []);

routes[0].children = mainRoutes;

//路由对象
export const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes //上面的路由数组
});

//路由守卫：路由跳转前
router.beforeEach((to, from, next) => {
  //顶部进度条开始
  NProgress.start();
  // 动态改变页面标题
  useAppHook().changeTitle(to.meta);
  const useAppStore = appStore();
  const token = useAppStore.getToken; //获取token
  if (token) {
    // token有效
    next();
  } else {
    //token失效返回登录页
    if (to.fullPath == "/login") {
      next();
    } else {
      next("/login");
    }
  }
});

//路由守卫：路由跳转后
router.afterEach((to, from, failure) => {
  const useRouterStore = routerStore();
  //每次有效跳转路由，储存tag信息
  useRouterStore.addRouteHistory(to);
  //路由跳转后，//顶部进度条开始
  NProgress.done();
});

export default router;
