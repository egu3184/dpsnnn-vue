import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Theme_box from '@/views/Theme_box.vue'
import Theme_happy from '@/views/Theme_happy.vue'
import Book from "@/views/Book.vue"
import Login from "@/views/Login.vue"
import SignUp from "@/views/SignUp.vue"
import UserInfo from "@/views/UserInfo.vue"

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
  {
    path: '/userinfo',
    name: 'userinfo',
    component: UserInfo
  }



 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  //다른 페이지를 위해 일단 헤더 색상 초기화
  store.commit("setHeaderColor", '')
  //해당 페이지로 이동시 vuex에 헤더 색상 저장
  if(to.name === "login"|| to.name === "book" || to.name === "signup" 
        || to.name === "userinfo"){
    store.commit("setHeaderColor", '#45526C')
  }
  next()
});


export default router
