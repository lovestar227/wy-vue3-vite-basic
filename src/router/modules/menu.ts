import { $$t } from "/@/plugins/i18n";
/**
 * 菜单路由
 */
const menuRouter = {
  path: "/menu",
  name: "Menu",
  redirect: "/menu/1",
  meta: {
    icon: "ep:pear",
    title: $$t("menus.menu")
  },
  children: [
    {
      path: "/menu/1",
      name: "Menu1",
      redirect: "/menu/1/3",
      meta: {
        icon: "ep:pear",
        title: $$t("menus.menu1")
      },
      children: [
        {
          path: "/menu/1/3",
          name: "Menu3",
          component: () => import("/@/views/menuPage/index1.vue"),
          meta: {
            title: $$t("menus.menu3"),
            icon: "ep:pear",
            keepAlive: true,
            componentName: "Menu3"
          },
          parentName: "Menu1"
        }
      ]
    },
    {
      path: "/menu/2",
      name: "Menu2",
      component: () => import("/@/views/menuPage/index2.vue"),
      meta: {
        title: $$t("menus.menu2"),
        keepAlive: true,
        componentName: "Menu2"
      },
      parentName: "Menu"
    }
  ]
};
export default menuRouter;
