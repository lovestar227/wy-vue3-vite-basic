<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";

defineOptions({
  name: "ScreenFull"
});

const {
  isFullscreen, //ture-全屏
  toggle // 全屏/退出全屏方法
} = useFullscreen();
</script>

<template>
  <div class="screen-full-box">
    <WyIconFont
      :title="
        isFullscreen ? $t('buttons.exitFullScreen') : $t('buttons.fullScreen')
      "
      :icon="isFullscreen ? 'icon-quxiaoquanping' : 'icon-quanping'"
      @click="toggle"
    />
  </div>
</template>
<style lang="scss" scoped>
.screen-full-box {
  padding: 0 12px;
  line-height: 50px;
  width: 40px;
  height: 50px;

  :deep(.wy-icon) {
    cursor: pointer;
    &:hover {
      color: $main-color;
    }
  }
}
</style>
