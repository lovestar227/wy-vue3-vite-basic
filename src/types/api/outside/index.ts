/**
 * 获取当前位置信息接口的返回的类型
 * 主要字段
 * @ip 本机ip
 * @data 位置数据
 * @以下为data里的字段
 * @lat 维度
 * @lng 经度
 * @radius 半径
 * @continent 州
 * @country 国家
 * @prov 省
 * @city 城市
 * @timezone 时区
 * @owner 网络运营商
 * @isp 网络运营商
 */
export type ipAndCityResultType = {
  code: string;
  data: {
    continent: string;
    country: string;
    timezone: string;
    owner: string;
    isp: string;
    source: string;
    adcode: string;
    lat: string;
    lng: string;
    radius: string;
    prov: string;
    city: string;
  };
  msg: string;
  ip: string;
};
