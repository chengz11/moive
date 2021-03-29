<template>
  <div class="login">

    <el-container>
      <el-header>登录</el-header>
      <el-main>
        表单
        <el-form :rules="rules"
                 :model="formData"
                 ref="formData">
          <el-form-item label="手机号"
                        prop="mobile">
            <el-input placeholder="请输入手机号"
                      v-model="formData.mobile"
                      maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        prop="password">
            <el-input placeholder="请输入密码"
                      type="password"
                      v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger"
                       @click="submitForm('formData')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
    <p class="djzc">还没有账号? <a href="javascript:"
         @click="aaa"> 点击注册</a></p>
  </div>
</template>

<script>
import { userLogin } from "@/api/api";
export default {
  data () {
    return {
      formData: {
        mobile: "",
        password: "",
      },
      rules: {
        mobile: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur",
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "手机号格式不正确！",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created () {
    this.$nextTick(() => {
      this.eventBus.$emit('footernav', false)
    })
  },
  beforeDestroy () {
    this.eventBus.$emit('footernav', true)
  },
  methods: {
    aaa () {
      this.$router.push('/zhuce')
    },
    submitForm: function (formName) {

      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let ret = await userLogin(this.formData);
          if (ret.data.code == 1000) {

            this.$store.commit("usermobile", ret.data.mobile);
            this.$store.commit('tokenadd', ret.data.data._token)
            localStorage.setItem('_token', ret.data.data._token)
            this.$message({

              message: "即将跳转个人中心 · · · · · ·",
              type: "success",
            });

            setTimeout(() => {
              this.$router.push({ path: "/center" });
              // console.log(111);
            }, 3000)

          } else {

            this.$message({
              message: "fail",
              type: "warning",
            });

            alert(ret.data.info);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.djzc {
  text-align: center;
  a {
    list-style: none;
    color: orange;
  }
}
.login {
  padding-top: 80px;
  .el-container {
    width: 80%;
    margin-left: 40px;
    .el-header {
      font-size: 23px;
    }
  }
}
</style>
