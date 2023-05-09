import "uno.css";
import "animate.css";
// 导入公共样式
import "./style/index.scss";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
// 导入字体图标
import "./assets/iconfont/iconfont.js";
import "./assets/iconfont/iconfont.css";
//导入虚拟列表样式
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
//导入去除谷歌的passive警告
import "./plugins/polyfill.js";

import { MotionPlugin } from "@vueuse/motion";
import ElementPlus from "element-plus";
import { createApp, Directive } from "vue";
import VirtualScroller from "vue-virtual-scroller";

import { setupStore } from "/@/store";

import { I18nCreate, useI18n } from "../src/plugins/i18n";
import App from "./App.vue";
import { getGlobalSetting } from "./config";
import router from "./router";
/* 创建应用实例 */
const app = createApp(App);

/* 自定义指令 */
import * as directives from "/@/directives";
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});

/* 获取系统配置后，初始化 */
getGlobalSetting().then(async () => {
  /* store 初始化 */
  setupStore(app);
  /* 国际化 初始化 */
  I18nCreate();

  /* 路由 初始化 */
  app.use(router);
  await router.isReady();

  app.use(MotionPlugin).use(useI18n).use(ElementPlus).use(VirtualScroller);
  app.mount("#app");
});
