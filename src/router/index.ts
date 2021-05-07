import { createRouter, createWebHistory,createWebHashHistory , RouteRecordRaw } from 'vue-router'
import store from '../store/index'
import { removeItem } from '../utils/storage/storage'
import { ElNotification } from 'element-plus';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    meta: { title: "登录" },
    component: () => import('../pages/login/login.vue')
  },
  {
    path: '/index.html',
    name: '首页',
    component: () => import('../pages/index/index.vue'),
    children:[
     
     
    ]
  },
  
]

const router = createRouter({
  // createWebHashHistory hash 路由
  // createWebHistory history 路由
  // createMemoryHistory 带缓存 history 路由
  history: createWebHashHistory(),
  routes
})
// to:router即将进入的路由对象
// from:当前导航即将离开的路由
// next:Function,进行管道中的一个钩子，如果执行完了，则导航的状态就是 confirmed （确认的）；否则为false，终止导航。
router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
      if (store.state.token) { //如果本地有token验证就继续
          next();
      } else { //否则路由初始到登录页
          ElNotification({
              title: '警告',
              message: '非法登录,请您输入用户名及密码进行登录',
              type: 'warning',
              duration:5000
          });
          next({
            path: '/',
          });
      }
  } else {
    removeItem('token');
    next();
  }
});
export default router
