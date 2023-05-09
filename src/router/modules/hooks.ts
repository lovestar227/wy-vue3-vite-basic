import { $$t } from "/@/plugins/i18n";
/**
 * 首页路由
 */
const hooksRouter = {
  path: "/hooks",
  name: "HooksPage",
  component: () => import("/@/views/hooksPage/index.vue"),
  meta: {
    icon: "ep:apple",
    title: $$t("menus.hooksPage"),
    keepAlive: true,
    componentName: "HooksPage"
  }
};
export default hooksRouter;
