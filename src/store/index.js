import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //写死固定的值
  state: {
    city: "上海",
    cityId: 310100,
    usermobile: '未知',
    tokenadd: '',
    token: ''
  },
  //需要动态修改数据的
  mutations: {
    add2 (state, step) {
      // console.log("我进入mutations里面了add2 ");
      console.log('step', step)
      state.city = step
    },
    Id (state, step) {
      // console.log('step', step)
      state.cityId = step
    },
    usermobile (state, step) {
      // console.log('进入usermobile里面了')
      state.usermobile = step
    },
    tokenadd (state, step) {
      // console.log('进入tokenadd里面了')
      state.tokenadd = step
    }
  },
  // getters：{
  //  可以过滤一些数据
  // },
  //可以将mutations处理的数据变为异步处理
  actions: {
  },
  //项目特别复杂的时候，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理
  modules: {
  }
})
