import { watch } from "vue";

import { useAppHook } from "/@/hooks/app";
import { useTranslate } from "/@/hooks/useTranslate";

/**
 * 系统Hook
 *
 * 监听语言改变动态改变网页标题
 */
export function useSetting() {
  const route = useRoute();
  const { changeTitle } = useAppHook();
  const { locale } = useTranslate();
  //初始化网页标题
  changeTitle(route.meta);
  //监听系统语言变化，根据系统语言动态改变网页标题
  watch(
    () => locale.value,
    newVal => {
      changeTitle(route.meta);
    }
  );
}
