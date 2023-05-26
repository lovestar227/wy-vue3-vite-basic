<script setup lang="ts">
import strawberry from "/@/assets/svg/strawberry.svg?component";
defineOptions({
  name: "IconsPage"
});
</script>

<template>
  <div class="iconsPage">
    <h1>1.自定义SVG图标</h1>
    <el-card header="通过vite-svg-loader使用" class="hooks-card">
      <strawberry></strawberry>
    </el-card>

    <el-card
      header="通过unplugin-icons和unplugin-vue-components自动引入使用"
      class="hooks-card"
    >
      <icon-my-yolk-pastry></icon-my-yolk-pastry>
    </el-card>

    <h1>2.iconfont图标使用</h1>
    <el-card class="hooks-card">
      <template #header>
        通过WyIconFont组件使用
        <span style="color: #aace5d">Symbol引用</span>
      </template>
      <wy-icon-font icon="icon-food-macaron" svg></wy-icon-font>
    </el-card>

    <el-card class="hooks-card">
      <template #header>
        通过WyIconFont组件使用
        <span style="color: #aace5d">font-class引用</span>
      </template>
      <wy-icon-font icon="icon-quxiaoquanping" svg></wy-icon-font>
    </el-card>

    <h1>3.iconify图标使用</h1>

    <el-card class="hooks-card">
      <template #header>
        通过iconify和unplugin-icons和unplugin-vue-自动引入使用
      </template>
      <icon-ep-cold-drink
        style="font-size: 100px; color: skyblue"
      ></icon-ep-cold-drink>
    </el-card>

    <el-card class="hooks-card">
      <template #header>
        通过@iconify/vue使用<span style="color: #f9724c"
          >(离线图标需要在WyIconify中添加图标)</span
        >
      </template>
      <wy-iconify
        icon="ep:grape"
        style="font-size: 100px; color: purple"
      ></wy-iconify>
    </el-card>
  </div>
</template>

<style lang="scss" scoped></style>
