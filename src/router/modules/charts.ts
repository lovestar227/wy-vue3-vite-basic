import { $$t } from "/@/plugins/i18n";
/**
 * 图表路由
 */
const chartsRouter: WYRouterUseType = {
  path: "/charts",
  name: "ChartsPage",
  redirect: "/charts/lineCharts",
  meta: {
    icon: "ep:odometer",
    title: $$t("menus.chartsPage")
  },
  children: [
    {
      path: "/charts/lineCharts",
      name: "LineCharts",
      component: () => import("/@/views/chartsPage/lineCharts/index.vue"),
      meta: {
        title: $$t("menus.lineCharts"),
        keepAlive: true,
        scrollTop: true,
        componentName: "LineCharts"
      }
    }
  ]
};
export default chartsRouter;
