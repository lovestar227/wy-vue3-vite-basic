# [WyToolTip](http://localhost:8080/wy-vue3-vite-basic-docs/component/WyToolTip.html)

自动判断文本是否溢出显示 tooltip 组件

## WyToolTip Attributes

| 属性名            | 说明                                                           | 类型    | 默认值 |
| ----------------- | -------------------------------------------------------------- | ------- | ------ |
| text              | 文本内容 && tooltip 默认内容                                   | string  | ""     |
| multipleJudgments | true-判断多次文本是否溢出判断展示 tooltip<br> false-只判断一次 | boolean | false  |
| style             | 显示的文本样式                                                 | string  | ""     |

## WyToolTip Slots

| 插槽名  | 说明         | 作用域插槽 |
| ------- | ------------ | ---------- |
| default | 显示文本内容 |            |
| content | tooltip 内容 |            |

## 使用方式

- 显示文本内容与 tooltip 内容相同

  ```html
  <wy-toolTip :text="title" :style="sidebarTitleStyle"> </wy-toolTip>
  ```

- 使用插槽 slot 自定义显示文本内容 和 tootip 内容

  ```html
  <wy-toolTip>
    <template #content> {{ title }} </template>
    {{ title }}
  </wy-toolTip>
  ```
