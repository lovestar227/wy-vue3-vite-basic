import { ipAndCityResultType } from "/@/types/api/outside/index";

import { http } from "../../utils/http";
/**
 * 获取本机IP与城市(只能精确到城市)
 * @returns {Promise<daysWeatherResultType>}
 */
export const getIPAndCityAPI = (): Promise<ipAndCityResultType> => {
  return http.$get<null, ipAndCityResultType>(
    "https://qifu-api.baidubce.com/ip/local/geo/v1/district",
    null,
    {
      requestOutside: true
    }
  );
};
