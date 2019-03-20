import Vue from 'vue'
import resource  from 'vue-resource'
import App from './App.vue'
import router from "./router.js"
import mock from "./mock/index"

Vue.config.productionTip = false

Vue.use(resource)
Vue.use(mock)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
