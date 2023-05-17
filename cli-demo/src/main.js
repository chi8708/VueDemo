import { createApp } from 'vue'
import App from './App.vue'
// 引入插件
import router from "@/router/index";
import store from './store'//引入store

createApp(App).use(router).use(store).mount('#app')
