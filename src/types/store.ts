import { signUserMessageType } from "./user";

/**
 * appStroe
 */
export type appStoreType = {
  appMaskShow: boolean;
  locale: string;
  routeTransitionName: string;
  token: string;
  signUser: signUserMessageType;
};

/**
 * settingStore
 */
export type settingStoreType = {
  title: string; //项目版本
  showHeader: boolean; //是否显示头部组件
  openBtnPosition?: string; //侧边栏伸展切换按钮位置：top、bottom、none
  sidebarIsOpen: boolean; //是否打开侧边栏
  showScreenFull?: boolean; //是否显示切换全屏按钮
  showDarkToogle?: boolean; //是否显示暗黑模式切换按钮
};

/**
 * routerStore
 */
export type routerStoreType = {
  allAliveRoute: WYRouterUseType[];
  routeHistroy: WYRouterUseType[];
};

/**
 * themeStore
 */
export type themeStoreType = {
  themeColor: themeColorType;
};
