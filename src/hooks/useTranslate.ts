import { useI18n } from "vue-i18n";

import { appStore } from "../store/modules/app";

/**
 * 系统语言hook
 */
export function useTranslate() {
  const {
    locale, //当前系统语言
    t
  } = useI18n();
  const useAppStore = appStore();

  //切换系统语言为中文
  function translateZh() {
    useAppStore.setLocale("zh-CN");
    locale.value = "zh-CN";
  }
  //切换系统语言为英文
  function translateEn() {
    useAppStore.setLocale("en");
    locale.value = "en";
  }

  return {
    t,
    locale,
    translateZh,
    translateEn
  };
}
