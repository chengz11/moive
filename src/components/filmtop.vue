<template>

  <div class="up4">
    <div class="up2">
      <div class="filmtext">电影</div>
    </div>
    <div @click="cityswitch"
         class="citytext">
      {{this.$store.state.city}}

    </div>

    <nav>
      <ul>
        <router-link tag="li"
                     to="/film/nowplaying"
                     active-class="active">
          <span>正在热映</span>
        </router-link>
        <router-link tag="li"
                     to="/film/comingsoon"
                     active-class="active">
          <span>即将上映</span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  //组件名字
  name: "filmtop",
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
      value: "1",
    };
  },
  //方法 函数写这里
  methods: {
    cityswitch () {
      this.$router.push('/city')
    }

  },
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : "";
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  z-index: 50000;
  background: white;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  ul {
    display: flex;
    text-align: center;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      &.active {
        span {
          width: 40%;
          border-bottom: 2px solid red;
          display: block;
          color: #fe5100;
        }
      }
    }
  }
}
.up4 {
  height: 50px;
  position: relative;
  z-index: 50000;
  background: white;

  .up2 {
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #eee;

    .filmtext {
      font-size: 20px;
    }
  }
}
.citytext {
  position: absolute;
  left: 10px;
  top: 15px;
  font-size: 10px;
}
</style>