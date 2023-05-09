<script setup lang="ts">
/**
 * --------------------------------------------
 * 封装iconify图标库，离线使用需要从@iconify-icons/图标集/图标 中单独引入，若无引入则使用在线图标
 * 图标离线和在线使用的icon相同
 * @see 图标查询1 {@link https://icon-sets.iconify.design/}
 * @see 图标查询2 {@link https://icones.js.org/}
 * --------------------------------------------
 */
import { addIcon, Icon } from "@iconify/vue";
import apple from "@iconify-icons/ep/apple";
// /* Element Plus 图标 */
import close from "@iconify-icons/ep/close";
import coldDrink from "@iconify-icons/ep/cold-drink";
import edit from "@iconify-icons/ep/edit";
import expand from "@iconify-icons/ep/expand";
import fold from "@iconify-icons/ep/fold";
import homeFilled from "@iconify-icons/ep/home-filled";
import iceCreamRound from "@iconify-icons/ep/ice-cream-round";
import lightning from "@iconify-icons/ep/lightning";
import odometer from "@iconify-icons/ep/odometer";
import pear from "@iconify-icons/ep/pear";
import refresh from "@iconify-icons/ep/refresh";
import setUp from "@iconify-icons/ep/set-up";
import sunset from "@iconify-icons/ep/sunset";
import warningFilled from "@iconify-icons/ep/warning-filled";
// /* Font Awesome 4 图标 */
import arrowCircleOLeft from "@iconify-icons/fa/arrow-circle-o-left";
import arrowCircleORight from "@iconify-icons/fa/arrow-circle-o-right";
import exclamationTriangle from "@iconify-icons/fa/exclamation-triangle";

defineOptions({
  name: "WyIconify"
});

// /* 添加Element Plus 图标 */
addIcon("ep:set-up", setUp);
addIcon("ep:edit", edit);
addIcon("ep:home-filled", homeFilled);
addIcon("ep:cold-drink", coldDrink);
addIcon("ep:refresh", refresh);
addIcon("ep:close", close);
addIcon("ep:warning-filled", warningFilled);
addIcon("ep:pear", pear);
addIcon("ep:ice-cream-round", iceCreamRound);
addIcon("ep:odometer", odometer);
addIcon("ep:lightning", lightning);
addIcon("ep:sunset", sunset);
addIcon("ep:expand", expand);
addIcon("ep:fold", fold);
addIcon("ep:apple", apple);

// /* 添加Font Awesome 4 图标 */
addIcon("fa:exclamation-triangle", exclamationTriangle);
addIcon("fa:arrow-circle-o-left", arrowCircleOLeft);
addIcon("fa:arrow-circle-o-right", arrowCircleORight);

interface Props {
  icon: string;
}
const props = withDefaults(defineProps<Props>(), {
  icon: ""
});
</script>

<template>
  <Icon :icon="props.icon" class="icon-svg"></Icon>
</template>

<style lang="scss" scoped></style>
