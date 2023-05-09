import { Component } from "vue";
import { RouteRecordName } from "vue-router";

/**
 * 系统路由的类型
 * @name  路由名称
 * @path  路劲
 * @redirect  重定向
 * @notCloseTag 不允许关闭tag
 * @meta 路由信息
 * @parentName 父路由name
 */
export type WYRouterUseType = {
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
 * @componentName 该属性存在的页面会被keep alive缓存
 */
export interface routeMeta {
  icon?: string;
  title?: string;
  fixedPage?: boolean;
  parentRoute?: parentRouter[];
  notCloseTag?: Boolean;
  componentName?: string;
}
/**
 * 父路由的类型
 */
export interface parentRouter {
  title: string;
  path: string;
  redirect?: string;
}
