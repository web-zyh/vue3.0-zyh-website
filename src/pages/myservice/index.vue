<template>
  <div>11</div>
</template>
<script lang="ts">
import { Navigation } from "node_modules/swiper/swiper";
import { reactive, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    onMounted(() => {});
    return {
      store 
    };
  }
});
</script>
