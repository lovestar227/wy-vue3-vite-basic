/**
 * 页面进度条 NProgress
 * @see npm {@link https://www.npmjs.com/package/nprogress}
 * @see 官网 {@link https://ricostacruz.com/nprogress/}
 */

import "nprogress/nprogress.css";

import NProgress from "nprogress";

NProgress.configure({
  // 动画方式
  easing: "ease",
  // 递增进度条的速度
  speed: 200,
  // 是否显示加载微调器
  showSpinner: false,
  // 自动递增间隔
  trickleSpeed: 500,
  // 初始化时的最小百分比
  minimum: 0.2
});

export default NProgress;
