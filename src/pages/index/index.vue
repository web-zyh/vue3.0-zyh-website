<template>
<div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</div>

</template>
<script lang="ts">

import Header from "../../components/header/header.vue";
import Footer from "../../components/footer/footer.vue";
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    Header,Footer
  },
  setup() {
    const router = useRouter();
 
    const state = reactive({
    });
    onMounted(() => {
      // router.push('/list.html');
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" src="./style.scss"></style>