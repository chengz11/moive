import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
import filmRouter from '@/router/routes/film.js'
import cinemaRouter from '@/router/routes/cinema.js'
import centerRouter from '@/router/routes/center.js'
import DetailRouter from '@/router/routes/Detail.js'
import jijiangRouter from '@/router/routes/jijiang.js'




const routes = [
  {
    path: '/',
    redirect: '/film',
    name: 'film',
    component: Home
  },
  filmRouter,
  cinemaRouter,
  centerRouter,
  DetailRouter,
  jijiangRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
