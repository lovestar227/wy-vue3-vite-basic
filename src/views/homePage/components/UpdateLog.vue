<script setup lang="ts">
import { CSSProperties } from "vue";

import { logList } from "./updateLogs";

defineOptions({
  name: "UpdateLog"
});

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
