<script setup lang="ts">
import dayjs from "dayjs";
import type { ElPopover } from "element-plus";

import { getIPAndCityAPI } from "/@/api/outside/index";
import {
  getDaysWeatherAPI,
  getLifeIndexAPI,
  getNowWeatherAPI
} from "/@/api/outside/weather";
import {
  daysWeatherResultType,
  daysWetherItem,
  lifeIndexResultType,
  lifeItem,
  Suggestion
} from "/@/types/api/outside/weatherApiType";
import { storageLocal } from "/@/utils";

import { getLifeData, weatherMap } from "./simpleWeather";

defineOptions({
  name: "SimpleWeather"
});

//静态资源基础路径
const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;
const baseApiParams = {
  //心知天气秘钥
  key: "SqOhhSmsbAOffhH0B",
  //所在位置
  location: storageLocal.getItem<string>("location"),
  //返回数据的语言类型
  language: "zh-Hans"
};

//正在获取天气数据loading
const weatherLoading = ref(false);
//驻日预报loading
const daysLoading = ref(false);
//生活指数loading
const lifeLoading = ref(false);
//今天
const tody = getToday();
//所在城市
const city = ref("");
//实时温度
const temperature = ref("");
//实时天气
const weather = ref("");
//是否已经获取过逐日预报和生活指数
let ifGetMoreData = false;
//逐日预报
const daysWeather = ref<daysWetherItem[]>([]);
//生活指数返回数据
let lifeIndex: Suggestion[] = [];
//生活指数（4个）
const lifeData = ref<lifeItem[][]>([]);
//weather popover ref
const weatherPopoverRef = ref<InstanceType<typeof ElPopover> | undefined>();
/**
 * 获取实时天气
 * @param location 查询位置
 */
const getNowWeather = () => {
  getNowWeatherAPI(baseApiParams).then(res => {
    //所在城市
    city.value = res.results[0].location.name;
    //实时温度
    temperature.value = res.results[0].now.temperature + "°C";
    let nowWeather = res.results[0].now.text;
    //以下三种天气有白天/夜晚区分
    if (
      nowWeather === "晴" ||
      nowWeather === "晴间多云" ||
      nowWeather === "大部多云"
    ) {
      const nowHour = dayjs().hour();
      //根据当前小时判断是白天/夜晚
      if (nowHour >= 6 && nowHour < 18) {
        nowWeather = "白天" + nowWeather;
      } else {
        nowWeather = "夜晚" + nowWeather;
      }
    }
    //实时天气
    weather.value = nowWeather;
    //结束loading
    weatherLoading.value = false;
  });
};
/**
 * popover显示，请求三日逐日预报与生活指数数据
 */
const showWeatherPopover = () => {
  //已经获取过最新的逐日预报与生活指数后，不需要再获取
  if (ifGetMoreData) {
    return;
  }
  //逐日预报&生活指数 开始loading
  daysLoading.value = true;
  lifeLoading.value = true;
  const apiArray: [
    Promise<daysWeatherResultType>,
    Promise<lifeIndexResultType>
  ] = [
    getDaysWeatherAPI({
      ...baseApiParams,
      //起始时间
      start: 0,
      //天数
      days: 3
    }),
    getLifeIndexAPI({
      ...baseApiParams,
      //天数
      days: 3
    })
  ];
  Promise.all(apiArray).then(res => {
    //驻日预报
    const daily = res[0].results[0].daily;
    daily.forEach(item => {
      item.date = dayjs(item.date).format("DD/MM/YYYY");
    });
    daysWeather.value = daily;
    daysLoading.value = false;
    lifeIndex = res[1].results[0].suggestion;
    //生活指数
    lifeData.value = getLifeData(lifeIndex[0]);
    ifGetMoreData = true;
    lifeLoading.value = false;
  });
};
/**
 * 获取今天的日和对应的英文缩写
 */
function getToday(): { day: number; en: string } {
  const day = dayjs().date();
  const week = dayjs().day();
  const weekMap = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  return {
    day,
    en: weekMap[week]
  };
}
/**
 * 获取当前位置查询实时天气
 */
const getLocationToGetWeather = () => {
  //重新获取位置再次打开popover需要重新获取数据
  ifGetMoreData = false;
  //打开关闭的weather popover
  if (weatherPopoverRef.value) {
    unref(weatherPopoverRef).hide();
  }
  //开始loading
  weatherLoading.value = true;
  //获取经纬度查询天气(PC只能精确到城市中心经纬度)
  getIPAndCityAPI().then(res => {
    const location = res.data.lat + ":" + res.data.lng;
    //localStorage存储location
    storageLocal.setItem("location", location);
    baseApiParams.location = location;
    //获取到经纬度之后通过心知天气API获取实时天气
    getNowWeather();
  });
};
onMounted(() => {
  //localStorage有location
  if (baseApiParams.location) {
    //开始loading
    weatherLoading.value = true;
    getNowWeather();
  }
  //localStorage无location
  else {
    getLocationToGetWeather();
  }
});
</script>

