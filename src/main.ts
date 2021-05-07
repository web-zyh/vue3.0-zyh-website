import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './lang/i18n'
import { setupElementPlus } from './setup/element-plus'

// 全局引入antd组件 start
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// 全局引入antd组件 end

//路由发生变化修改页面title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title as string;
    }
    next();
});

const app = createApp(App)
app.config.globalProperties.$http = 'xxxxxxxxs'

setupElementPlus(app)
app.use(i18n);
app.use(store)
.use(router)
// .use(Antd)
.mount('#app');


