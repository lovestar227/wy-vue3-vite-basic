import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import legacy from "@vitejs/plugin-legacy";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import viteEslint from "vite-plugin-eslint";
import { viteMockServe } from "vite-plugin-mock";
import removeConsole from "vite-plugin-remove-console";
import viteStylelint from "vite-plugin-stylelint";
import svgLoader from "vite-svg-loader";

import { configCompressPlugin } from "./compress";

/**
 * vite plugin 配置
 * @param {string} command 指令 "server" | "build"
 * @param {boolean} VITE_LEGACY ture-提供传统浏览器兼容性支持
 * @param {string} VITE_COMPRESSION 压缩指令,null-不压缩
 * @param {boolean} VITE_MOCK true-开启mock
 * @returns
 */
export function pluginsConfig(
  command,
  VITE_LEGACY,
  VITE_COMPRESSION,
  VITE_MOCK
) {
  return [
    //Vue支持
    Vue(),
    // jsx、tsx语法支持
    // vueJsx: VueJsx()
    //国际化
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve("locales/**")]
    }),
    //stylelint 控制台报错信息集成
    viteStylelint(),
    //eslint 控制台报错信息集成
    viteEslint(),
    //原子css集成
    Unocss(),
    // 线上环境删除console
    removeConsole({ external: ["src/assets/iconfont/iconfont.js"] }),
    // svg组件化支持
    svgLoader(),
    // mock支持
    viteMockServe({
      //设置模拟.ts 文件的存储文件夹
      mockPath: "mock",
      //本地启用，设置是否启用本地mock .ts文件，不在生产环境中打开
      localEnabled: command === "serve" && VITE_MOCK,
      //生产启用，设置打包时是否启用模拟功能
      prodEnabled: command !== "serve" && VITE_MOCK,
      injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      logger: false
    }),
    //图标管理
    Icons({
      compiler: "vue3",
      //默认class
      defaultClass: "icon-svg",
      //自定义图标管理，建立图表集my
      customCollections: {
        my: FileSystemIconLoader("src/assets/svg", svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    }),
    //为某些库按需自动导入 API
    AutoImport({
      imports: [
        // 需要自动导入的插件，自定义导入的API
        "vue",
        "vue-router",
        "pinia"
      ],
      dts: "types/auto-import.d.ts"
    }),
    //按需自动导入，无需手动导入，编译自动添加导入语句
    Components({
      // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import,默认值为: "src/components"
      // PS：自定义的全局组件的类型提示写在global-components.d.ts里
      dirs: ["src/components"],
      dts: "types/components.d.ts",
      extensions: ["vue"],
      resolvers: [
        //自动引入 iconify
        IconsResolver({
          //Icon组件使用的统一前缀 例：<icon-ep-apple>
          prefix: "icon",
          //自定引入自定义图标集 my
          customCollections: ["my"]
        })
        // Element Plus 按需导入
        // ElementPlusResolver()
      ]
    }),
    // 是否为打包后的文件提供传统浏览器兼容性支持
    VITE_LEGACY
      ? legacy({
          //需要兼容的目标列表，可以设置多个
          targets: ["ie >= 11"],
          // 面向IE11时需要此插件
          additionalLegacyPolyfills: ["regenerator-runtime/runtime"]
        })
      : null,
    // 生成打包分析图
    visualizer({ brotliSize: true, filename: "report.html" }),
    //压缩
    configCompressPlugin(VITE_COMPRESSION)
  ];
}
