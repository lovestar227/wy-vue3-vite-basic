/**
 * @description Echarts 5.X
 * @see API手册 {@link https://echarts.apache.org/zh/api.html#echarts}
 * @see 配置项手册 {@link https://echarts.apache.org/zh/option.html#title}
 * @see 术语速查手册 {@link https://echarts.apache.org/zh/cheat-sheet.html}
 */

import {
  //柱状图
  BarChart,
  //柱状图 option类型
  BarSeriesOption,
  // //箱线图
  // BoxplotChart,
  // //箱线图 option类型
  // BoxplotSeriesOption,
  // //K线图
  // CandlestickChart,
  // //K线图 option类型
  // CandlestickSeriesOption,
  // //自定义系列
  // CustomChart,
  // //自定义系列 option类型
  // CustomSeriesOption,
  // //涟漪散点图
  // EffectScatterChart,
  // //涟漪散点图 option类型
  // EffectScatterSeriesOption,
  // //漏斗图
  // FunnelChart,
  // //漏斗图 option类型
  // FunnelSeriesOption,
  //仪表盘
  GaugeChart,
  //仪表盘 option类型
  GaugeSeriesOption,
  // //关系图
  // GraphChart,
  // //关系图 option类型
  // GraphSeriesOption,
  // //热力图
  // HeatmapChart,
  // //热力图 option类型
  // HeatmapSeriesOption,
  //折线图
  LineChart,
  //折线图 option类型
  LineSeriesOption,
  // //线图
  // LinesChart,
  // //线图 option类型
  // LinesSeriesOption,
  // //地图
  // MapChart,
  // //地图 option类型
  // MapSeriesOption,
  // //平行坐标
  // ParallelChart,
  // //平行坐标 option类型
  // ParallelSeriesOption,
  // //象形柱图
  // PictorialBarChart,
  // //象形柱图 option类型
  // PictorialBarSeriesOption,
  //饼图
  PieChart,
  //饼图 option类型
  PieSeriesOption
  // //雷达图
  // RadarChart,
  // //雷达图 option类型
  // RadarSeriesOption,
  // //桑基图
  // SankeyChart,
  // //桑基图 option类型
  // SankeySeriesOption,
  // //散点图
  // ScatterChart,
  // //散点图 option类型
  // ScatterSeriesOption,
  // //旭日图
  // SunburstChart,
  // //旭日图 option类型
  // SunburstSeriesOption,
  // //主题河流图
  // ThemeRiverChart,
  // //主题河流图 option类型
  // ThemeRiverSeriesOption,
  // //树图
  // TreeChart,
  // //树图 option 类型
  // TreeSeriesOption,
  // //矩形树图
  // TreemapChart,
  // //矩形树图 option 类型
  // TreemapSeriesOption
} from "echarts/charts";
import {
  // //支持无障碍模式组件（生成智能描述）
  // AriaComponent,
  // //支持无障碍模式组件（生成智能描述） option 类型
  // AriaComponentOption,
  // //坐标轴指示器组件
  // AxisPointerComponent,
  // //坐标轴指示器组件 option 类型
  // AxisPointerComponentOption,
  // //刷选组件：是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果。
  // BrushComponent,
  // //刷选组件 option 类型
  // BrushComponentOption,
  // //日历组件
  // CalendarComponent,
  // //日历组件 option 类型
  // CalendarComponentOption,
  //数据集组件：用来管理数据，数据集中的数据可以被多个组件复用，也方便进行 “数据和其他配置” 分离的配置风格
  DatasetComponent,
  //数据集组件 option 类型
  DatasetComponentOption,
  // //数据区域缩放
  DataZoomComponent,
  // //数据区域缩放组件 option 类型
  DataZoomComponentOption,
  // //内置型数据区域缩放组件：内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系。
  // DataZoomInsideComponent,
  // //滑动条型数据区域缩放组件：有单独的滑动条，用户在滑动条上进行缩放或漫游。
  // DataZoomSliderComponent,
  // //地理坐标系组件
  // GeoComponent,
  // //地理坐标系组件 option 类型
  // GeoComponentOption,
  // //自定义图形组件
  // GraphicComponent,
  // //自定义图形组件 option 类型
  // GraphicComponentOption,
  // //直角坐标系组件
  GridComponent,
  // //直角坐标系组件 option 类型
  GridComponentOption,
  // //简易直角坐标系组件
  // GridSimpleComponent,
  //图例组件
  LegendComponent,
  //图例组件 option 类型
  LegendComponentOption,
  //普通图例组件
  LegendPlainComponent,
  // //可滚动翻页的图例组件 支持type:scroll
  // LegendScrollComponent,
  // //标域组件
  // MarkAreaComponent,
  // //标域组件 option 类型
  // MarkAreaComponentOption,
  // //标线组件
  // MarkLineComponent,
  // //标线组件 option 类型
  // MarkLineComponentOption,
  // //标注/标点组件
  // MarkPointComponent,
  // //标注/标点组件 option 类型
  // MarkPointComponentOption,
  // //平行坐标组件
  // ParallelComponent,
  // //平行坐标组件 option 类型
  // ParallelComponentOption,
  // //极坐标系组件
  // PolarComponent,
  // //极坐标系组件 option 类型
  // PolarComponentOption,
  // //雷达组件
  // RadarComponent,
  // //雷达组件 option 类型
  // RadarComponentOption,
  // //单轴组件
  // SingleAxisComponent,
  // //单轴组件 option 类型
  // SingleAxisComponentOption,
  // //时间轴组件
  // TimelineComponent,
  // //时间轴组件 option 类型
  // TimelineComponentOption,
  //标题组件
  TitleComponent,
  //标题组件 option 类型
  TitleComponentOption,
  //工具栏组件
  ToolboxComponent,
  //工具栏组件 option
  ToolboxComponentOption,
  //提示框组件
  TooltipComponent,
  //提示框组件 option 类型
  TooltipComponentOption,
  //内置数据转换器组件
  TransformComponent
  // //视觉映射组件：用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）
  // VisualMapComponent,
  // //视觉映射组件 option 类型
  // VisualMapComponentOption
} from "echarts/components";
import * as echarts from "echarts/core";
import {
  //标签的统一布局配置。
  LabelLayout,
  //全局过渡动画相关的配置。
  UniversalTransition
} from "echarts/features";
import {
  //SVG 渲染器
  SVGRenderer
  //canvas 渲染器 复杂图表用canvas渲染性能更高
  // CanvasRenderer
} from "echarts/renderers";
import type { App } from "vue";

