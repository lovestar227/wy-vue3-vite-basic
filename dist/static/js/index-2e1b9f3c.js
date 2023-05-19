import { m as g } from "./index-bbfdc4c8.js";
import {
  a4 as p,
  a5 as x,
  a6 as w,
  a7 as C,
  a8 as _,
  a9 as k,
  aa as v,
  ab as L,
  ac as A,
  ad as W,
  ae as $,
  af as T,
  ag as F,
  ah as B,
  ai as O,
  aj as z,
  ak as D,
  al as P,
  f as m,
  x as b,
  am as M,
  A as h,
  an as V,
  Q as E,
  ao as G,
  o as f,
  B as y,
  O as a,
  ap as e,
  j as I,
  D as l,
  h as r
} from "./.pnpm-c4ae2d5d.js";
import { _ as Z } from "./index-649cc330.js";
const j = [
    "#2ec7c9",
    "#b6a2de",
    "#5ab1ef",
    "#ffb980",
    "#d87a80",
    "#8d98b3",
    "#e5cf0d",
    "#97b552",
    "#95706d",
    "#dc69aa",
    "#07a2a4",
    "#9a7fd1",
    "#588dd5",
    "#f5994e",
    "#c05050",
    "#59678c",
    "#c9ab00",
    "#7eb00a",
    "#6f5553",
    "#c14089"
  ],
  R = "rgba(0,0,0,0)",
  U = {},
  N = { textStyle: { color: "#008acd" }, subtextStyle: { color: "#aaaaaa" } },
  K = {
    itemStyle: { borderWidth: 1 },
    lineStyle: { width: 2 },
    symbolSize: 3,
    symbol: "emptyCircle",
    smooth: !0
  },
  Q = {
    itemStyle: { borderWidth: 1 },
    lineStyle: { width: 2 },
    symbolSize: 3,
    symbol: "emptyCircle",
    smooth: !0
  },
  q = { itemStyle: { barBorderWidth: 0, barBorderColor: "#ccc" } },
  H = { itemStyle: { borderWidth: 0, borderColor: "#ccc" } },
  J = { itemStyle: { borderWidth: 0, borderColor: "#ccc" } },
  X = { itemStyle: { borderWidth: 0, borderColor: "#ccc" } },
  Y = { itemStyle: { borderWidth: 0, borderColor: "#ccc" } },
  ee = { itemStyle: { borderWidth: 0, borderColor: "#ccc" } },
  oe = { itemStyle: { borderWidth: 0, borderColor: "#ccc" } },
  te = { itemStyle: { borderWidth: 0, borderColor: "#ccc" } },
  ae = {
    itemStyle: {
      color: "#d87a80",
      color0: "#2ec7c9",
      borderColor: "#d87a80",
      borderColor0: "#2ec7c9",
      borderWidth: 1
    }
  },
  le = {
    itemStyle: { borderWidth: 0, borderColor: "#ccc" },
    lineStyle: { width: 1, color: "#aaa" },
    symbolSize: 3,
    symbol: "emptyCircle",
    smooth: !0,
    color: [
      "#2ec7c9",
      "#b6a2de",
      "#5ab1ef",
      "#ffb980",
      "#d87a80",
      "#8d98b3",
      "#e5cf0d",
      "#97b552",
      "#95706d",
      "#dc69aa",
      "#07a2a4",
      "#9a7fd1",
      "#588dd5",
      "#f5994e",
      "#c05050",
      "#59678c",
      "#c9ab00",
      "#7eb00a",
      "#6f5553",
      "#c14089"
    ],
    label: { color: "#eee" }
  },
  re = {
    itemStyle: {
      areaColor: "#dddddd",
      borderColor: "#eeeeee",
      borderWidth: 0.5
    },
    label: { color: "#d87a80" },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(254,153,78,1)",
        borderColor: "#444",
        borderWidth: 1
      },
      label: { color: "rgb(100,0,0)" }
    }
  },
  se = {
    itemStyle: {
      areaColor: "#dddddd",
      borderColor: "#eeeeee",
      borderWidth: 0.5
    },
    label: { color: "#d87a80" },
    emphasis: {
      itemStyle: {
        areaColor: "rgba(254,153,78,1)",
        borderColor: "#444",
        borderWidth: 1
      },
      label: { color: "rgb(100,0,0)" }
    }
  },
  ie = {
    axisLine: { show: !0, lineStyle: { color: "#008acd" } },
    axisTick: { show: !0, lineStyle: { color: "#333" } },
    axisLabel: { show: !0, color: "#333" },
    splitLine: { show: !1, lineStyle: { color: ["#eee"] } },
    splitArea: {
      show: !1,
      areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] }
    }
  },
  ce = {
    axisLine: { show: !0, lineStyle: { color: "#008acd" } },
    axisTick: { show: !0, lineStyle: { color: "#333" } },
    axisLabel: { show: !0, color: "#333" },
    splitLine: { show: !0, lineStyle: { color: ["#eee"] } },
    splitArea: {
      show: !0,
      areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] }
    }
  },
  ne = {
    axisLine: { show: !0, lineStyle: { color: "#008acd" } },
    axisTick: { show: !0, lineStyle: { color: "#333" } },
    axisLabel: { show: !0, color: "#333" },
    splitLine: { show: !0, lineStyle: { color: ["#eee"] } },
    splitArea: {
      show: !0,
      areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] }
    }
  },
  de = {
    axisLine: { show: !0, lineStyle: { color: "#008acd" } },
    axisTick: { show: !0, lineStyle: { color: "#333" } },
    axisLabel: { show: !0, color: "#333" },
    splitLine: { show: !0, lineStyle: { color: ["#eee"] } },
    splitArea: {
      show: !1,
      areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] }
    }
  },
  be = {
    iconStyle: { borderColor: "#2ec7c9" },
    emphasis: { iconStyle: { borderColor: "#18a4a6" } }
  },
  he = { textStyle: { color: "#333333" } },
  pe = {
    axisPointer: {
      lineStyle: { color: "#008acd", width: "1" },
      crossStyle: { color: "#008acd", width: "1" }
    }
  },
  me = {
    lineStyle: { color: "#008acd", width: 1 },
    itemStyle: { color: "#008acd", borderWidth: 1 },
    controlStyle: {
      color: "#008acd",
      borderColor: "#008acd",
      borderWidth: 0.5
    },
    checkpointStyle: { color: "#2ec7c9", borderColor: "#2ec7c9" },
    label: { color: "#008acd" },
    emphasis: {
      itemStyle: { color: "#a9334c" },
      controlStyle: {
        color: "#008acd",
        borderColor: "#008acd",
        borderWidth: 0.5
      },
      label: { color: "#008acd" }
    }
  },
  fe = { color: ["#5ab1ef", "#e0ffff"] },
  ye = {
    backgroundColor: "rgba(47,69,84,0)",
    dataBackgroundColor: "#efefff",
    fillerColor: "rgba(182,162,222,0.2)",
    handleColor: "#008acd",
    handleSize: "100%",
    textStyle: { color: "#333333" }
  },
  ue = { label: { color: "#eee" }, emphasis: { label: { color: "#eee" } } },
  Se = {
    color: j,
    backgroundColor: R,
    textStyle: U,
    title: N,
    line: K,
    radar: Q,
    bar: q,
    pie: H,
    scatter: J,
    boxplot: X,
    parallel: Y,
    sankey: ee,
    funnel: oe,
    gauge: te,
    candlestick: ae,
    graph: le,
    map: re,
    geo: se,
    categoryAxis: ie,
    valueAxis: ce,
    logAxis: ne,
    timeAxis: de,
    toolbox: be,
    legend: he,
    tooltip: pe,
    timeline: me,
    visualMap: fe,
    dataZoom: ye,
    markPoint: ue
  },
  { registerTheme: ge } = p;
