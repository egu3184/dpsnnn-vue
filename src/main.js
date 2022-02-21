import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/custom.scss'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
   
Vue.config.productionTip = false
 
new Vue({
  router,
  Swal,
  store,
  render: h => h(App)
}).$mount('#app')
