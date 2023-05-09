/**
 * 数据操作
 */
export const DataFunc = {
  isURL,
  ifJsonString
};

export function isURL(url: string): boolean {
  // 验证url
  const strRegex =
    "^((https|http|ftp|rtsp|mms)?://)" +
    "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + // ftp的user@
    "(([0-9]{1,3}.){3}[0-9]{1,3}" + // IP形式的URL- 199.194.52.184
    "|" + // 允许IP和DOMAIN（域名）
    "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
    "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." + // 二级域名
    "[a-z]{2,6})" + // first level domain- .com or .museum
    "(:[0-9]{1,4})?" + // 端口- :80
    "((/?)|" + // a slash isn't required if there is no file name
    "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
  const re = new RegExp(strRegex);
  return re.test(url);
}

//判断是否是json字符串
export function ifJsonString(str) {
  if (typeof str == "string") {
    try {
      const obj = JSON.parse(str);
      // 等于这个条件说明就是JSON字符串 会返回true
      if (obj) {
        return true;
      } else {
        //不是就返回false
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}
