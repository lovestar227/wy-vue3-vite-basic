/**
 * unocss配置
 * 由于将vite的plugin配置集中到plugins.ts文件中，所以 unocss.config文件需要存在，不然vscode 插件 不给提示 QAQ
 */
import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetUno()],
  exclude: [`${__dirname}/node_modules/**/*`]
});
