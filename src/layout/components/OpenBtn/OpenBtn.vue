<script setup lang="ts">
defineOptions({
  name: "OpenBtn"
});

interface Props {
  collapse: boolean; //isCollapse：侧边栏是否折叠 true-折叠 false-展开
}

const props = defineProps<Props>();

const emit = defineEmits<{
  toggleClick: [];
}>();
/**
 * 点击切换侧边栏状态按钮
 */
const toggleClick = () => {
  emit("toggleClick");
};
</script>

<template>
  <div :class="['open-btn-box', collapse ? 'open-btn-collapse' : '']">
    <el-tooltip
      placement="right"
      :effect="'dark'"
      :content="!props.collapse ? '点击折叠' : '点击展开'"
    >
      <!-- 图标 -->
      <wy-iconify
        :icon="props.collapse ? 'ep:expand' : 'ep:fold'"
        class="collapse-icon"
        @click="toggleClick"
      />
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.open-btn-box {
  width: 100%;
  height: 40px;
  line-height: 40px;
  // box-shadow: 0 0 6px -2px var(--el-color-primary);
  border-top: 1px solid #ddd;
}

.collapse-icon {
  display: inline-block;
  margin-left: 15px;
  width: 26px;
  height: 26px;
  color: $main-color;
  cursor: pointer;
  vertical-align: middle;
}
</style>
