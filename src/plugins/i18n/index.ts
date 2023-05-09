/**
 * 国际化配置文件
 * @see vue-i18n:API {@link https://vue-i18n.intlify.dev/api/general.html}
 */

// 多组件库的国际化和本地项目国际化兼容
// element-plus国际化
import enLocale from "element-plus/lib/locale/lang/en";
import zhLocale from "element-plus/lib/locale/lang/zh-cn";
import { App, WritableComputedRef } from "vue";
import { createI18n, type I18n } from "vue-i18n";

import { getConfig } from "/@/config";
import { storageLocal } from "/@/utils/index";

//解析yaml文件
function siphonI18n(prefix = "zh-CN") {
  return Object.fromEntries(
    Object.entries(
      //预先加载语言文件
      import.meta.glob("../../../locales/*.y(a)?ml", { eager: true })
    ).map(([key, value]: any) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)[1];
      return [matched, value.default];
    })
  )[prefix];
}

export const localesConfigs = {
  "zh-CN": {
    ...siphonI18n("zh-CN"),
    ...zhLocale
  },
  en: {
    ...siphonI18n("en"),
    ...enLocale
  }
};

/**
 * 国际化转换工具函数（自动读取根目录locales文件夹下文件进行国际化匹配）
 * @param message message
 * @returns 转化后的message
 */
export function transformI18n(message: any = "") {
  if (!message) {
    return "";
  }

  const key = message.split(".")[0];
  //取出flat翻译模式 a.b.c 中的a判断是否在语言集中存在
  if (key && Object.keys(siphonI18n("zh-CN")).includes(key)) {
    return i18n.global.t.call(i18n.global.locale, message);
  } else {
    return message;
  }
}

// 国际化智能提示
export const $$t = (key: string) => key;

export let i18n: I18n;

export function I18nCreate(): void {
  i18n = createI18n({
    legacy: false,
    //语言环境。
    locale: storageLocal.getItem<string>("locale") ?? getConfig().locale,
    //预设的语言环境
    fallbackLocale: "zh-CN",
    //本地化的语言环境信息。
    messages: localesConfigs
  });
}

export function useI18n(app: App) {
  app.use(i18n);
}
