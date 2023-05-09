const Layout = () => import("/@/layout/Layout.vue");
import { $$t } from "/@/plugins/i18n";
/**
 * 错误页面路由
 */
const errorRouter = {
  path: "/error",
  name: "ErrorPage",
  redirect: "/error/500",
  component: Layout,
  meta: {
    icon: "ep:lightning",
    title: $$t("menus.errorPage")
  },
  children: [
    {
      path: "/error/404",
      name: "Page404",
      component: () => import("/@/views/errorPage/404.vue"),
      meta: {
        title: $$t("menus.404"),
        keepAlive: true,
        componentName: "404",
        fixedPage: true
      },
      parentName: "ErrorPage"
    },
    {
      path: "/error/500",
      name: "Page500",
      component: () => import("/@/views/errorPage/500.vue"),
      meta: {
        title: $$t("menus.500"),
        keepAlive: true,
        componentName: "500",
        fixedPage: true
      },
      parentName: "ErrorPage"
    }
  ]
};
export default errorRouter;
