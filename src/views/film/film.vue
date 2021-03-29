<template>
  <div class="fl">
    <filmtop :class="fixed?'fixed':''"></filmtop>
    <router-view></router-view>
  </div>
</template>



<script>
import axios from 'axios';
import filmtop from '@/components/filmtop.vue'
export default {
  //组件名字
  name: "film",

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
    filmtop
  },
  data () {
    return {
      value: "1",
      data1: '',
      fixed: false,

    };
  },
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : ''
    },
  },
  mounted () {
    // 吸顶定位
    window.addEventListener('scroll', (e) => {
      let top = document.documentElement.scrollTop;
      if (top > 200) {
        this.fixed = true
      } else {
        this.fixed = false
      }
    })
  },

};
</script>





<style lang="scss" scoped>
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

.fl {
  img {
    width: 100%;
  }
}

.fixed {
  position: fixed;
  top: 0;
  background-color: #ffffff;
}
</style> 
 