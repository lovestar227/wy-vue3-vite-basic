import { $$t } from "/@/plugins/i18n";
/**
 * 图表路由
 */
const chartsRouter: WYRouterUseType = {
  path: "/charts",
  name: "ChartsPage",
  component: () => import("/@/views/chartsPage/index.vue"),
  meta: {
    icon: "ep:odometer",
    title: $$t("menus.chartsPage"),
    keepAlive: true,
    scrollTop: true,
    componentName: "ChartsPage"
  }
};
export default chartsRouter;
