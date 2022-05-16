import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Theme_box from '@/views/Theme_box.vue'
import Theme_happy from '@/views/Theme_happy.vue'
import Book from "@/views/Book.vue"
import Login from "@/views/Login.vue"
import SignUp from "@/views/SignUp.vue"

Vue.use(VueRouter)
import {store} from '../store'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/box',
    name: 'box',
    component: Theme_box

  },

  {
    path: '/happy',
    name: 'happy',
    component: Theme_happy

  },
  {
    path: '/book',
    name: 'book',
    component: Book

  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: function(to,from,next){
        if(store.state.isLogin){
            store.commit("alert_Warning", "이미 로그인하셨습니다!")
            // console.log(from)
            next(from)
        }else{
            next()
        }      
    }

  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp

  },



 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
