import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: "上海",
    cityId: 310100,

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
    }
  },
  actions: {
  },
  modules: {
  }
})
