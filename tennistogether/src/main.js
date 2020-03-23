import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import Https from './https'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vMdDateRangePicker from 'v-md-date-range-picker'

Vue.use(BootstrapVue)
Vue.use(vMdDateRangePicker)
Vue.config.productionTip = false
Vue.prototype.$https = new Https()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
