import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import"; //支持@import 写法
import { CSSOptions } from "vite";

/**
 * vite css 配置
 * @returns {CSSOptions}
 */
export const cssConfig = (): CSSOptions => {
  return {
    postcss: {
      plugins: [postcssImport as any, autoprefixer]
    },
    preprocessorOptions: {
      //指定传递给 CSS 预处理器的选项。
      scss: {
        additionalData: `@use "/@/style/theme.scss" as *;` //全局sass变量
      }
    }
  };
};
