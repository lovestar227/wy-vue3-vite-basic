<h1 align="center">wy-vue3-vite-basic</h1>

[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)
<a href='https://gitee.com/little-star227/wy-vue3-vite-basic/stargazers'><img src='https://gitee.com/little-star227/wy-vue3-vite-basic/badge/star.svg?theme=dark' alt='star'></img></a>
<a href='https://gitee.com/little-star227/wy-vue3-vite-basic/members'><img src='https://gitee.com/little-star227/wy-vue3-vite-basic/badge/fork.svg?theme=dark' alt='fork'></img></a>

[wy-vue3-vite-basic-docs](https://gitee.com/little-star227/wy-vue3-vite-basic-docs)

[wy-vue3-vite-basic-docs 静态文档网站](https://little-star227.gitee.io/wy-vue3-vite-basic-docs)

# 介绍

采用 Vue3+Vite4+Vue-router+Pinia+Sass+Element Plus 搭建的后台管理系统基础工程。

国际化：vue-i18n。

图标：iconify、iconfont、自定义图标。

其他技术：Axios、Unocss、Eacharts 等。

项目目的：

- 快速搭建基础的后台管理系统工程。

- 封装主流技术的使用。

- 开发使用场景较多的通用组件。

- 学习更多技术。

# 目录

- [环境](#环境)

- [快速上手](#快速上手)

- [国际化](#国际化)

- [图标](#图标)

- [随心所欲的配置主题色](https://little-star227.gitee.io/wy-vue3-vite-basic/#/theme)

- [一键即用的明暗模式](https://little-star227.gitee.io/wy-vue3-vite-basic-docs/component/WyDarkToogle.html)

- [通用组件](https://little-star227.gitee.io/wy-vue3-vite-basic-docs/component/WySwitch.html)

- [开发计划](#开发计划)

- [欢迎](#欢迎)

# 预览

首页

<img src="https://gitee.com/little-star227/wy-data-warehouse/raw/master/wy-vue3-vite-basic1.png"/>

实时天气

<img src="https://thumbnail0.baidupcs.com/thumbnail/407ed30eco0959001f5816fa08897225?fid=936677304-250528-127965096981791&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-d9sco%2f8h6YqgJIVLVf4N20%2faTko%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8894489674394571357&dp-callid=0&time=1684159200&size=c1999_u1999&quality=100&vuk=936677304&ft=image"/>

主题

<img src="https://thumbnail0.baidupcs.com/thumbnail/ca97a6258k39c44221c96ac28179f2af?fid=936677304-250528-1015308519690737&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-TUZmJsT%2bbLc7vdKqn0WlREtQXaA%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8894489674394571357&dp-callid=0&time=1684159200&size=c1999_u1999&quality=100&vuk=936677304&ft=image"/>

图标

<img src="https://thumbnail0.baidupcs.com/thumbnail/fd4c61564n8cae17f891525e56e5e7cf?fid=936677304-250528-803509229020670&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-r6eRmqsoAHXWOOJXQQA60t8Yq8U%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8894489674394571357&dp-callid=0&time=1684159200&size=c1999_u1999&quality=100&vuk=936677304&ft=image" />

通用组件

<img src="https://thumbnail0.baidupcs.com/thumbnail/acd76f0e7g239145d124ec284f93327d?fid=936677304-250528-364678419460333&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-oxHkpE4zrQ%2buiXWiSBTEZbFdoUA%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8894489674394571357&dp-callid=0&time=1684159200&size=c1999_u1999&quality=100&vuk=936677304&ft=image" />

# 环境

- node 16.X
- pnpm

# 快速上手

### 安装依赖

pnpm install

### 项目启动

pnpm dev

### 生产环境打包

pnpm build

### 生产环境预览

build:preview

# 国际化

## 语言文件

- 中文配置文件 zh-CN.yaml

- 英文配置文件 en.yaml

## 国际化的使用

```ts
/* 1.非setup中可使用 */
import { transformI18n } from "/@/plugins/i18n";
```

```ts
/* setup 可用 */
/* 方式1 */
import { transformI18n } from "/@/plugins/i18n";

/* 建议用方式2 */
import { useTranslate } from "/@/hooks/useTranslate";
const { t } = useTranslate();
```

```ts
/* 1.template 模板里使用，直接用$t */
比如: $t("menu.homePage");
```

## 国际化智能提示

```ts
/* 方式1 */
import { useTranslate } from "/@/hooks/useTranslate";
const { t } = useTranslate();

/* 方式2 单纯智能提示，应用于字符串 */

import { $$t } from "/@/plugins/i18n";
/* 方式3 模板里直接使用，比如:*/
$t("menu.homePage");
```

# 图标

- ## 自定义图标

- ### 模板中自动引入

  svg 图标放在 src/assets/svg 目录下，小写英文命名文件名。

  ```vue
  <!-- <icon-my-图标文件名 /> -->
  <icon-my-sunny></icon-my-sunny>
  ```

- ## iconfont 图标使用

  使用 WyIconFont 全局组件

- ## iconify 图标

- ### iconify 图标查询

  - [iconify.design](https://icon-sets.iconify.design/)
  - [icones](https://icones.js.org/)

- ### 模板中自动引入

  安装对应的@iconify-icons 图标集，比如 Element Plus 对应的图标集为@iconify-icons/ep

  ```vue
  <!-- <icon-图表集名-图标代码 /> -->
  <icon-ep-search></icon-ep-search>
  ```

- ### 通过 WyIconify 全局组件使用

  - 在线 iconify 图标使用，直接通过 icon 传入图标代码

  - 离线图标使用
    1. 安装对应的离线图标集@iconify-json，比如 Element Plus 对应的 离线图标集为@iconify-json/ep。
    2. 在 WyIconify 注册对应的图标

# 开发计划

1. 完善项目

2. 继续集成主流技术

# 欢迎

<h1 align="center">欢迎提Issues</h1>
