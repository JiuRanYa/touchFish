<template>
  <div class="homepage">
    <div>拖动你想放置的软件1</div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { WebviewWindow } from "@tauri-apps/api/window";

defineComponent({
  name: "homepage",
});

const url = ref();

onMounted(() => {
  const webview = new WebviewWindow("theUniqueLabel", {
    url: "https://weread.qq.com/web/reader/864325c052a341864c4cdd2",
    transparent: true,
  });

  webview.once("tauri://created", function () {
    // webview window successfully created
    console.log(123);
  });
});
</script>

<style lang="scss" scoped>
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
