<template>
   <div id="app">
     <Header></Header>
     <div>
      <router-view></router-view>
     </div>
     <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Header from '../src/components/header/header.vue';
import Footer from '../src/components/footer/footer.vue';
  export default {
      components :{
        Header,Footer
      }
  }
</script>
<style lang="scss">
  @import '@/assets/css/index'; /* 全局通用样式 */
  @import '@/assets/css/reset'; /* 现代CSS重置  */
</style>
