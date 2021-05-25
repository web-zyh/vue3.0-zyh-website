<template>
  <div>
    <Header></Header>
    <div class="main box-padding">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Header from "../../components/header/header.vue";
import Footer from "../../components/footer/footer.vue";
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();

    const state = reactive({});
    onMounted(() => {
      router.push("/service.html");
    });
    return {
      ...toRefs(state),
    };
  }
});
</script>
<style lang="scss" src="./style.scss"></style>
