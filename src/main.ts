import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import i18n from './lang/i18n'
import i18n from './lang/i18n'
import { setupElementPlus } from './setup/element-plus'

const app = createApp(App)
setupElementPlus(app)
app.use(i18n);
app.use(store).use(router).mount('#app')


