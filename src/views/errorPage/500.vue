<script setup lang="ts">
defineOptions({
  name: "500"
});
</script>

<template>
  <div class="page-500" v-motion-fade>
    <div>
      <WyIconFont
        icon="icon-food-doughnut"
        svg
        class="icon-food-cake"
      ></WyIconFont>
    </div>
    <div class="middle-box">
      <span class="icon-500">{{ $t("page.500.pageError") }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-500 {
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
    .icon-500 {
      font-size: 100px;
      font-weight: 700;
      color: #9e5126;
    }
  }
}
</style>
