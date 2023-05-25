import { getConfig } from "/@/config";
import { storageLocal } from "/@/utils";

/**
 * --------------------------------------------
 * theme store
 * --------------------------------------------
 */

/**
 * 这个map可以通过key来修改value中对应的多个var变量
 * @param {--color-theme-main-color}：系统主色
 * @param {--color-theme-hover-color}：系统主色
 */
const colorMap = new Map([
  ["mainColor", ["--color-theme-main-color"]],
  ["mainColorLight3", ["--color-theme-main-color-light-3"]],
  ["mainColorLight5", ["--color-theme-main-color-light-5"]],
  ["mainColorLight7", ["--color-theme-main-color-light-7"]],
  ["mainColorLight8", ["--color-theme-main-color-light-8"]],
  ["mainColorLight9", ["--color-theme-main-color-light-9"]],
  ["mainColorDark2", ["--color-theme-main-color-dark-2"]]
]);
/**
 * 获取localStroge储存的主题色
 * @returns
 */
export function getThemeColorFromStorageLocal(): themeColorType {
  const themeColor =
    storageLocal.getItem<themeColorType>("themeColor") ??
    getConfig().themeColor;

  /* 应用储存主题色 */
  setRootThemeColor(themeColor);
  return themeColor;
}
/**
 * 应用主题色
 * @param {themeColorType} obj
 */
export function setRootThemeColor(obj: themeColorType) {
  //取出当前应用的主题色样式
  const styleCssText = document.documentElement.style.cssText;
  const allStyle = styleCssText
    .split(";")
    .filter(item => item)
    .map(item => item.trim().split(":"));
  const nowStyleMap = new Map<string, string>(allStyle as any);
  //生成需要修改的主题色样式
  const setMap = new Map<string, string>();
  colorMap.forEach((value, key) => {
    if (obj[key]) {
      value.forEach(item => {
        setMap.set(item, obj[key]);
      });
    }
  });
  //更新到当前主题色Map上
  setMap.forEach((value, key) => {
    nowStyleMap.set(key, value);
  });
  //生成新的cssText
  const allStyleAfter = Array.from(nowStyleMap);
  const finallArr = allStyleAfter.map(item => item[0] + ":" + item[1]);
  let styleClassTextAfter = "";
  finallArr.forEach((item, index) => {
    if (index) {
      styleClassTextAfter += " ";
    }
    styleClassTextAfter += item + ";";
  });
  //应用主题色-cssText
  document.documentElement.style.cssText = styleClassTextAfter;
}

/**
 * --------------------------------------------
 * router store
 * --------------------------------------------
 */

/**
 * 初始化建立所有可以被缓存的路由
 * @param {WYRouterUseType[]} routers 所有菜单路由
 * @returns {WYRouterUseType[]}
 */
export const initAllAliveRoute = (
  routers: WYRouterUseType[]
): WYRouterUseType[] => {
  return routers.filter(
    item => item.meta?.keepAlive && item.meta?.componentName
  );
};
