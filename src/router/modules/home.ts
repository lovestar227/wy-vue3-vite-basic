import { $$t } from "/@/plugins/i18n";
/**
 * 首页路由
 */
const homeRouter = {
  path: "/home",
  name: "HomePage",
  component: () => import("/@/views/homePage/index.vue"),
  meta: {
    icon: "ep:home-filled",
    title: $$t("menus.homePage"),
    keepAlive: true,
    fixedPage: true,
    componentName: "HomePage"
  }
};
export default homeRouter;
