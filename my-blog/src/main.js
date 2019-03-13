import Vue from 'vue'
import App from './App.vue'
import resource  from 'vue-resource'

Vue.config.productionTip = false

Vue.use(resource)
new Vue({
  render: h => h(App),
}).$mount('#app')
