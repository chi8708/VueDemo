import Vue from 'vue'
import resource  from 'vue-resource'
import App from './App.vue'
import router from "./router.js"
import mock from "./mock/index"
import store from './store'//引入store

Vue.config.productionTip = false

Vue.use(resource)
Vue.use(mock)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
