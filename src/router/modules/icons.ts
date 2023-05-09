import { $$t } from "/@/plugins/i18n";
/**
 * 图标路由
 */
const iconsRouter = {
  path: "/icons",
  name: "IconsPage",
  component: () => import("/@/views/iconsPage/index.vue"),
  meta: {
    icon: "ep:ice-cream-round",
    title: $$t("menus.iconsPage"),
    keepAlive: true,
    componentName: "IconsPage"
  }
};
export default iconsRouter;
