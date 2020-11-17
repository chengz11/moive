<template>
  <div class="fl">
    <div v-for="(item,index) in data1"
         :key="index">
      <h1>{{item.name}}</h1>
      <img :src="item.imgUrl"
           alt="">

      <!-- <h1>film</h1> -->
    </div>
    <img src="https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70"
         alt="">
    <filmtop></filmtop>
    <router-view></router-view>
  </div>
</template>



<script>
import axios from 'axios';
import filmtop from '@/components/filmtop.vue'
export default {
  //组件名字
  name: "film",
  //接收父组件给的东西 type是接收什么东西  default 默认值
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
    // comfooternav
    filmtop
  },
  // vue数据集中管理
  data () {
    return {
      value: "1",
      data1: '',


    };
  },
  //方法 函数写这里
  methods: {
    aa () {

    }

  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : ''
    },
  },
  //以下是生命周期 
  //组件创建之前  
  beforeCreate () {

  },
  //组件创建之后
  created () {
    // console.log('我进入了 created');
    // axios.interceptors.request.use(function (config) {
    //   config.headers = {
    //     "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605418550380220569812993"}',
    //     "X-Host": "mall.cfg.film-float.banner",
    //   }
    //   return config
    // }, function (err) {
    //   if (err) {
    //     console.log('err', err);
    //   }
    // })

    // axios.get('https://m.maizuo.com/gateway?type=2&cityId=310100&k=9803182')
    //   .then(data => {
    //     console.log(data);
    //     console.log(data.data);
    //     this.data1 = data.data

    //   })




    // axios.defaults.baseURL = 'https://m.maizuo.com'

    // // 添加请求拦截器
    // axios.interceptors.request.use(function (config) {
    //   config.headers = {
    //     "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598087896889693885431809","bc":"110100"}',
    //     "X-Host": "mall.film-ticket.film.list",
    //   }
    //   // 在发送请求之前做些什么
    //   return config;
    // }, function (error) {
    //   // 对请求错误做些什么
    //   return Promise.reject(error);
    // });

    // axios.get("gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8591124").then(data => {
    //   console.log(data.data);
    //   this.data1 = data.data
    // });










  },
  //页面渲染之前
  beforeMount () {

  },
  //页面渲染之后
  mounted () {

  },
  //页面销毁之前
  beforeDestroy () {

  },
  //页面销毁之后
  destroyed () {

  },
  //页面视图数据更新之前
  beforeUpdate () {

  },
  //页面视图数据更新之后
  updated () {

  },
  //组件路由守卫enter
  beforeRouteEnter (to, from, next) {
    next(vm => { });
    // 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
  },
  //组件路由守卫update更新
  beforeRouteUpdate (to, from, next) {
    // 同一页面，刷新不同数据时调用，
    next();
  },
  //组件路由守卫离开
  beforeRouteLeave (to, from, next) {
    // 离开当前路由页面时调用
    next();
  }
};
</script>





<style lang="scss" >
* {
  margin: 0;
  padding: 0;
}

html,
body {
  touch-action: none;
  height: 100%;
  ul,
  li {
    list-style: none;
  }
}

.fl {
  img {
    width: 100%;
  }
}
</style> 
 