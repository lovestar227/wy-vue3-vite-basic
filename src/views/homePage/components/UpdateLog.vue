<script setup lang="ts">
import { CSSProperties } from "vue";

defineOptions({
  name: "UpdateLog"
});

const logList = [
  {
    version: "V1.0.1",
    items: [
      "1.chore: 修改base路径，静态网站部署gitee",
      "2.feat: 首页增加更新日志",
      "3.fix: 修改默认主题色",
      "3.fix: 预设颜色选择",
      "4.feat: 还原默认主题色"
    ]
  },
  {
    version: "V1.0.0",
    items: [
      "1. 大版本1.0.0发布",
      "2. 基础框架搭建完成",
      "3. 集成vue-i18n、Element Plus、Echarts等",
      "4. 图标使用iconfont、iconify",
      "5. WyWitch 开关组件",
      "6. WyDarkToogle 明暗模式切换开关",
      "7. WyToolTip 自动判断文本是否溢出显示 tooltip 组件",
      "8. WyPopoverList 悬浮列表组件",
      "9. WyFan 扇子组件",
      "10. WyIconFont iconfont组件",
      "11. WyIconify iconify组件",
      "12. 按钮自动loading Hook",
      "13. 主题色功能",
      "14. 404页面",
      "15. 500页面"
    ]
  }
];

const colorList = [
  "#C71A54",
  "#F9AA17",
  "#04E850",
  "#31DAAD",
  "#31BBDA",
  "#317ADA",
  "#3137DA",
  "#7231DA",
  "#C71AAA"
];

const applyBGC = (logIndex: number): CSSProperties => {
  return {
    "background-color": colorList[logIndex % 9]
  };
};

const applyColor = (logIndex: number): CSSProperties => {
  return {
    color: colorList[logIndex % 9]
  };
};
</script>

<template>
  <div class="home-updateLog">
    <div class="log-list">
      <el-scrollbar>
        <div
          class="log-item"
          v-for="(logItem, logIndex) in logList"
          :key="logItem.version"
        >
          <div class="log-item-circle" :style="applyBGC(logIndex)"></div>
          <div
            class="log-item-line"
            v-if="logList.length > 1"
            :style="applyBGC(logIndex)"
          ></div>
          <div class="log-item-message" :style="applyColor(logIndex)">
            <span class="version"> 版本：{{ logItem.version }}</span>
            <span v-for="(messageItem, index) in logItem.items" :key="index">
              {{ messageItem }}<br />
            </span>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-updateLog {
  padding: 50px 80px 50px 80px;
  width: 100%;
  height: 100%;
  .log-list {
    margin: 0 auto;
    width: 500px;
    height: 100%;
    .log-item {
      position: relative;
      // font-size: 30px;
      .log-item-circle {
        position: absolute;
        top: calc(50% - 20px);
        left: 15px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #000;
        cursor: pointer;
      }
      .log-item-line {
        position: absolute;
        left: 24px;
        width: 2px;
        height: 100%;
        background-color: #000;
      }
      .log-item-message {
        padding: 50px 20px 50px 100px;
        white-space: pre-wrap;
        word-wrap: break-word;
        .version {
          display: block;
          margin-bottom: 10px;
        }
      }
    }
    .log-item:first-child {
      .log-item-line {
        top: 50%;
        height: 50%;
      }
    }
    .log-item:last-child {
      .log-item-line {
        height: 50%;
      }
    }
  }
}
</style>
