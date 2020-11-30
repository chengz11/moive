<template>
  <div class="zcbox">
    <div class="zcimg"><img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"
           alt=""></div>
    <div class="inpbox">

      <input type="text"
             v-model="mobile"
             placeholder='手机号'
             ref="mob" /> <br />
      <p v-if="a22"
         class="a22">格式错误</p>
      <input type="text"
             v-model="password"
             placeholder='密码' /> <br />

    </div>

    <div class="btnzcbox">
      <button @click="dianjizhuce"
              class="btnzc">点击注册</button>
      <div>
        <p class="yup">已有账号 -
          <a @click="aaa"> 点击登录</a>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //组件名字
  name: "zhuce",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {
    list: {
      type: Array,
      default () {
        return [];
      },
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  //组件注册
  components: {},
  // vue数据集中管理
  data () {
    return {
      mobile: "",
      password: "",
      a22: false

    };
  },
  //方法 函数写这里
  methods: {

    aaa () {

      this.$router.push('/login')
    },
    dianjizhuce () {
      var regs = /^1[3-9]\d{9}$/





      if (regs.test(this.mobile)) {
        this.a22 = false
      } else {
        this.a22 = true

      }

      // console.log(this.mobile);

      // 作业1 这儿要用if else 验证手机号密码 不能为空 格式最好也验证一下 然后再往后走 要不给提示 不行 然后return
      //作业2 样式写漂亮   原生写 可自定义漂亮 不用每一个人都一样！ 
      console.log("进入点击注册了");
      axios.post("http://127.0.0.1:3000/zhuce", {
        mobile: this.mobile,
        password: this.password,

      })
        .then((data) => {
          console.log(data);
          if (data.data.code == '200') {
            this.$message({
              message: data.data.info2,
              type: "success",
            });
            this.$router.push('/login')
          } else {
            this.$message({
              message: "警告哦，注册可能有点问题o ",
              type: "warning",
            });
          }
        })
    },
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : "";
    },
  },
  //以下是生命周期
  //组件创建之前
  beforeCreate () { },
  //组件创建之后
  created () {
    this.$nextTick(() => {
      this.eventBus.$emit('footernav', false)
    })
  },
  //页面渲染之前
  beforeMount () { },
  //页面渲染之后
  mounted () { },
  //页面销毁之前
  beforeDestroy () {
    this.eventBus.$emit('footernav', true)


  },
  //页面销毁之后
  destroyed () {
  },
  //页面视图数据更新之前
  beforeUpdate () { },
  //页面视图数据更新之后
  updated () { },
  //组件路由守卫enter
  beforeRouteEnter (to, from, next) {
    next((vm) => { });
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
  },
};
</script>

<style lang="scss" scoped>
.a22 {
  text-align: center;
  line-height: 18px;
  color: red;
  font-size: 14px;
}
.yup {
  text-align: center;
  margin-top: 30px;
  a {
    color: orangered;
  }
}

.zcbox {
  overflow: hidden;
}
.zcimg {
  margin: 79px auto 40px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  img {
    height: 60px;
  }
}
.inpbox {
  line-height: 55px;
  margin: 0 25px;
  position: relative;
  // .borbb {
  //   border-bottom: 1px solid #f5f5f5;
  // }
  input {
    height: 15px;
    line-height: 15px;
    padding: 20px 0;
    width: 100%;
    font-size: 15px;
    color: #191a1b;
    border: 0;
    border-bottom: 1px solid #f5f5f5;
    outline-width: 0;
  }
}
.btnzcbox {
  margin: 0 auto;
  width: 300px;
  .btnzc {
    width: 300px;
    line-height: 45px;
    font-size: 16px;
    margin: 70px 0px 0;
    border-radius: 3px;
    text-align: center;
    background-color: #ff5f16;
    height: 44px;
    color: #fff;
    border: none;
  }
}
</style>
