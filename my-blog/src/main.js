import Vue from 'vue'
import resource  from 'vue-resource'
import App from './App.vue'
import router from "./router.js"

Vue.config.productionTip = false

Vue.use(resource)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
