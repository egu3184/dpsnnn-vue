import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {store} from './store'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import instance from './axiosInterceptor.js'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


export const eventBus = new Vue();

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/custom.scss'
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(store);
Vue.prototype.$axios = axios
axios.defaults.baseURL=process.env.VUE_APP_API_URL

Vue.config.productionTip = false
 
new Vue({
  router,
  Swal,
  store,
  instance,
  render: h => h(App)
}).$mount('#app')
