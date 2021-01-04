<template>
  <div class="home">
    <el-button type="danger" @click="test">测试按钮</el-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent,onMounted } from 'vue';
  import { Login } from '../api/login';

  export default defineComponent ({
    name:'home',
    components: {},
    data(){
      return {
        ont:'1'
      }
    },
    setup() {
      console.log('我是setup')
      onMounted(()=>{
        console.log('我是onMounted')
        testaa();
      })
     
      function testaa() {
        console.log('aaad')
       }

      async function test() {
        try {
          let obj = {
            username:'admin',
             password:'admin!@#'
          };
          const result = await Login(obj);
          console.log(result,'result')
        } catch (e) {
          console.log(e)
        } finally {
          console.log('不管有没有异常，finally中的代码都会执行')
        }
      }

      return { 
        test,
      };
    },
  });

</script>
