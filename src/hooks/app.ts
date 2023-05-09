import { UserLoginAPI } from "/@/api/user";
import { getConfig } from "/@/config";
import { transformI18n } from "/@/plugins/i18n";
import router from "/@/router/index";
import { appStore } from "/@/store/modules/app";
import { loginParamsType } from "/@/types/api/userApiType";
import { routeMeta } from "/@/types/router";

/**
 * 系统hook
 */
export function useAppHook() {
  const useAppStore = appStore();

  /**
   * 动态改变网页标题(document title)
   * @param meta
   */
  function changeTitle(meta: routeMeta) {
    const title = getConfig().title;
    if (title) document.title = `${transformI18n(meta.title)} | ${title}`;
    else document.title = transformI18n(meta.title);
  }

  /**
   * 用户登录
   * @param params
   */
  async function login(params: loginParamsType) {
    const result = await UserLoginAPI(params);
    //登录成功
    if (result) {
      useAppStore.setSignUser(result.signUser);
      useAppStore.setToken(result.token);
      router.push("/home");
    }
  }

  /**
   * 用户退出登录
   */
  function logout() {
    router.push("/login");
    useAppStore.loginOut();
  }

  return {
    changeTitle,
    login,
    logout
  };
}
