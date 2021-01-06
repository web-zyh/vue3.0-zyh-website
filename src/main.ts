import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { setupElementPlus } from './setup/element-plus'
const app = createApp(App)
setupElementPlus(app)
app.use(store).use(router).mount('#app')
