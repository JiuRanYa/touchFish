<template>
  <div data-tauri-drag-region class="titlebar">
    <div class="titlebar-button" id="titlebar-minimize">
      <img
        src="https://api.iconify.design/mdi:window-minimize.svg"
        alt="minimize"
      />
    </div>
    <div class="titlebar-button" id="titlebar-maximize">
      <img
        src="https://api.iconify.design/mdi:window-maximize.svg"
        alt="maximize"
      />
    </div>
    <div class="titlebar-button" id="titlebar-close">
      <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
    </div>
  </div>
  <div class="homepage">
    <div>拖动你想放置的软件1</div>
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

onMounted(() => {
  // const webview = new WebviewWindow("theUniqueLabel", {
  //   // url: "https://weread.qq.com/web/reader/864325c052a341864c4cdd2",
  //   transparent: true,
  //   titleBarStyle: "transparent",
  //   hiddenTitle: true,
  //   minimizable: false,
  // });
  //
  // webview.once("tauri://created", function () {
  //   // webview window successfully created
  //   console.log(123);
  // });

  let win = appWindow;
  win.set_transparent_titlebar(true, false);

  // 添加监听函数，监听 DOM 内容加载完成事件
  document.addEventListener("DOMContentLoaded", () => {
    invoke("close_splashscreen");
  });
});
</script>

<style lang="scss" scoped>
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

  .drop-area {
    width: 300px;
    height: 150px;
    border: 1px dashed grey;
    border-radius: 12px;
    margin-top: 40px;
  }
}
</style>
