import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useRouter } from "vue-router";

import NProgress from "/@/plugins/nprogress/index";
import { storageLocal } from "/@/utils";

//不需要校验token的接口
const notTokenPaths = [/\/userLogin/];
const defaultConfig: AxiosRequestConfig = {
  //如果使用生产mock baseURL要置空
  baseURL:
    import.meta.env.VITE_MOCK === "true"
      ? ""
      : import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
};

const myAxios = axios.create(defaultConfig);

myAxios.interceptors.request.use(
  config => {
    NProgress.start(); // 开启进度条动画

    const notNeedToken = notTokenPaths.some(item => {
      return item.test(config.url);
    });
    if (notNeedToken) {
      //不需要校验token
      return config;
    }
    const token = storageLocal.getItem<string>("token");
    if (token) {
      const data = JSON.parse(token);
      const now = new Date().getTime();
      const expired = parseInt(data.expires) - now <= 0;
      if (expired) {
        // token过期
        useRouter().push("/login");
      } else {
        config.headers["Authorization"] = data.accessToken;
        return config;
      }
    } else {
      return config;
    }
    return config;
  },
  error => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

myAxios.interceptors.response.use(
  response => {
    //请求200
    NProgress.done(); // 关闭进度条动画
    const res = response.data;
    if (res.code === "ACK") {
      //接口调用成功
      return response.data;
    } else {
      //请求错误
    }
  },
  (error: AxiosError) => {
    //请求失败

    NProgress.done(); // 关闭进度条动画
    // 所有的响应异常 区分来源为取消请求/非取消请求
    return Promise.reject(error);
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const $get = <Q, P>(url: string, params: Q): Promise<P> => {
  return new Promise((resolve, reject) => {
    myAxios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
};
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const $post = <Q, P>(url: string, params: Q): Promise<P> => {
  return new Promise((resolve, reject) => {
    myAxios
      .post(url, params) //是将对象 序列化成URL的形式，以&进行拼接
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
};

export const http = {
  $post,
  $get
};
