<script setup lang="ts">
/**
 * 输入框弹出式列表选择组件
 * PS：使用基本数据类型数组会导致RecycleScroller有意外错误，所以不支持string[]、numbuer[]
 * @see el-popover {@link https://element-plus.gitee.io/zh-CN/component/popover.html}
 * @see vue-virtual-scroller {@link https://www.npmjs.com/package/vue-virtual-scroller}
 */
import { PopoverInstance } from "element-plus";
import { CSSProperties } from "vue";

defineOptions({
  name: "WyPopoverList"
});

defineSlots<{
  reference: (props: { result: any }) => any;
  header: (props: { hidePopover: () => void }) => any;
  default: (props: { hidePopover: () => void }) => any;
  "list-item": (props: { item: any }) => any;
  footer: (props: { hidePopover: () => void }) => any;
}>();

interface Props {
  list?: any[];
  poppverClass?: string;
  modelValue?: any;
  showSearch?: boolean;
  searchField?: string[];
  inputClass?: string;
  listClass?: string;
  itemSize?: number;
  keyField?: string;
  valueField?: string;
  showField?: string;
  direction?: string;
  minItemSize?: number;
  sizeField?: string;
  typeField?: string;
  buffer?: number;
  listTag?: string;
  simpleItem?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  /* 列表数据源 */
  list: () => [],

  /* Popover 的属性 其他完全继承element plus Popover属性 */
  //为 popper 添加类名
  poppverClass: "",

  /* 搜索框的属性 */
  //是否显示搜索框
  showSearch: true,
  //需要搜索的字段，默认值为["value"]
  searchField: () => ["value"],

  /* 回显输入框属性 */
  inputClass: "",

  /* 列表的属性 */
  //为 列表 添加类名
  listClass: "",
  //每项大小，如果设置为0，它将使用可变尺寸模式
  itemSize: 32,
  //用于标识项目并优化管理渲染视图的字段
  keyField: "key",
  //滚动方向，或者'垂直-vertical' 或“水平-horizontal”.
  direction: "vertical",
  //项目的高度（或水平模式中的宽度）未知时使用的最小大小。
  minItemSize: undefined,
  //用于在可变大小模式下获取项目大小的字段。
  sizeField: "size",
  //用于区分列表中不同类型组件的字段。对于每种不同类型，将创建一个回收项目池。
  typeField: "type",
  //要添加到滚动可见区域的边缘以开始呈现更远的项目的像素量。
  buffer: 200,
  //要呈现为列表包装器的元素。
  listTag: "div",

  /* 单项Item的属性 */
  // 储存的字段
  valueField: "",
  // 显示的字段
  showField: "value",
  //是否为simple单项(单项line-height与列表itemSize相同)
  simpleItem: true
});

/* emit */
const emit = defineEmits<{
  "update:modelValue": [v: any];
}>();

//popover Ref
const popoverRef = ref<PopoverInstance | null>(null);
/**
 * 手动关闭popover
 */
const hidePopover = () => {
  popoverRef.value?.hide();
};
//显示内容
const resultShow = computed(() => {
  if (activeItem.value && typeof activeItem.value === "object") {
    return activeItem.value[props.showField];
  } else {
    return activeItem.value;
  }
});

//搜索关键字
const search = ref("");
//搜索之后的列表数据/原列表数据
const searchList = ref<any[]>([]);
//监听搜索条件，筛选列表
watch(
  () => search.value,
  newVal => {
    if (!newVal || !props.searchField || !props.searchField.length) {
      //无搜索条件或无搜索字段，列表为源列表
      searchList.value = props.list;
    } else {
      searchList.value = props.list.filter(item =>
        props.searchField.some(
          searchItem => item[searchItem] && item[searchItem].includes(newVal)
        )
      );
    }
  },
  { immediate: true }
);

