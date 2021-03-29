<template>
  <div>
    <div class="up1">
      <div class="up2">
        <div class="filmtext">影院<span class="iconfont icon-sousuo"></span> </div>

      </div>
      <div @click="cityswitch"
           class="citytext">
        {{this.$store.state.city}}
        <!-- <span class="iconfont icon-jiantou9"></span> -->
      </div>
    </div>
    <div class="xx"></div>
    <div class="bo">
      <div class="cinemalist"
           v-for="(item,index) in data"
           :key="index">
        <div class="cinema">
          {{item.name}}
          <span>￥<i>{{item.lowPrice/100}}</i> 起</span>
        </div>
        <div class="address">
          <b>{{item.address}}</b>
          <span><i>{{item.Distance.toFixed(2)}}</i>km</span>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import axios from "axios"
import { cinemaListData } from "@/api/api";
import '@/assets/icon/iconfont.css'
export default {
  //组件名字
  name: "cinema",
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

  // vue数据集中管理
  data () {
    return {
      value: "1",
      data: [],
      cityId: this.$store.state.cityId
    };
  },
  //方法 函数写这里
  methods: {
    cityswitch () {
      this.$router.push('/city')
    }
  },

  //过滤器
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : ''
    },
  },
  async mounted () {
    var ret = await cinemaListData(this.cityId)
    this.data = this.data.concat(ret.data.data.cinemas)
  },
};
</script>





<style lang="scss"  scoped>
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
.up1 {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  background: white;
  z-index: 100;
  .up2 {
    text-align: center;
    line-height: 50px;
    .filmtext {
      font-size: 20px;
      position: relative;
      span {
        position: absolute;
        right: 20px;
        font-size: 20px;
      }
    }
  }
}
.xx {
  height: 50px;
}
.bo {
  margin-bottom: 40px;
  // margin-top: 40px;
}
.citytext {
  position: absolute;
  left: 10px;
  top: 15px;
  font-size: 10px;
  span {
    font-size: 6px;
  }
}
.cinemalist {
  border-bottom: 1px solid #ededed;
  padding: 15px;
  .cinema {
    font-size: 15px;
    color: #18191a;
    position: relative;
    span {
      position: absolute;
      right: 0;
      color: orangered;
      font-size: 10px;
      i {
        font-size: 15px;
        font-style: normal;
      }
    }
  }
  .address {
    margin-top: 5px;
    font-size: 13px;
    color: #797d82;
    position: relative;
    b {
      width: 80%;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: normal;
    }
    span {
      position: absolute;
      right: 0;
      i {
        font-size: 15px;
        font-style: normal;
      }
    }
  }
}
</style> 
 