import { reactive, ref } from "vue";
import { RouteRecordRaw } from "vue-router";

/**
 * 处理路由配置
 * @param {RouteRecordRaw[]} allRoutes 当前需要遍历的路由的数组
 * @param {RouteRecordRaw[]} arr 储存结果路由的数组
 * @param {parentRouter[]} parentRoute 父路由
 * @returns {RouteRecordRaw[]} 平铺到成一级的路由
 */
export function dealAllRoutes(
  allRoutes: RouteRecordRaw[],
  arr: RouteRecordRaw[],
  parentRoute: parentRouter[]
): RouteRecordRaw[] {
  for (const routeItem of allRoutes) {
    const newParentRoute = parentRoute.slice(0);
    if (routeItem.meta?.title) {
      if (routeItem.redirect) {
        newParentRoute.push({
          redirect: routeItem.redirect as string,
          path: routeItem.path,
          title: routeItem.meta.title as string
        });
      } else {
        newParentRoute.push({
          path: routeItem.path,
          title: routeItem.meta.title as string
        });
      }
      routeItem.meta.parentRoute = newParentRoute;
    }
    if (routeItem.children?.length > 0 && routeItem.redirect) {
      arr.push(routeItem);
      arr.concat(dealAllRoutes(routeItem.children, arr, newParentRoute));
    } else {
      arr.push(routeItem);
      if (routeItem.children?.length > 0) {
        arr.concat(dealAllRoutes(routeItem.children, arr, newParentRoute));
      }
    }
  }
  return arr;
}

/**
 * 菜单数据响应化
 * @param routes
 * @returns
 */
export function routeToMenuData(routes: WYRouterUseType[]) {
  return reactive(routes);
}