<template>
  <div class="simple-weather" v-if="temperature">
    <!-- 获取天气loading -->
    <div class="weather-loading" v-if="weatherLoading">
      <wy-icon-font icon="icon-loading" svg class="loading-rotate" />
      获取天气中
    </div>
    <!-- 天气 -->
    <el-popover
      v-else
      ref="weatherPopoverRef"
      placement="bottom"
      trigger="click"
      popper-class="weather-popover"
      width="400"
      @show="showWeatherPopover"
    >
      <template #reference>
        <div class="now-weather">
          <img
            :src="
              VITE_PUBLIC_PATH + '/weather/' + weatherMap.get(weather) + '.png'
            "
            v-if="weather"
            class="now-weather-png"
          />
          <span class="now-temperature">
            <span>{{ temperature }}</span>
            <span style="margin-left: 10px">{{ weather }}</span></span
          >
        </div>
      </template>

      <template #default>
        <!-- 实时天气 -->
        <div class="weather-title">
          <div class="title-left">
            <icon-ep-brush-filled
              class="weather-title-icon"
            ></icon-ep-brush-filled>
            实时天气
          </div>
          <el-button
            class="weather-title-right-btn"
            @click="getLocationToGetWeather"
            >更新</el-button
          >
        </div>
        <el-row class="weather-content-now">
          <el-col :span="6"
            ><img
              :src="
                VITE_PUBLIC_PATH +
                '/weather/' +
                weatherMap.get(weather) +
                '.png'
              "
              v-if="weather"
              style="width: 60px"
          /></el-col>
          <el-col :span="8">
            <div class="today">
              <span class="today-day">{{ tody.day }}</span>
              <span class="today-en">{{ tody.en }}</span>
            </div>
          </el-col>
          <el-col :span="10">
            <el-row justify="center">
              <el-col :span="6"> 城市: </el-col>
              <el-col :span="6">
                {{ city }}
              </el-col>
            </el-row>
            <el-row justify="center">
              <el-col :span="6"> 天气: </el-col>
              <el-col :span="6">
                {{ weather }}
              </el-col>
            </el-row>
            <el-row justify="center">
              <el-col :span="6"> 温度: </el-col>
              <el-col :span="6">
                {{ temperature }}
              </el-col>
            </el-row>
          </el-col>
        </el-row>

        <!-- 逐日预报 -->
        <div class="weather-title">
          <div class="title-left">
            <icon-ep-guide class="weather-title-icon"></icon-ep-guide>
            逐日预报
          </div>
        </div>
        <div class="weather-content-days">
          <el-skeleton
            :rows="2"
            :loading="daysLoading"
            :throttle="500"
            style="height: 120px"
          >
            <el-row
              v-for="item in daysWeather"
              :key="item.date"
              class="day-weather"
            >
              <el-col :span="4">
                <img
                  :src="
                    VITE_PUBLIC_PATH +
                    '/weather/' +
                    weatherMap.get(item.text_day) +
                    '.png'
                  "
                  class="day-weather-png"
                />
              </el-col>
              <el-col :span="8">
                <span>{{ item.date }}</span>
              </el-col>
              <el-col :span="8">
                <span>{{ item.low }}°C ~ {{ item.high }}°C</span>
              </el-col>
              <el-col :span="4">
                <span>{{ item.text_day }}</span>
              </el-col>
            </el-row>
          </el-skeleton>
        </div>

        <!-- 生活指数 -->
        <div class="weather-title">
          <div class="title-left">
            <icon-ep-soccer class="weather-title-icon"></icon-ep-soccer>
            生活指数
          </div>
        </div>
        <div class="weather-content-life">
          <el-skeleton
            :rows="2"
            :loading="daysLoading"
            :throttle="500"
            style="height: 120px"
          >
            <el-row
              class="life-row"
              :gutter="10"
              v-for="(col, index) in lifeData"
              :key="index"
            >
              <el-col :span="12" v-for="life in col" :key="life.id">
                <div class="weather-life-item">
                  <wy-icon-font
                    :icon="life.icon"
                    svg
                    style="width: 35px; height: 35px"
                  />
                  <div class="life-message">
                    <div class="brief">{{ life.name }}：{{ life.brief }}</div>
                    <div class="details">{{ life.details }}</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-skeleton>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style lang="scss" scoped>
.simple-weather {
  .weather-loading {
    display: flex;
    align-items: center;
    .loading-rotate {
      width: 30px;
      height: 30px;
    }
    .wy-icon-svg {
      margin-right: 5px;
    }
  }
  .now-weather {
    cursor: pointer;
    .now-weather-png {
      vertical-align: middle;
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
    .now-temperature {
      color: $main-color;
    }
  }
}
</style>
