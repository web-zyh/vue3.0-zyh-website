<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="info" @click="goHome">回家</el-button>
    <home-g name="1"></home-g>
  </div>
</template>
<script lang="ts">
  import {defineComponent} from 'vue';
  import { useRouter } from 'vue-router';
  import Home from './Home.vue';
  export default defineComponent({
    components:{
      'home-g':Home
    },
    setup(prop,context){
      const router = useRouter();

      // 页面事件函数
      const goHome = (()=>{
         router.push("/");
      });
      return {
        goHome,
      }
    }
  });
</script>
