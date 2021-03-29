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
  name: "zhuce",
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
  components: {},
  data () {
    return {
      mobile: "",
      password: "",
      a22: false

    };
  },
  methods: {
    aaa () {
      this.$router.push('/login')
    },
    dianjizhuce () {
      var regs = /\d{11}/
      if (regs.test(this.mobile)) {
        this.a22 = false
      } else {
        this.a22 = true
      }
      // axios.post("http://139.196.20.12:3000/zhuce", {
      axios.post("http://127.0.0.1:3000/zhuce", {
        mobile: this.mobile,
        password: this.password,
      })
        .then((data) => {
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
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : "";
    },
  },
  created () {
    this.$nextTick(() => {
      this.eventBus.$emit('footernav', false)
    })
  },
  beforeDestroy () {
    this.eventBus.$emit('footernav', true)
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
