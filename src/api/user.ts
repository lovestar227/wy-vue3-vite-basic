import { loginParamsType, loginResultType } from "/@/types/api/userApiType";

import { http } from "../utils/http";

/**
 * 用户登录API
 * @param {loginParamsType} params 用户登录数据
 * @returns {Promise<loginResultType>}
 */
export const UserLoginAPI = (
  params: loginParamsType
): Promise<loginResultType> => {
  return http.$post<loginParamsType, loginResultType>("/userLogin", params);
};
