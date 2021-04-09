<template>
  <div class="home" >
    <p ref="elmRefs">{{ruleForm.name}}</p>
    <p>{{name}}</p>
    <p>{{ruleForm.flag }}</p>
    <p>{{computedToken}}</p>
    <el-input placeholder="111" v-model="ruleForm.name"/>
    <el-button type="danger" @click="test">测试按钮</el-button>
  </div>
</template>

<script lang="ts">
  import { 
    defineComponent,
    onBeforeMount,
    onMounted, 
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured,
    reactive,
    computed,
    watch,
    ref, 
    toRefs
  } from 'vue';
  import { LOGIN } from '@/api/user/login';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';

  interface state {
    name:string;
    age:number;
    list:Array<object>;
    obj?:object;
    flag:boolean;
  }
  export default defineComponent ({
    name:'home',
     // 父组件传子组件参数
    props: {
      name: {
        type: String,
        default: 'vue3.x'
      },
      list: {
        type: Array,
        default: () => []
      }
    },
    components: {
      /// TODO 组件注册
    },
    setup(props, context) {
      console.log(props)
      const router = useRouter();//实例化路由
      const store = useStore();//实例化vuex

      // 响应式数据
      let ruleForm = reactive<state>({
        name:'赵宇赫',
        age:28,
        list:[
          {}
        ],
        flag:false
      });

      // 获取真实dom
      const elmRefs = ref<null | HTMLElement>(null);
      
      onBeforeMount(()=> {
        console.log('beformounted!')
      })
      onMounted(() => {
        console.log('mounted!')
        console.log(elmRefs.value); // 得到一个 RefImpl 的对象, 通过 .value 访问到数据
      })

      onBeforeUpdate(()=> {
        console.log('beforupdated!')
      })
      onUpdated(() => {
        console.log('updated!')
      })

      onBeforeUnmount(()=> {
        console.log('beforunmounted!')
      })
      onUnmounted(() => {
        console.log('unmounted!')
      })

      onErrorCaptured(()=> {
        console.log('errorCaptured!')
      })
      const computedToken = computed({
        get:()=>{
          return store.state.token
        },
        set:()=>{

        },
      });
      
      // 将数据以及函数return 出去
      return { 
        ruleForm,
        elmRefs,
        computedToken,
     
        test: async (values: any) => {
            try {
              let obj = {
                username:'admin',
                userpwd:'admin!@#'
              };
              const result = await LOGIN(obj);
              console.log(result,'result');
              ruleForm.name = '老男孩'
              ruleForm.flag = !ruleForm.flag;
              //router.push('/about');
            
              console.log(ruleForm)
            } catch (e) {
              console.log(e)
            } finally {
              // 不管有没有异常，finally中的代码都会执行
              console.log('finally')
            }
        }
      };
    },
  });

</script>
