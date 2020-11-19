import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false





import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  // loading: "https://2url.cc/1OwrB",
  loading: '/a/vlazy.svg',
  // loading: '/svg-loaders/bars.svg'

});
//vue中的bus总线机制
//prototype共有属性

//new Vue 中的方法赋值给Vue.prototype.eventBus，
//从而eventBus可是使用new Vue中的属性和方法
Vue.prototype.eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
