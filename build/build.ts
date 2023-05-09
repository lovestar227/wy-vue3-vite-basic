import { resolve } from "path";
import { BuildOptions } from "vite";

/**
 * 路径查找
 * @param dir 目标路径
 * @returns {string}
 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/**
 * vite build构建配置
 * @returns {BuildOptions}
 */
export function buildConfig(): BuildOptions {
  return {
    // 打包大小超过4M警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: pathResolve("../index.html")
      },
      // 静态资源分类分包
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        manualChunks(id) {
          //依赖分包
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        }
      }
    }
  };
}
