import { DepOptimizationOptions } from "vite";

/**
 * vite 预构建配置
 * 依赖预构建仅适用于开发模式，并使用 esbuild 将依赖项转换为 ES 模块。在生产构建中，将使用 @rollup/plugin-commonjs。
 * 依赖预购建：由于Vite 的 DevServer 是基于浏览器的 Natvie ES Module 实现的
 * 作用1：兼容 CommonJS 和 AMD 模块的依赖
 * 把第三方包预编译一遍，转换为ES Module，放置在node_modules/.vite文件夹下
 * 作用2：减少模块间依赖引用导致过多的请求次数
 * @returns {DepOptimizationOptions}
 */
export function optimizeDepsConfig(): DepOptimizationOptions {
  return {
    /**
     * 预构建包含的依赖。
     * 1.默认情况下，不在 node_modules 中的，链接的包不会被预构建。建议不在node_modules里的依赖进行预构建
     * 2.依赖项不是ESM，应该将依赖（或者依赖嵌套的不是ESM的依赖，例：['esm-dep > cjs-dep']）加入预构建。
     */
    include: ["axios", "pinia", "@vueuse/core"],
    //预构建排除的依赖
    exclude: []
  };
}
