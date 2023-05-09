<script setup lang="ts">
import { ref } from "vue";

import { useAppHook } from "/@/hooks/app";
const userName = ref("admin");
const userPassword = ref("123456");
const { login } = useAppHook();
const loginBtnClick = () => {
  login({ userName: userName.value, userPassword: userPassword.value });
};
</script>

<template>
  <div class="login-page">
    <div class="left-main"></div>
    <div class="right-main">
      <div class="login-main">
        <!-- 标题 -->
        <div class="login-top">登录</div>
        <div class="login-middle">
          <!-- 用户名 -->
          <el-input
            v-model="userName"
            class="login-input"
            placeholder="请输入用户名"
          >
            <template #prefix>
              <icon-ep-avatar />
            </template>
          </el-input>
          <!-- 密码 -->
          <el-input
            v-model="userPassword"
            class="login-input"
            placeholder="请输入密码"
            type="password"
            show-password
          >
            <template #prefix>
              <icon-ep-lock />
            </template>
          </el-input>

          <!-- 登录按钮 -->
          <el-button type="primary" @click="loginBtnClick">登录</el-button>
        </div>
        <div class="login-bottom"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  position: relative;
  height: 100%;
  background-color: #303a3f;
  .left-main {
    width: 60%;
    height: 100%;
  }
  .right-main {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    background-color: #fff;
    .login-top {
      font-size: 24px;
      font-weight: 600;
      text-align: center;
    }
    .login-middle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .login-input {
        margin: 10px 0;
        width: 250px;
      }
    }
  }
}
</style>
