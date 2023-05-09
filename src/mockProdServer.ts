/**
 * 生产环境 使用 mock
 */

import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

//导入所有的mock数据
const modules: Record<string, any> = import.meta.glob("../mock/**/*.ts", {
  eager: true //预先加载所有匹配到的模块
});
const mockModules = [];

Object.keys(modules).forEach(key => {
  mockModules.push(...modules[key].default);
});

/**
 启动生产mock
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
