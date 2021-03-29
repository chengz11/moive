<template>
  <div id="app">
    <componentmovie v-if="is_show"></componentmovie>
    <router-view></router-view>
  </div>
</template>



<script>
import axios from 'axios';
import componentmovie from '@/components/componentmovie.vue'
export default {
  //组件名字
  name: "app",
  props: {
    list: {
      type: Array,
      default () {
        return [];
      }
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  //组件注册
  components: {
    componentmovie
  },
  data () {
    return {
      value: "1",
      is_show: true,
    };
  },
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : ''
    },
  },
  created () {
    this.eventBus.$on('footernav', (flag) => {
      this.is_show = flag
    })
  },
  mounted () {

    if (this.$store.state.tokenadd) {
      axios({
        method: 'get',
        // url: 'http://139.196.20.12:3000/api/v1/user_info',
        url: 'http://127.0.0.1:3000/api/v1/user_info',
        headers: { 'Authorization': 'Bearer ' + this.$store.state.tokenadd }
      }).then(res => {
        if (res.data.code === '888') {
          localStorage.removeItem('_token')//删除token
        }
        this.$store.commit('usermobile', res.data.info2.mobile)
      })
    }
    



  },

};
</script>





<style lang="scss" >
* {
  margin: 0;
  padding: 0;
}

html,
body {
  // touch-action: none;
  height: 100%;
  ul,
  li {
    list-style: none;
  }
}
</style> 
 