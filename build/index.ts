/**
 * 处理环境变量
 * @param envConf 环境变量
 * @returns {ViteEnv}
 */
export const dealEnv = (envConf: Record<string, any>): ViteEnv => {
  // 此处为默认值，无需修改
  const env: ViteEnv = {
    VITE_PORT: 8088, //开发环境端口号
    VITE_PUBLIC_PATH: "", //公共路径
    VITE_ROUTER_HISTORY: "", //路由模式
    VITE_LEGACY: false, //是否另外打包 '兼容低版本浏览器'
    VITE_COMPRESSION: "none", //压缩模式
    VITE_MOCK: false, //是否开启Mock
    VITE_API_BASE_URL: "" //api 基础路径
  };

  for (const name of Object.keys(envConf)) {
    let value = envConf[name];

    //boolean
    value = value === "true" ? true : value === "false" ? false : value;

    //端口
    if (name === "VITE_PORT") {
      value = Number(value);
    }
    env[name] = value;
  }

  return env;
};
