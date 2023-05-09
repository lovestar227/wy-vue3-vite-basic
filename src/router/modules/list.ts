import { $$t } from "/@/plugins/i18n";
/**
 * 列表路由
 */
const listRouter = {
  path: "/list",
  name: "ListPage",
  component: () => import("/@/views/listPage/index.vue"),
  meta: {
    icon: "ep:sunset",
    title: $$t("menus.listPage"),
    keepAlive: true,
    componentName: "ListPage"
  }
};
export default listRouter;
