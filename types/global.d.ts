import type { ComponentRenderProxy } from "vue";
import { Component } from "vue";
import { RouteRecordName } from "vue-router";

declare global {
  /**
   * 全局自定义环境变量的类型声明
   */
  declare interface ViteEnv {
    //端口号
    VITE_PORT?: number;
    //公共路径
    VITE_PUBLIC_PATH: string;
    //路由模式
    VITE_ROUTER_HISTORY: string;
    //是否开启兼容
    VITE_LEGACY?: boolean;
    //压缩模式
    VITE_COMPRESSION?: ViteCompression;
    //是否开启mock
    VITE_MOCK?: boolean;
    //api 基础路径
    VITE_API_BASE_URL?: string;
  }

  /**
   * 打包压缩格式的类型声明
   */
  type ViteCompression =
    //不压缩
    | "none"
    //gz压缩
    | "gzip"
    //br压缩
    | "brotli"
    //gz、br一起压缩
    | "both"
    //gz压缩，压缩后删除原文件
    | "gzip-clear"
    //br压缩，压缩后删除原文件
    | "brotli-clear"
    //gz、br一起压缩，压缩后删除原文件
    | "both-clear";

  /**
   * 项目全局配置的类型声明
   */
  declare interface GolbalSetting {
    //项目版本
    version?: string;
    //网站名称
    title?: string;
    //是否显示头部组件
    showHeader?: boolean;
    //系统语言
    locale?: string;
    //侧边栏伸展切换按钮位置：top、bottom、none
    openBtnPosition?: string;
    //是否打开侧边栏
    sidebarIsOpen?: boolean;
    //主题色
    themeColor?: themeColorType;
    //是否显示切换全屏按钮
    showScreenFull?: boolean;
    //是否显示暗黑模式切换按钮
    showDarkToogle?: boolean;
  }

  /**
   * 系统路由的类型
   * @name  路由名称
   * @path  路劲
   * @redirect  重定向
   * @notCloseTag 不允许关闭tag
   * @meta 路由信息
   * @parentName 父路由name
   */
  declare type WYRouterUseType = {
    name: RouteRecordName;
    path: string;
    redirect?: string;
    children?: WYRouterUseType[];
    parentName?: String;
    meta?: routeMeta;
    component?: Component;
  };
  /**
   * 路由meta的类型
   * @icon  图标
   * @title  标题
   * @fixedPage  ture-固定页面；false-页面可滚动
   * @parentRoute 路由从父到子路径
   * @notCloseTag 不允许关闭tag
   * @keepAlive keepAlive和componentName存在的页面会被keep alive缓存
   * @componentName keepAlive和componentName存在的页面会被keep alive缓存
   * @scrollTop 该属性存在的页面滚动条跳转会置顶
   */
  declare interface routeMeta {
    icon?: string;
    title?: string;
    fixedPage?: boolean;
    parentRoute?: parentRouter[];
    notCloseTag?: Boolean;
    keepAlive?: boolean;
    componentName?: string;
    scrollTop?: boolean;
  }
  /**
   * 父路由的类型
   */
  declare interface parentRouter {
    title: string;
    path: string;
    redirect?: string;
  }

  /**
   * 主题色数据的类型声明
   */
  declare interface themeColorType {
    //主色
    mainColor?: string;
    //主色-变亮30%
    mainColorLight3?: string;
    //主色-变亮50%
    mainColorLight5?: string;
    //主色-变亮70%
    mainColorLight7?: string;
    //主色-变亮80%
    mainColorLight8?: string;
    //主色-变亮90%
    mainColorLight9?: string;
    //主色-变暗20%
    mainColorDark2?: string;
  }

  /**
   * v-resize回调参数 调整大小的的类型声明
   */
  declare interface resizeDataType {
    //元素宽度
    width?: string;
    //元素高度
    height?: string;
  }

  declare type RecordAny = Record<string, any>;

  declare interface RecordAnyForList extends recordAny {
    id: number | string;
  }

  //自定义拓展axios config 的类型
  declare interface customAxiosConfig {
    requestOutside?: boolean;
  }
}
