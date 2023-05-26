<script setup lang="ts">
defineOptions({
  name: "404"
});
</script>

<template>
  <div class="page-404" v-motion-fade>
    <div>
      <wy-icon-font
        icon="icon-food-cake"
        svg
        class="icon-food-cake"
      ></wy-icon-font>
    </div>
    <div class="middle-box">
      <span class="icon-404">{{ $t("page.404.pageLoss") }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-404 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .icon-food-cake {
    width: 300px;
    height: 300px;
  }

  .middle-box {
    .icon-404 {
      font-size: 100px;
      font-weight: 700;
      color: #9e5126;
    }
  }
}
</style>
