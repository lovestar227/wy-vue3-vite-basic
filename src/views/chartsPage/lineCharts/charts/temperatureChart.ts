import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import { cloneDeep } from "lodash-unified";

import { useNumber } from "/@/hooks/useNumber";
import { ECOption } from "/@/plugins/WyEcharts/index";

dayjs.extend(isLeapYear);

/**
 * 获取N天温度图表 echart option
 * @param tian 天数
 * @param percent 稍高温/低温百分比
 */
export function getTemperatureChart(tian = 30, percent = 0.2): ECOption {
  //模拟多少天的数据

  const data30H = [];
  const data30L = [];
  let maxHT = -100;
  let minHT = 100;
  let maxLT = -100;
  let minLT = 100;
  let temperature = parseInt(useNumber().random(0, 30).toFixed(0));
  const isLeap = dayjs("2000-01-01").isLeapYear() ? 1 : 0;
  const date = dayjs().format("YYYY/MM/DD").split("/");
  let m = parseInt(date[1]);
  let d = parseInt(date[2]);
  const months = [
    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  ];

  //计算30天随机气温
  for (let i = 0; i < tian; i++) {
    const n2 = Math.random();
    const du2 = cdu(n2);
    const lowTemperature =
      Math.random() < 0.5 ? temperature - 10 - du2 : temperature - 10 + du2;
    minLT = Math.min(minLT, lowTemperature);
    maxLT = Math.max(maxLT, lowTemperature);
    data30H.push([`${m}/${d}`, temperature]);
    data30L.push([`${m}/${d}`, lowTemperature]);
    if (d == months[isLeap][m - 1]) {
      m++;
      d = 1;
    } else {
      d++;
    }

    const n1 = Math.random();
    const du1 = cdu(n1);

    const high = temperature + du1;
    const low = temperature - du2;
    if (high > 30) {
      temperature = low;
      maxHT = Math.max(maxHT, temperature);
      minHT = Math.min(minHT, temperature);
      continue;
    }
    if (low < 0) {
      temperature = high;
      maxHT = Math.max(maxHT, temperature);
      minHT = Math.min(minHT, temperature);
      continue;
    }
    const q = (high + low) / 2 - 15;
    const n3 = Math.random();
    if (q > 0) {
      temperature = n3 < 0.4 ? high : low;
    } else {
      temperature = n3 < 0.4 ? low : high;
    }
    maxHT = Math.max(maxHT, temperature);
    minHT = Math.min(minHT, temperature);
  }

  function cdu(n) {
    if (n < 0.1) {
      return 5;
    } else if (n < 0.2) {
      return 4;
    } else if (n < 0.4) {
      return 3;
    } else if (n < 0.7) {
      return 2;
    } else {
      return 1;
    }
  }

  const minLT2 = minLT + (maxLT - minLT) * percent;
  const maxHT2 = maxHT - (maxHT - minHT) * percent;

  const high = {
    gte: null,
    lte: null,
    color: "rgba(180, 0, 0, 0.4)"
  };
  const low = {
    gte: null,
    lte: null,
    color: "rgba(0, 0, 180, 0.4)"
  };
  const highPieces = [];
  const lowPieces = [];
  //计算高温与低温区间
  for (let i = 0; i < tian; i++) {
    if (data30H[i][1] >= maxHT2 && data30H[i][1] <= maxHT) {
      if (high.gte === null) {
        high.gte = i;
      } else if (high.lte === null) {
        high.lte = i;
      }
    } else {
      if (high.lte !== null) {
        highPieces.push(cloneDeep(high));
        high.gte = null;
        high.lte = null;
      } else if (high.gte !== null) {
        high.lte = high.gte;
        highPieces.push(cloneDeep(high));
        high.gte = null;
        high.lte = null;
      }
    }
    if (data30L[i][1] >= minLT && data30L[i][1] <= minLT2) {
      if (low.gte === null) {
        low.gte = i;
      } else if (low.lte === null) {
        low.lte = i;
      }
    } else {
      if (low.lte !== null) {
        lowPieces.push(cloneDeep(low));
        low.gte = null;
        low.lte = null;
      } else if (low.gte !== null) {
        low.lte = low.gte;
        lowPieces.push(cloneDeep(low));
        low.gte = null;
        low.lte = null;
      }
    }
  }

  if (high.gte !== null) {
    high.lte = tian - 1;
    highPieces.push(cloneDeep(high));
  }
  if (low.gte !== null) {
    low.lte = tian - 1;
    lowPieces.push(cloneDeep(low));
  }

  return {
    xAxis: {
      type: "category",
      boundaryGap: false
    },
    yAxis: {
      type: "value",
      boundaryGap: ["10%", "10%"],
      axisLabel: {
        formatter: "{value}°C"
      },
      axisPointer: {
        snap: true
      }
    },
    visualMap: [
      {
        type: "piecewise",
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: highPieces
      },
      {
        type: "piecewise",
        show: false,
        dimension: 0,
        seriesIndex: 1,
        pieces: lowPieces
      }
    ],
    series: [
      {
        type: "line",
        smooth: 0,
        symbol: "triangle",
        symbolSize: 10,
        lineStyle: {
          color: "#000"
        },
        markLine: {
          symbol: ["none", "none"],
          label: {
            formatter: "温度稍高线：{c}°C"
          },
          lineStyle: {
            color: "rgb(180,0,0)"
          },
          data: [{ yAxis: maxHT2 }]
        },
        areaStyle: {
          origin: "start"
        },
        data: data30H
      },
      {
        type: "line",
        smooth: 0,
        symbol: "triangle",
        symbolSize: 10,
        lineStyle: {
          color: "#000"
        },
        markLine: {
          symbol: ["none", "none"],
          label: {
            formatter: "温度稍低线：{c}°C"
          },
          lineStyle: {
            color: "rgb(0,0,180)"
          },
          data: [{ yAxis: minLT2 }]
        },
        areaStyle: {
          origin: "start"
        },
        data: data30L
      }
    ]
  };
}
