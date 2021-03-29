import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'



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
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/zhuce',
    name: 'zhuce',
    component: () => import('@/views/login/zhuce')
  },
  filmRouter,
  cinemaRouter,
  centerRouter,
  DetailRouter,
  jijiangRouter,
  cityRouter
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})




// 全局路由守卫
router.beforeEach((to, from, next) => {
  let arr = ['/center']
  if (arr.includes(to.path)) {//includes() 方法用于判断字符串是否包含指定的子字符串
    if (store.state.tokenadd) {//在vuex中拿到token
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})


// router.beforeEach((to, from, next) => {

//   //不让进入的页面 写入数组 然后我们用逻辑去处理
//   let arr = ['/center']
//   //如果我即将要跳转的下一个页面  arr里面有
//   if (arr.includes(to.path)) {
//     console.log(11);
//     //如果你要去我的必须登录才能去页面 必须登录才能进去 
//     //store.state.token 相当于你是我认证过的用户
//     if (store.state.token) {

//       //所以就直接放行
//       next()
//     } else {
//       // 如果不是我们认证过 直接跳login
//       next({ path: '/login' })
//     }
//   } else {
//     //如果是 不需要登录 也能直接让用户看 吸引用户粉丝的页面  直接让用户放行
//     next()
//   }
// })


export default router