x([w, C, _, k, v, L, A, W, $, T, F, B, O, z, D, P]);
ge("ovilia-green", Se);
const xe = ["id"],
  s = m({
    name: "WyEcharts",
    __name: "index",
    props: { options: { default: null } },
    setup(o) {
      const i = o,
        c = b(`echarts-eid-${parseInt((Math.random() * 1e3).toString())}`),
        n = b(null),
        t = M(null);
      h(
        () => i.options,
        d => {
          t.value.setOption(d);
        },
        { deep: !0 }
      );
      const S = V(g);
      return (
        h(
          () => S,
          () => {
            t.value.resize();
          },
          { deep: !0 }
        ),
        E(() => {
          (t.value = p.init(n.value)), t.value.setOption(i.options, !0);
        }),
        G(() => {
          t.value.dispose();
        }),
        (d, Pe) => (
          f(),
          y(
            "div",
            { class: "wy-echarts", ref_key: "echartsDom", ref: n, id: a(c) },
            null,
            8,
            xe
          )
        )
      );
    }
  }),
  we = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    title: { text: "Gradient Stacked Area Chart" },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross", label: { backgroundColor: "#6a7985" } }
    },
    legend: { data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"] },
    toolbox: { feature: { saveAsImage: {} } },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: !0 },
    xAxis: [
      {
        type: "category",
        boundaryGap: !1,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      }
    ],
    yAxis: [{ type: "value" }],
    series: [
      {
        name: "Line 1",
        type: "line",
        stack: "Total",
        smooth: !0,
        lineStyle: { width: 0 },
        showSymbol: !1,
        areaStyle: {
          opacity: 0.8,
          color: new e(0, 0, 0, 1, [
            { offset: 0, color: "rgb(128, 255, 165)" },
            { offset: 1, color: "rgb(1, 191, 236)" }
          ])
        },
        emphasis: { focus: "series" },
        data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: "Line 2",
        type: "line",
        stack: "Total",
        smooth: !0,
        lineStyle: { width: 0 },
        showSymbol: !1,
        areaStyle: {
          opacity: 0.8,
          color: new e(0, 0, 0, 1, [
            { offset: 0, color: "rgb(0, 221, 255)" },
            { offset: 1, color: "rgb(77, 119, 255)" }
          ])
        },
        emphasis: { focus: "series" },
        data: [120, 282, 111, 234, 220, 340, 310]
      },
      {
        name: "Line 3",
        type: "line",
        stack: "Total",
        smooth: !0,
        lineStyle: { width: 0 },
        showSymbol: !1,
        areaStyle: {
          opacity: 0.8,
          color: new e(0, 0, 0, 1, [
            { offset: 0, color: "rgb(55, 162, 255)" },
            { offset: 1, color: "rgb(116, 21, 219)" }
          ])
        },
        emphasis: { focus: "series" },
        data: [320, 132, 201, 334, 190, 130, 220]
      },
      {
        name: "Line 4",
        type: "line",
        stack: "Total",
        smooth: !0,
        lineStyle: { width: 0 },
        showSymbol: !1,
        areaStyle: {
          opacity: 0.8,
          color: new e(0, 0, 0, 1, [
            { offset: 0, color: "rgb(255, 0, 135)" },
            { offset: 1, color: "rgb(135, 0, 157)" }
          ])
        },
        emphasis: { focus: "series" },
        data: [220, 402, 231, 134, 190, 230, 120]
      },
      {
        name: "Line 5",
        type: "line",
        stack: "Total",
        smooth: !0,
        lineStyle: { width: 0 },
        showSymbol: !1,
        label: { show: !0, position: "top" },
        areaStyle: {
          opacity: 0.8,
          color: new e(0, 0, 0, 1, [
            { offset: 0, color: "rgb(255, 191, 0)" },
            { offset: 1, color: "rgb(224, 62, 76)" }
          ])
        },
        emphasis: { focus: "series" },
        data: [220, 302, 181, 234, 210, 290, 150]
      }
    ]
  },
  Ce = we,
  _e = [
    "点",
    "击",
    "柱",
    "子",
    "或",
    "者",
    "两",
    "指",
    "在",
    "触",
    "屏",
    "上",
    "滑",
    "动",
    "能",
    "够",
    "自",
    "动",
    "缩",
    "放"
  ],
  u = [
    220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133,
    334, 198, 123, 125, 220
  ];
