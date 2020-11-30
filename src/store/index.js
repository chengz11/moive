import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: "上海",
    cityId: 310100,
    usermobile: '未知',
    tokena: ''
  },
  mutations: {
    add2 (state, step) {
      console.log("我进入mutations里面了add2 ");
      console.log('step', step)
      state.city = step
    },
    Id (state, step) {
      console.log('step', step)
      state.cityId = step
    },
    usermobile (state, step) {
      console.log('进入usermobile里面了')
      state.usermobile = step
    },
    tokenadd (state, step) {
      console.log('进入tokenadd里面了')
      state.tokenadd = step
    }
  },
  actions: {
  },
  modules: {
  }
})
