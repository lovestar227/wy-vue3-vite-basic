import type { Erd } from "element-resize-detector";
import elementResizeDetectorMaker from "element-resize-detector";
import { debounce } from "lodash-unified";
import type { DirectiveBinding, VNode } from "vue";
import { Directive } from "vue";

const erd: Erd = elementResizeDetectorMaker({
  strategy: "scroll"
});
/**
 * 自定义指令v-resize="func"
 * 监听当前元素的大小变化
 * @params func 元素大小改变的回调
 */
export const resize: Directive = {
  mounted(el: HTMLElement, binding?: DirectiveBinding, vnode?: VNode) {
    erd.listenTo(
      el,
      //防抖500ms
      debounce(elem => {
        const width = elem.offsetWidth;
        const height = elem.offsetHeight;
        //调用回调函数,传入当前元素大小
        binding.value({ width, height });
      }, 500)
    );
  },
  //元素销毁时，销毁监听
  unmounted(el: HTMLElement, binding?: DirectiveBinding) {
    erd.uninstall(el);
  }
};
