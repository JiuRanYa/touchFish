<script setup lang="ts"></script>

<template>
  <div class="app-wrapper">
    <van-config-provider>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </van-config-provider>
  </div>
</template>

<style lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