for (let o = 0; o < u.length; o++);
const ke = {
    title: {
      text: "特性示例：渐变色 阴影 缩放",
      subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
    },
    xAxis: {
      data: _e,
      axisLabel: { inside: !0, color: "#fff" },
      axisTick: { show: !1 },
      axisLine: { show: !1 },
      z: 10
    },
    yAxis: {
      axisLine: { show: !1 },
      axisTick: { show: !1 },
      axisLabel: { color: "#999" }
    },
    dataZoom: [{ type: "inside" }],
    series: [
      {
        type: "bar",
        showBackground: !0,
        itemStyle: {
          color: new e(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new e(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" }
            ])
          }
        },
        data: u
      }
    ]
  },
  ve = ke,
  Le = I({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: { type: "value" },
    series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: "bar" }]
  }),
  Ae = Le,
  We = {
    tooltip: { trigger: "item" },
    legend: { top: "5%", left: "center" },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: !1,
        label: { show: !1, position: "center" },
        emphasis: { label: { show: !0, fontSize: 40, fontWeight: "bold" } },
        labelLine: { show: !1 },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" }
        ]
      }
    ]
  },
  $e = We,
  Te = { class: "charts-page" },
  Fe = { class: "chart-item" },
  Be = { class: "chart-item" },
  Oe = { class: "chart-item" },
  ze = { class: "chart-item" },
  De = m({
    name: "ChartsPage",
    __name: "index",
    setup(o) {
      return (i, c) => (
        f(),
        y("div", Te, [
          l("div", Fe, [r(s, { options: a(Ae) }, null, 8, ["options"])]),
          l("div", Be, [r(s, { options: a(ve) }, null, 8, ["options"])]),
          l("div", Oe, [r(s, { options: a(Ce) }, null, 8, ["options"])]),
          l("div", ze, [r(s, { options: a($e) }, null, 8, ["options"])])
        ])
      );
    }
  });
const Ge = Z(De, [["__scopeId", "data-v-c28b1dd2"]]);
export { Ge as default };