const { registerTheme } = echarts;

/**
 * @description 按需引入echarts
 * @see {@link https://echarts.apache.org/handbook/zh/basics/import#:~:text=%7D)%3B-,%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5%20ECharts%20%E5%9B%BE%E8%A1%A8%E5%92%8C%E7%BB%84%E4%BB%B6,-%E4%B8%8A%E9%9D%A2%E7%9A%84%E4%BB%A3%E7%A0%81}
 */

echarts.use([
  //图表
  BarChart,
  LineChart,
  GaugeChart,
  PieChart,
  //组件
  DatasetComponent,
  TitleComponent,
  LegendComponent,
  LegendPlainComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  GridComponent,
  DataZoomComponent,
  //svg 渲染器
  SVGRenderer,
  //标签的统一布局配置。
  LabelLayout,
  //全局过渡动画相关的配置。
  UniversalTransition
]);

/**
 * @description 自定义主题
 * @see {@link https://echarts.apache.org/zh/download-theme.html}
 */
import chalkTheme from "./theme/chalk.json";
registerTheme("ovilia-green", chalkTheme);

/**
 * 在main.js中引入，app.use进行全局引入
 * @param app App实例
 */
// export function useEcharts(app: App) {
//   app.config.globalProperties.$echarts = echarts;
// }

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  // 图标
  | BarSeriesOption
  | GaugeSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  //组件
  | TitleComponentOption
  | TooltipComponentOption
  | DatasetComponentOption
  | LegendComponentOption
  | ToolboxComponentOption
  | GridComponentOption
  | DataZoomComponentOption
>;

export default echarts;
