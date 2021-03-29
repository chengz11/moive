<template>
  <div class="nav">
    <ul>
      <router-link active-class="active"
                   to="/film"
                   tag="li">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-dianying"></use>
        </svg>
        <p>电影</p>
      </router-link>
      <router-link active-class="active"
                   to="/cinema"
                   tag="li">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-yingyuan"></use>
        </svg>
        <p>影院</p>
      </router-link>
      <router-link active-class="active"
                   to="/center"
                   tag="li">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-geren"></use>
        </svg>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
export default {
  //组件名字
  name: "comfooternav",
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
      value: "1",
    };
  },
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.nav {
  z-index: 5000;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ccc;
  height: 50px;
  text-align: center;
  background: #fff;
  color: #7a7e83;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    li {
      margin-top: 5px;
      flex: 1;
      height: 43px;
      // &.active {
      //     color: #fe5100;
      // }
      p {
        margin-top: 2px;
      }
      i {
        font-size: 20px;
      }
    }
    .active {
      color: #fe5100;
    }
  }
}
</style>
