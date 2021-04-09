import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/login/login.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/index.html',
    name: 'index',
    component: () => import('../pages/index/index.vue')
  },
  {
    path: '/about.html',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/home.html',
    name: 'home',
    component: () => import('../pages/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
