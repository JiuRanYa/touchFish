<template>
  <div class="homepage-bar" data-tauri-drag-region></div>
  <div class="homepage">
    <el-row>
      <div>请输入需要内嵌的URL，输入回车确定</div>
      <el-input v-model="url" @keyup.enter="createWebWindow" />
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { WebviewWindow, appWindow } from "@tauri-apps/api/window";
import { invoke } from "@tauri-apps/api/tauri";
import * as app from "@tauri-apps/api/app";

defineComponent({
  name: "homepage",
});

const url = ref();

function createWebWindow() {
  const webview = new WebviewWindow("theUniqueLabel", {
    url: url.value,
    transparent: false,
    titleBarStyle: "transparent",
    hiddenTitle: true,
    minimizable: false,
  });

  webview.once("tauri://created", function () {
    // webview window successfully created
    console.log(123);
  });
}
</script>

<style lang="scss">
.homepage-bar {
  height: 40px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
}
.titlebar {
  height: 30px;
  background: #329ea3;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.titlebar-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
.titlebar-button:hover {
  background: #5bbec3;
}
.homepage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  opacity: 0.3;
  background: #fff;
}
</style>
