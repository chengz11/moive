import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
let _token = localStorage.getItem('_token')
if (_token) {
  // console.log('我进入了main  _token');
  // console.log(this);
  store.commit('tokenadd', _token)
}

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}


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
