<script setup lang="ts">
import { useBtnLoading } from "/@/hooks/useBtnLoading";

defineOptions({
  name: "HooksPage"
});

/* 按钮自动loading Hook */
/**
 * 模拟接口调用，延迟3s返回结果
 */
function featchApi() {
  return new Promise<any>((resolve, reject) => {
    //模拟接口调用
    setTimeout(() => {
      resolve({
        code: 200,
        message: "完成了",
        data: {}
      });
    }, 3000);
  });
}
//创建btnHook
const btnHook = useBtnLoading({
  apiFun: featchApi
});
//接口loading状态
const btnLoading = btnHook.loading;
//返回结果
const apiResult = ref<any>(null);
/**
 * 按钮点击触发函数
 */
function submit() {
  apiResult.value = null;
  btnHook.loadData().then(res => {
    apiResult.value = res;
  });
}
</script>

<template>
  <div class="hooks-page">
    <el-card header="按钮自动loading Hook" class="hooks-card">
      <div class="hooks-card-body">
        <wy-button :loading="btnLoading" @click="submit">你好</wy-button>
        <div class="api-result" v-if="apiResult">
          接口返回结果：{{ apiResult }}
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.hooks-card {
  margin-bottom: 20px;
  .hooks-card-body {
    .api-result {
      line-height: 30px;
    }
  }
}
</style>
