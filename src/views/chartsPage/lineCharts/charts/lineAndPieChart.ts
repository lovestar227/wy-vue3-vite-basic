import { ECOption } from "/@/plugins/WyEcharts/index";

const lineAndPieChart: ECOption = {
  legend: {},
  tooltip: {
    trigger: "axis",
    showContent: true
  },
  dataset: {
    source: [
      ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
      ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
      ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
      ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
      ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1]
    ]
  },
  xAxis: {
    //类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
    type: "category"
  },
  yAxis: {
    //y 轴所在的 grid 的索引，默认位于第一个 grid。
    gridIndex: 0
  },
  //坐标系位置
  grid: {
    left: "60%"
  },
  series: [
    //折线图
    {
      type: "line",
      smooth: true,
      //dataset 的行对应于系列，从而 dataset 中每一行是一个维度（dimension）。
      seriesLayoutBy: "row",
      //折线图高亮状态
      emphasis: {
        //聚焦当前高亮的数据所在的系列的所有图形。淡出其他数据的图形
        focus: "series"
      }
    },
    //折线图
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" }
    },
    //折线图
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" }
    },
    //折线图
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" }
    },
    //饼图
    {
      type: "pie",
      id: "pie",
      //饼图半径百分比
      radius: "50%",
      //饼图中心点位置
      center: ["20%", "50%"],
      emphasis: {
        focus: "self"
      },
      label: {
        formatter: "{b}: {@2012} ({d}%)"
      },
      encode: {
        itemName: "product",
        value: "2012",
        tooltip: "2012"
      }
    }
  ]
};

export default lineAndPieChart;
