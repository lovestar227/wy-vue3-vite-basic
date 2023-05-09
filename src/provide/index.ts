/**
 *  定义项目中用到的 provide
 *  为provide/inject标注类型
 */

/**
 * @description MainView组件大小
 */
export const mainViewResizeDataProvideKey = Symbol() as InjectionKey<
  Ref<resizeDataType>
>;
