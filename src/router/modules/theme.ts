import { $$t } from "/@/plugins/i18n";
/**
 * 主题色页面路由
 */
const themeRouter = {
  path: "/theme",
  name: "ThemePage",
  component: () => import("/@/views/themePage/index.vue"),
  meta: {
    icon: "ep:cold-drink",
    title: $$t("menus.themePage"),
    keepAlive: true,
    componentName: "ThemePage"
  }
};
export default themeRouter;
