<script setup lang="ts">
import { unref } from "vue";

defineOptions({
  name: "Redirect"
});

const { currentRoute, replace } = useRouter();
const { params, query } = unref(currentRoute);
const { path } = params;
/*替换到页面路由 */
replace({
  path: "/" + path,
  query
});
</script>

<template>
  <div class="redirect-page"></div>
</template>

<style lang="scss" scoped></style>
