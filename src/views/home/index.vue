<template>
  <div class="homepage">
    <div class="homepage-title">
      <van-field v-model="url" label="文本" placeholder="请输入嵌入的网址" />

      <van-button type="primary" @click="createWebWindow">新建</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { WebviewWindow } from "@tauri-apps/api/window";
import { open } from "@tauri-apps/api/shell";

defineComponent({
  name: "homepage",
});

const url = ref();

async function createWebWindow() {
  const webview = new WebviewWindow("theUniqueLabel", {
    url: url.value,
    transparent: false,
    titleBarStyle: "transparent",
    hiddenTitle: true,
    minimizable: false,
  });
  await open("https://github.com/tauri-apps/tauri");
}
</script>

<style lang="scss">
.homepage-bar {
  height: 40px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  background: red;
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
  padding-top: 40px;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  opacity: 1;

  &-title {
    margin-bottom: 20px;
  }

  &-card {
    width: 120px;
    height: 120px;
    border-radius: 14px;
    background: #2b2f62;
    backdrop-filter: blur(5px);
    margin-bottom: 20px;
  }
}
</style>
