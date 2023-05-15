import { lifeItem, Suggestion } from "/@/types/api/outside/weatherApiType";

//天气对应png图片Map
export const weatherMap = new Map([
  ["白天晴", "Day Sunny"],
  ["夜晚晴", "Night Sunny"],
  ["多云", "Cloudy"],
  ["白天晴间多云", "Day Partly Cloudy"],
  ["夜晚晴间多云", "Night Partly Cloudy"],
  ["白天大部多云", "Day Partly Cloudy"],
  ["夜晚大部多云", "Night Partly Cloudy"],
  ["阴", "Overcast"],
  ["阵雨", "Shower"],
  ["雷阵雨", "Thundershower"],
  ["雷阵雨伴有冰雹", "Thundershower with Hail"],
  ["小雨", "Light Rain"],
  ["中雨", "Moderate Rain"],
  ["大雨", "Heavy Rain"],
  ["暴雨", "Storm"],
  ["大暴雨", "Heavy Storm"],
  ["特大暴雨", "Heavy Storm"],
  ["冻雨", "Ice Rain"],
  ["雨夹雪", "Sleet"],
  ["阵雪", "Snow Flurry"],
  ["小雪", "Light Snow"],
  ["中雪", "Moderate Snow"],
  ["大雪", "Heavy Snow"],
  ["暴雪", "Snowstorm"],
  ["浮尘", "Dust"],
  ["扬沙", "Dust"],
  ["沙尘暴", "Duststorm"],
  ["强沙尘暴", "Duststorm"],
  ["雾", "Foggy"],
  ["霾", "Haze"],
  ["风", "Windy"],
  ["大风", "Windy"],
  ["飓风", "Hurricane"],
  ["热带风暴", "Hurricane"],
  ["龙卷风", "Tornado"],
  ["冷", "Cold"],
  ["热", "Day Sunny"]
]);
//生活指数对应等级，根据等级来匹配最先显示的四个生活指数
const lifeMap = {
  ac: {
    name: "空调",
    icon: "icon-kongtiao",
    长时间开启: 1,
    部分时间开启: 3,
    较少开启: 3,
    开启制暖空调: 1
  },
  air_pollution: {
    name: "空气污染",
    icon: "icon-kongqijiance",
    优: 1,
    良: 3,
    中: 3,
    较差: 3,
    很差: 1
  },
  airing: {
    name: "晾晒",
    icon: "icon-liangyifu",
    极适宜: 1,
    适宜: 1,
    基本适宜: 3,
    较适宜: 3,
    不太适宜: 3,
    不适宜: 3,
    不宜: 2
  },
  allergy: {
    name: "过敏",
    icon: "icon-pifuguomin",
    极不易发: 1,
    不易发: 3,
    较易发: 3,
    易发: 3,
    极易发: 1
  },
  beer: {
    name: "啤酒",
    icon: "icon-pijiu",
    不适宜: 2,
    较不适宜: 3,
    较适宜: 3,
    适宜: 1
  },
  boating: {
    name: "划船",
    icon: "icon-huachuan",
    适宜: 1,
    较适宜: 3,
    不适宜: 2
  },
  car_washing: {
    name: "洗车",
    icon: "icon-xiche",
    适宜: 1,
    较适宜: 3,
    较不宜: 3,
    不宜: 2
  },
  comfort: {
    name: "舒适度",
    icon: "icon-baobaoshufu",
    舒适: 1,
    较舒适: 1,
    较不舒适: 3,
    不舒适: 3,
    很不舒适: 2,
    极不舒适: 2,
    非常不舒适: 2
  },
  dressing: {
    name: "穿衣",
    icon: "icon-shangyi",
    穿衣: 1,
    炎热: 1,
    热: 1,
    舒适: 1,
    较舒适: 1,
    较冷: 1,
    冷: 1,
    寒冷: 1
  },
  fishing: {
    name: "钓鱼",
    icon: "icon-yu",
    适宜: 1,
    较适宜: 3,
    不宜: 2
  },
  flu: {
    name: "感冒",
    icon: "icon-ganmao",
    少发: 3,
    较易发: 2,
    易发: 1,
    极易发: 1
  },
  kiteflying: {
    name: "放风筝",
    icon: "icon-fengzheng",
    适宜: 1,
    较适宜: 3,
    不宜: 2
  },
  makeup: {
    name: "化妆",
    icon: "icon-huazhuangpin",
    保湿: 1,
    保湿防晒: 1,
    滋润保湿: 1,
    防晒: 1,
    去油: 1,
    去油防晒: 1,
    防脱水: 1,
    防脱水防晒: 1
  },
  morning_sport: {
    name: "晨练",
    icon: "icon-paobu",
    适宜: 1,
    较适宜: 1,
    较不宜: 3,
    不宜: 3
  },
  road_condition: {
    name: "路况",
    icon: "icon-shishilukuang",
    干燥: 1,
    潮湿: 1,
    湿滑: 1,
    积雪: 1,
    积冰: 1
  },
  shopping: {
    name: "购物",
    icon: "icon-a-gouwugouwudai",
    适宜: 1,
    较适宜: 3,
    较不宜: 3,
    不适宜: 2
  },
  sport: {
    name: "运动",
    icon: "icon-yumaoqiu",
    适宜: 1,
    较适宜: 2,
    较不宜: 2
  },
  sunscreen: {
    name: "防晒",
    icon: "icon-fangshai",
    弱: 3,
    较弱: 3,
    中等: 2,
    强: 1,
    极强: 1
  },
  traffic: {
    name: "交通",
    icon: "icon-qiche",
    良好: 1,
    较好: 1,
    一般: 2,
    较差: 1,
    很差: 1,
    暂无: 3
  },
  umbrella: {
    name: "雨伞",
    icon: "icon-yusan",
    不带伞: 1,
    带伞: 1,
    暂无: 3
  },
  uv: {
    name: "紫外线",
    icon: "icon-ziwaixianruo",
    最弱: 3,
    弱: 3,
    中等: 2,
    强: 1,
    很强: 1
  }
};
//生活指数优先遍历顺序
const simpleLifeOrder = [
  "dressing",
  "makeup",
  "sport",
  "traffic",
  "airing",
  "umbrella",
  "shopping",
  "kiteflying",
  "fishing",
  "car_washing",
  "boating",
  "beer",
  "ac",
  "allergy",
  "comfort",
  "flu",
  "morning_sport",
  "road_condition",
  "uv",
  "sunscreen",
  "air_pollution"
];
/**
 * 选出4个优先展示的生活指数
 * @param {Suggestion} data 今天的生活指数
 * @returns {lifeItem[][]}
 */
export const getLifeData = (data: Suggestion): lifeItem[][] => {
  const result = [
    [null, null],
    [null, null]
  ];
  let row = 0,
    col = 0;
  let level = 1;
  let id = 0;
  while (row < 2) {
    for (const lifeKey of simpleLifeOrder) {
      if (row > 1) break;
      const lifeItem = data[lifeKey];
      if (!lifeItem || !lifeItem.brief) continue;
      if (lifeMap[lifeKey][lifeItem.brief] === level) {
        result[row][col] = {
          id: id++,
          name: lifeMap[lifeKey].name,
          icon: lifeMap[lifeKey].icon,
          brief: lifeItem.brief,
          details: lifeItem.details
        };
        if (++col > 1) {
          col = 0;
          row++;
        }
      }
    }
    level++;
  }

  return result;
};
