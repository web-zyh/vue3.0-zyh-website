<template>
  <div v-if="onLine"></div>
  <div v-else></div>
</template>
<script lang="ts">
import { ElNotification } from "element-plus";

import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from "vue";
/**
 *  interface State {
 *     readonly onLine: boolean;
 *  }
 *  readonly 为只读属性，加上此属性后该值不可修改,等同于js里的const，不同处在于变量使用场景为const，属性使用场景为readonly
 */
interface State {
  onLine: boolean;
}
export default defineComponent({
  name: "OfflineDetection",
  props: {
    title: {
      type: String,
      default() {
        return "有网";
      }
    }
  },
  setup(props, ctx) {
    const state = reactive<State>({
      onLine: navigator.onLine,
    });
    const { title } = props as any;

    // console.log(title, "title");
    onMounted(() => {
      // window.addEventListener("online", eventHandle);
      // window.addEventListener("offline", eventHandle);
      window.addEventListener("online", (event) => {
        eventHandle(event);
      });
      window.addEventListener("offline", (event) => {
        eventHandle(event);
      });
    });
    onUnmounted(() => {
      window.removeEventListener("offline", eventHandle);
      window.removeEventListener("online", eventHandle);
    });
    const eventHandle = (event: Event) => {
      console.log(event, "event");
      const { type } = event;
      if (type == "offline") {
        state.onLine = false; // 断网
        ElNotification({
          title: "提示",
          message: "网络连接失败,请检查您的网络",
          type: "info",
          duration: 3000
        });
      } else if (type == "online") {
        state.onLine = true; // 开网
        ElNotification({
          title: "提示",
          message: "网络已恢复",
          type: "success",
          duration: 3000
        });
      }
    };
    return {
      ...toRefs(state),
      eventHandle,
    };
  },
});
</script>
