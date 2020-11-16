import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
import filmRouter from '@/router/routes/film.js'
import cinemaRouter from '@/router/routes/cinema.js'
import centerRouter from '@/router/routes/center.js'



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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
