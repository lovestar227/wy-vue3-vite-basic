/**
 * vite配置
 * 更多配置见build文件夹
 */
import dayjs from "dayjs";
import { resolve } from "path";
import { ConfigEnv, loadEnv, UserConfigExport } from "vite";

import { dealEnv } from "./build";
import { buildConfig } from "./build/build";
import { cssConfig } from "./build/cssConfig";
import { optimizeDepsConfig } from "./build/optimizeDeps";
import { pluginsConfig } from "./build/plugins";
import packageJson from "./package.json";

//当前Node.js进程执行时的文件夹地址
const root: string = process.cwd();

//导入package.json配置
const { dependencies, devDependencies, name, version } = packageJson;
const __APP_INFO__ = {
  packageJson: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
};
/**
 * command: "build" | "serve"
 * mode:模式 development || production
 */
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const {
    VITE_PORT,
    VITE_LEGACY,
    VITE_PUBLIC_PATH,
    VITE_COMPRESSION,
    VITE_MOCK
  } = dealEnv(loadEnv(mode, root)); //获取环境配置
  return {
    //开发或生产环境服务的公共基础路径。
    base: VITE_PUBLIC_PATH,
    //项目根目录
    root,
    resolve: {
      //设置别名
      alias: {
        "/#": resolve(__dirname, "./"),
        "/@": resolve(__dirname, "./src")
      }
    },
    // 开发环境配置
    server: {
      // 端口号
      port: VITE_PORT,
      open: true,
      // 是否开启 https
      https: false,
      host: "0.0.0.0", //指定服务器应该监听哪个 IP 地址。0.0.0.0 将监听所有地址，包括局域网和公网地址。
      // 本地跨域代理
      proxy: {}
    },
    //vite css配置
    css: cssConfig(),
    //vite 插件配置
    plugins: pluginsConfig(command, VITE_LEGACY, VITE_COMPRESSION, VITE_MOCK), //插件
    //vite 预构建配置
    optimizeDeps: optimizeDepsConfig(),
    //vite build构建配置
    build: buildConfig(),
    //定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__) //package.json配置
    }
  };
};
