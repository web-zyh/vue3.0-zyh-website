<template>
    <div @resize="handleResize"></div>
</template>

<script>
import { defineComponent, onMounted, computed } from "vue";
import { getDevice } from "../../utils/device";

export default defineComponent({
  name: "HkResizeDevice",
  props: {
    
  },
  setup(prop,context) {
    onMounted(() => {
      emitDevice();
    });
    const handleResize = () => {
      emitDevice();
    };
    const emitDevice = () => {
      const device = getDevice();
      context.emit('resize', device);
    };
    return {
      handleResize,
      emitDevice,
    };
  },
});
</script>
