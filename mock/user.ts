/**
 * 登录接口mock
 */
import type { MockMethod } from "vite-plugin-mock";
// import dayjs, { Dayjs } from "dayjs";
export default [
  {
    url: "/userLogin",
    method: "post",
    response: httpConfig => {
      const data = httpConfig.body;
      if (data.userName === "admin" && data.userPassword === "123456") {
        return {
          code: "ACK",
          data: {
            signUser: {
              userName: "管理员"
            },
            token: {
              accessToken: "WYJS0001",
              expired: new Date()
            }
          },
          message: "登录成功"
        };
      } else {
        return {
          code: "Error",
          data: null,
          message: "用户名或密码错误"
        };
      }
    }
  }
] as MockMethod[];
