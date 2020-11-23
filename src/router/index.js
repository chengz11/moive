import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
import filmRouter from '@/router/routes/film.js'
import cinemaRouter from '@/router/routes/cinema.js'
import centerRouter from '@/router/routes/center.js'
import DetailRouter from '@/router/routes/Detail.js'
import jijiangRouter from '@/router/routes/jijiang.js'
import cityRouter from '@/router/routes/city.js'




const routes = [
  {
    path: '/',
    redirect: '/film',
    name: 'film',
    component: Home
  },
  {
    path: '/vuex',
    component: () => import('@/views/vuex/vuex')
  },
  filmRouter,
  cinemaRouter,
  centerRouter,
  DetailRouter,
  jijiangRouter,
  cityRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
