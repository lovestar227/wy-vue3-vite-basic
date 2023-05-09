<script lang="ts">
import { ElConfigProvider } from "element-plus";
import en from "element-plus/lib/locale/lang/en";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { defineComponent } from "vue";

import { appStore } from "./store/modules/app";

export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  computed: {
    //element plus国际化-当前语言
    currentLocale() {
      return appStore().locale === "en" ? en : zhCn;
    }
  }
});
</script>

<template>
  <el-config-provider :locale="currentLocale">
    <router-view></router-view>
  </el-config-provider>
</template>
