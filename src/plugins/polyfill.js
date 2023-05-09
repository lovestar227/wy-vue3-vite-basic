/**
 * 去除谷歌的passive警告
 * element plus：touchstart
 * echarts：mousewheel-wheel
 */
(function () {
  if (typeof EventTarget !== "undefined") {
    const func = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, fn, capture) {
      this.func = func;
      if (
        (type === "mousewheel" || type === "wheel" || type === "touchstart") &&
        typeof capture !== "boolean"
      ) {
        capture = capture || {};
        capture.passive = false;
      }
      this.func(type, fn, capture);
    };
  }
})();
