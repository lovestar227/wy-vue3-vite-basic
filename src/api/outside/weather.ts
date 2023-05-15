import {
  daysWeatherParamsType,
  daysWeatherResultType,
  lifeIndexParamsType,
  lifeIndexResultType,
  weatherParamsType,
  weatherResultType
} from "/@/types/api/outside/weatherApiType";

import { http } from "../../utils/http";

/**
 * 获取实时天气数据(外部接口-心知天气)
 * @param {weatherParamsType} params
 * @returns {Promise<weatherResultType>}
 */
export const getNowWeatherAPI = (
  params: weatherParamsType
): Promise<weatherResultType> => {
  return http.$get<weatherParamsType, weatherResultType>(
    "https://api.seniverse.com/v3/weather/now.json",
    params,
    {
      requestOutside: true
    }
  );
};

/**
 * 获取逐日预报(外部接口-心知天气)
 * @param {daysWeatherParamsType} params
 * @returns {Promise<daysWeatherResultType>}
 */
export const getDaysWeatherAPI = (
  params: daysWeatherParamsType
): Promise<daysWeatherResultType> => {
  return http.$get<daysWeatherParamsType, daysWeatherResultType>(
    "https://api.seniverse.com/v3/weather/daily.json",
    params,
    {
      requestOutside: true
    }
  );
};

/**
 * 获取生活指数(外部接口-心知天气)
 * @param {lifeIndexParamsType} params
 * @returns {Promise<lifeIndexResultType>}
 */
export const getLifeIndexAPI = (
  params: lifeIndexParamsType
): Promise<lifeIndexResultType> => {
  return http.$get<lifeIndexParamsType, lifeIndexResultType>(
    "https://api.seniverse.com/v3/life/suggestion.json",
    params,
    {
      requestOutside: true
    }
  );
};
