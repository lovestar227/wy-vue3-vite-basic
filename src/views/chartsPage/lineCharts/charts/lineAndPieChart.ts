import { ECOption } from "/@/plugins/WyEcharts/index";

const lineAndPieOption: ECOption = {
  legend: {},
  tooltip: {
    trigger: "axis",
    showContent: true
  },
  dataset: {
    source: []
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
  //饼图标题
  graphic: {
    elements: [
      {
        type: "text",
        top: "10%",
        left: "18%",
        style: {
          text: "2012年",
          font: '16px "STHeiti", sans-serif'
        }
      }
    ]
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
      name: "2012",
      //饼图半径百分比
      radius: "50%",
      //饼图中心点位置
      center: ["20%", "50%"],
      //更新数据时的动画持续时间
      animationDurationUpdate: 200,
      tooltip: {
        trigger: "item"
      },
      emphasis: {
        focus: "self"
      },
      label: {
        //文字换行
        overflow: "break",
        /** label 格式化
         * @see 字符串模板变量 {@link {https://echarts.apache.org/zh/option.html#series-pie.colorBy:~:text=%E7%8E%AF%E5%9B%BE%E7%A4%BA%E4%BE%8B-,series%2Dpie.label.,formatter,-string}}
         */
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

export default lineAndPieOption;
