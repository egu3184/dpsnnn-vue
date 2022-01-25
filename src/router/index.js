import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Theme_box from '@/views/Theme_box.vue'
import Theme_happy from '@/views/Theme_happy.vue'
import Book from "@/views/Book.vue"

Vue.use(VueRouter)

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

  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
