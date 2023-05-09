import axios from "axios";

/**
 * 储存全局系统配置数据
 */
let config: GolbalSetting = {};
/* 静态资源路径 */
const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;
/**
 * 修改全局系统配置
 * @param {GolbalSetting} newConfig
 */
const setConfig = (newConfig: GolbalSetting) => {
  config = Object.assign(config, newConfig);
};
/**
 * 获取全局系统配置
 * @returns {GolbalSetting}
 */
const getConfig = (): GolbalSetting => {
  return config;
};

/**
 * 获取并设置全局默认系统配置
 */
export const getGlobalSetting = (): Promise<void> => {
  return axios({
    baseURL: "",
    method: "get",
    url: `${VITE_PUBLIC_PATH}/globalSetting.json`
  }).then(({ data }) => {
    // 设置全局配置
    setConfig(data);
  });
};

export { getConfig, setConfig };
