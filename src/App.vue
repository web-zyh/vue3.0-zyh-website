<template>
  <div>
    <router-view></router-view>
    <ResizeDevice></ResizeDevice>
    <OfflineDetection
      offline-title="断网处理标题"
      offline-desc="断网处理描述"
      online-title="网络已连接"
    ></OfflineDetection>
  </div>
</template>
<script lang="ts">
import ResizeDevice from "../src/components/resize-device/main.vue";
import OfflineDetection from "../src/components/offline-detection/main.vue";

import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { ResizeDevice, OfflineDetection },
  setup() {
    const router = useRouter();
    const state = reactive({});

    onMounted(() => {
      let beginTime = 0; // 开始时间
      let differTime = 0; // 时间差
      window.onunload = function () {
        differTime = new Date().getTime() - beginTime;
        if (differTime <= 5) {
          console.log("这是关闭");
        } else {
          console.log("这是刷新");
        }
      };
      window.onbeforeunload = function () {
        beginTime = new Date().getTime();
      };
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss">
@import "@/assets/scss/index.scss"; /* 全局通用样式 */
@import "@/assets/scss/reset.scss"; /* 现代CSS重置  */
</style>