//选中的选项
const activeItem = ref<any>(null);
//选中的选项Key
const activeItemKey = ref<string | number>(null);
//默认的单项样式
const defaultItemStyle = ref<CSSProperties>(null);
//选择项触发
const upDateResult = (result: any) => {
  if (props.valueField) {
    emit("update:modelValue", result.value[props.valueField]);
  } else {
    emit("update:modelValue", result.value);
  }
  //更新 选中的 值和Key
  activeItem.value = result.value;
  activeItemKey.value = result.key;
  //选择选项关闭popover
  hidePopover();
};

const findActiveItemInList = function () {
  //判断当前是否选中值
  if (
    props.modelValue &&
    props.list &&
    props.list.length &&
    typeof props.list[0] === "object"
  ) {
    //存的值是字段值
    if (props.valueField) {
      activeItem.value = props.list.filter(
        item => item[props.valueField] === props.modelValue
      )[0];
      activeItemKey.value = activeItem.value[props.keyField];
    }
    //存的值是整个对象
    else {
      activeItem.value = props.modelValue;
      activeItemKey.value = activeItem.value[props.keyField];
    }
  }
};

//初始化的时候确定选中的选项Key，为了回显选中的选项
onBeforeMount(() => {
  if (props.simpleItem) {
    defaultItemStyle.value = {
      "line-height": props.itemSize + "px"
    };
  }
  findActiveItemInList();
});
</script>

<template>
  <el-popover
    :popper-class="'wy-popover-list ' + (props?.poppverClass || '')"
    ref="popoverRef"
  >
    <!-- 触发Popover的元素 -->
    <template #reference>
      <!-- 通过 v-slot="reference" 可自定义触发Popover的元素 -->
      <slot name="reference" :result="resultShow">
        <!-- 触发Popover的默认元素为 el-input 输入框  -->
        <el-input
          v-model="resultShow"
          readonly
          :class="['wy-trigger-input', props?.inputClass || '']"
        ></el-input>
      </slot>
    </template>

    <div class="wy-popover-header">
      <!-- 通过v-slot="header"可自定义Popover头部的内容 -->
      <slot name="header" :hidePopover="hidePopover"> </slot>
    </div>

    <!-- 通过props.showSearch判断显示搜索框 -->
    <div class="wy-search" v-if="props.showSearch">
      <el-input v-model="search">
        <template #prefix>
          <icon-ep-search />
        </template>
      </el-input>
    </div>
    <!-- 通过 v-slot="defalut" 可自定义Popover中部的内容 -->
    <slot name="default" :hidePopover="hidePopover">
      <!-- Popover中部默认是一个虚拟列表 -->
      <RecycleScroller
        :class="'wy-scroller ' + (props?.listClass || '')"
        :items="searchList"
        :item-size="props.itemSize"
        :key-field="props.keyField"
        :direction="props.direction"
        :min-item-size="props.minItemSize"
        :size-field="props.sizeField"
        :type-field="props.typeField"
        :buffer="props.buffer"
        :listTag="props.listTag"
        v-slot="{ item }"
      >
        <!-- 单项容器的显示字段，默认field：value -->
        <WyPopoverListItem
          :item="item"
          :active-item-key="activeItemKey"
          @update="upDateResult"
          :key-field="props.keyField"
          :valueField="props.valueField"
          :showField="props.showField"
          :style="defaultItemStyle"
        >
          <!-- 通过v-slot="list-item"可自定义每项选项内容 -->
          <slot name="list-item" :item="item"></slot>
        </WyPopoverListItem>
      </RecycleScroller>
    </slot>

    <div class="wy-popover-footer">
      <!-- 通过v-slot="footer"可自定义Popover底部内容 -->
      <slot name="footer" :hidePopover="hidePopover"> </slot>
    </div>
  </el-popover>
</template>

<style lang="scss">
.wy-trigger-input {
  cursor: pointer;
  input {
    cursor: pointer;
  }
}
.wy-popover-list {
  .wy-search {
    margin-bottom: 5px;
  }
  .wy-scroller {
    width: 100%;
    height: 160px;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    .wy-item {
      padding: 0 10px;
      cursor: pointer;
      &:not(.wy-item-active):hover {
        background-color: #ecf5ff;
        background-color: $hover-color;
      }
    }
  }
}
</style>
