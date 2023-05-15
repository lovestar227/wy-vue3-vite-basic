import { signUserMessageType, tokenType } from "../user";

/**
 * 登录接口参数的类型
 */
export type loginParamsType = {
  userName: string;
  userPassword: string;
};

/**
 * 登录接口参数的类型
 */
export type loginResultType = {
  token: tokenType;
  signUser: signUserMessageType;
};
