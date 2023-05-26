<script setup lang="ts">
defineOptions({
  name: "ListPage"
});
interface itemType {
  key: number;
  value: number;
}

const list1 = ref([]);
for (let i = 1; i <= 10000; i++) {
  list1.value.push({ id: i, show: "显示" + i, save: "芜湖" + i });
}
const list2 = ref<itemType[]>([]);
for (let i = 1; i <= 10000; i++) {
  list2.value.push({ key: i, value: i });
}
const list3 = [
  { id: 1, dept: "部门1", fullDept: "法人1/市场1/部门1" },
  { id: 2, dept: "部门2", fullDept: "法人2/市场2/部门2" },
  { id: 3, dept: "部门3", fullDept: "法人3/市场3/部门3" },
  { id: 4, dept: "部门4", fullDept: "法人4/市场4/部门4" }
];

const result1 = ref(50);
const result2 = ref("芜湖2");
const result3 = ref(3);
const result4 = ref({ key: 50, value: 50 });

const deptStyle = {
  display: "flex",
  "align-items": "center",
  height: "32px"
};

const fullDeptStyle = {
  "font-size": "12px",
  height: "20px",
  "lint-height": "20px"
};
</script>

<template>
  <div class="list-page">
    <h1>输入框弹出式列表选择组件</h1>

    <el-card class="list-page-card">
      <template #header>
        <ul>
          <li>默认触发元素为输入框</li>
          <li>默认的单项数据类型为 { key: string, value: string }</li>
          <li>绑定值是对象字段</li>
        </ul>
      </template>
      <div class="w-200px">
        <h3>存储的值：{{ result1 }}</h3>
        <wy-popover-list
          :list="list2"
          v-model="result1"
          trigger="click"
          :width="200"
          placement="bottom"
          valueField="value"
          :persistent="false"
        >
        </wy-popover-list>
      </div>
    </el-card>

    <el-card class="list-page-card">
      <template #header>
        <ul>
          <li>
            自定义列表的keyField和单项的数据类型，比如默认的单项数据类型为 { id:
            i + "", show: "显示" + i, save: "芜湖" + i }
          </li>
        </ul>
      </template>
      <div class="w-200px">
        <h3>存储的值：{{ result2 }}</h3>
        <div class="w-200px">
          <wy-popover-list
            :list="list1"
            v-model="result2"
            trigger="click"
            :width="200"
            placement="bottom"
            :persistent="false"
            keyField="id"
            :searchField="['show']"
            valueField="save"
            showField="show"
          >
          </wy-popover-list>
        </div>
      </div>
    </el-card>

    <el-card class="list-page-card">
      <template #header>
        <ul>
          <li>自定义列表的单项和显示结果</li>
        </ul>
      </template>
      <h3>存储的值：{{ result3 }}</h3>
      部门：
      <div class="w-200px inline-block">
        <wy-popover-list
          :list="list3"
          v-model="result3"
          list-class="auto-list"
          trigger="click"
          :width="400"
          :item-size="54"
          placement="bottom-start"
          keyField="id"
          showField="fullDept"
          :persistent="false"
          valueField="id"
          :simple-item="false"
          :show-arrow="false"
        >
          <template #reference="{ result }">
            <div>
              <el-input
                :value="result"
                readonly
                class="wy-trigger-input input-inline"
              ></el-input>
            </div>
          </template>
          <template v-slot:list-item="{ item }">
            <div class="dept-box" :style="deptStyle">
              <icon-ep-school></icon-ep-school>
              {{ item.dept }}
            </div>
            <div class="full-dept-box" :style="fullDeptStyle">
              {{ item.fullDept }}
            </div>
          </template>
        </wy-popover-list>
      </div>
    </el-card>

    <el-card class="list-page-card">
      <template #header>
        <h3>当ElPopover使用</h3>
      </template>
      <div class="w-200px">
        <wy-popover-list
          trigger="hover"
          :width="200"
          placement="right"
          :persistent="false"
          :showSearch="false"
        >
          <template #reference>
            <el-button> 悬浮我 </el-button>
          </template>
          你好
        </wy-popover-list>
      </div>
    </el-card>

    <el-card class="list-page-card">
      <template #header>
        <h3>提供了内容的header、footer slot</h3>
      </template>
      <div class="w-200px">
        <wy-popover-list
          trigger="click"
          :width="200"
          placement="right"
          :persistent="false"
          :showSearch="false"
        >
          <template #reference>
            <el-button> 点击我 </el-button>
          </template>
          <template #header> 头部 </template>
          你好

          <template #footer="{ hidePopover }">
            <el-button
              type="primary"
              class="float-right ml-10px"
              @click="hidePopover"
              >确定</el-button
            >
            <el-button class="float-right" @click="hidePopover">取消</el-button>
          </template>
        </wy-popover-list>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.list-page-card {
  margin-bottom: 20px;
}

.auto-list {
  .dept-box {
    display: flex;
    align-items: center;
    height: 32px;
  }
  .full-dept-box {
    display: flex;
  }
}
.input-inline {
  display: inline;
}
</style>
