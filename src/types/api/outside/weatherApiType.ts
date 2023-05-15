/**
 * 获取实时天气接口参数的类型
 */
export type weatherParamsType = {
  //心知天气 API 秘钥
  key: string;
  //所查询的位置
  location: string;
  //语言
  language: string;
};

/**
 * 实时天气接口参数的类型
 */
export type weatherResultType = {
  //实时天气数据
  results: weatherItem[];
};

/**
 * 获取逐日预报接口参数的类型
 */
export type daysWeatherParamsType = {
  //心知天气 API 秘钥
  key: string;
  //所查询的位置
  location: string;
  //语言
  language: string;
  //起始时间
  start: string | -2 | -1 | 0 | 1;
  //天数
  days: number;
};

/**
 * 实时逐日预报接口参数的类型
 */
export type daysWeatherResultType = {
  results: [
    {
      //位置
      location: WeatherLocation;
      //逐日预报
      daily: daysWetherItem[];
      ////数据更新时间（该城市的本地时间）
      last_update: string;
    }
  ];
};

/**
 * 获取生活指数接口参数的类型
 */
export type lifeIndexParamsType = {
  //心知天气 API 秘钥
  key: string;
  //所查询的位置
  location: string;
  //语言
  language: string;
  //天数(从今天开始包括今天)
  days: number;
};

/**
 * 实时逐日预报接口参数的类型
 */
export type lifeIndexResultType = {
  results: [
    {
      //位置
      location: WeatherLocation;
      //生活指数
      suggestion: Suggestion[];
    }
  ];
};

//心知天气 location的类型
export type WeatherLocation = {
  //城市id
  id: string;
  //城市名
  name: string;
  //国家
  country: string;
  //城市路径
  path: string;
  //时区
  timezone: string;
  //时区偏移量
  timezone_offset: string;
};

//心知天气 实时天气数据的类型
export type weatherItem = {
  location: WeatherLocation;
  now: {
    //天气现象文字
    text: string;
    //天气现象代码
    code: string;
    //温度，单位为c摄氏度或f华氏度
    temperature: string;
    //体感温度，单位为c摄氏度或f华氏度
    feels_like: string;
    //气压，单位为mb百帕或in英寸
    pressure: string;
    //相对湿度，0~100，单位为百分比
    humidity: string;
    //能见度，单位为km公里或mi英里
    visibility: string;
    //风向文字
    wind_direction: string;
    //风向角度，范围0~360，0为正北，90为正东，180为正南，270为正西
    wind_direction_degree: string;
    //风速，单位为km/h公里每小时或mph英里每小时
    wind_speed: string;
    //风力等级，请参考：http://baike.baidu.com/view/465076.htm
    wind_scale: string;
    //云量，单位%，范围0~100，天空被云覆盖的百分比 #目前不支持中国城市#
    clouds: string;
    //露点温度，请参考：http://baike.baidu.com/view/118348.htm #目前不支持中国城市#
    dew_point: string;
  };
};

//心知天气 逐日预报数据的类型
export type daysWetherItem = {
  //日期（该城市的本地时间）
  date: string;
  //白天天气现象文字
  text_day: string;
  //白天天气现象代码
  code_day: string;
  //晚间天气现象文字
  text_night: string;
  //晚间天气现象代码
  code_night: string;
  //当天最高温度
  high: string;
  //当天最低温度
  low: string;
  //降水概率，范围0~100，单位百分比（目前仅支持国外城市）
  precip: string;
  //风向文字
  wind_direction: string;
  //风向角度，范围0~360
  wind_direction_degree: string;
  //风速，单位km/h（当unit=c时）、mph（当unit=f时）
  wind_speed: string;
  //风力等级
  wind_scale: string;
  //降水量，单位mm
  rainfall: string;
  //相对湿度，0~100，单位为百分比
  humidity: string;
};

//生活指数的类型
export type Suggestion = {
  //日期
  date: string;
  //空调开启
  ac: SuggestionItem;
  //空气污染扩散条件
  air_pollution: SuggestionItem;
  //晾晒
  airing: SuggestionItem;
  //过敏
  allergy: SuggestionItem;
  //啤酒
  beer: SuggestionItem;
  //划船
  boating: SuggestionItem;
  //洗车
  car_washing: SuggestionItem;
  //舒适度
  comfort: SuggestionItem;
  //穿衣
  dressing: SuggestionItem;
  //钓鱼
  fishing: SuggestionItem;
  //感冒
  flu: SuggestionItem;
  //放风筝
  kiteflying: SuggestionItem;
  //化妆
  makeup: SuggestionItem;
  //心情
  mood: SuggestionItem;
  //晨练
  morning_sport: SuggestionItem;
  //路况
  road_condition: SuggestionItem;
  //购物
  shopping: SuggestionItem;
  //运动
  sport: SuggestionItem;
  //防晒
  sunscreen: SuggestionItem;
  //交通
  traffic: SuggestionItem;
  //雨伞
  umbrella: SuggestionItem;
  //紫外线
  uv: SuggestionItem;
};

//生活指数内容的类型
export type SuggestionItem = {
  //简介
  brief: string;
  //详情
  details: string;
};

//生活指数页面显示的类型
export interface lifeItem {
  id: number;
  icon: string;
  name: string;
  brief: string;
  details: string;
}
