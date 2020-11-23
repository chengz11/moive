<template>
  <div class="all scroll"
       :style="{ height: height + 'px' }">
    <!-- <comloading v-if='flag1'></comloading> -->
    <!-- <comloading v-if="!isflag"></comloading> -->
    <comloading v-if="watchflag"></comloading>

    <div v-if="!watchflag">
      <div class="item"
           @click="godetail(item.filmId)"
           v-for="(item,index) in data"
           :key="index">
        <div class="left">
          <img v-lazy="item.poster" />
        </div>
        <div class="middle">
          <div>{{item.name}}</div>
          <div>
            <span>观众评分</span>
            <span class="yel"> {{ item.grade }}</span>
          </div>
          <div>主演：<span v-for="(item1,index) in item.actors"
                  :key="index"> {{ item1.name }} </span></div>
          <div>中国大陆 | {{item.runtime}}分钟</div>
        </div>
        <div class="right">
          <span>购票</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comloading from "@/components/comloading.vue";
import BScroll from "better-scroll";
import { nowplayingListData, comingSoonListData } from "@/api/api";

export default {
  //组件名字
  name: "comfilmlist",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props:
    ["list1", "type"],
  //组件注册
  components: {
    comloading
  },
  // vue数据集中管理
  data () {
    return {
      value: "1",
      // flag1: true,
      watchflag: true,
      loading: true,
      // watchflag: true,
      height: 0,
      // bs：保存better-scroll的实例结果
      bs: null,
      pageNum: 1,
      flag: true, // 控制是否可以继续加载更多
      data: [],
    };
  },
  //方法 函数写这里
  methods: {
    godetail (filmId) {
      console.log('我进来了godetail methods 里面 ');
      console.log(filmId);
      // this.$router.push(name:'Detail',params)
      this.$router.push({ name: 'Detail', params: { filmId } })
    },


    async getData () {
      console.log('getData进来了')
      if (this.flag) {
        this.flag = false

        this.pageNum++
        console.log(this.pageNum)
        var ret = await nowplayingListData(this.pageNum)
        this.flag = true

        if (ret.data.data.films.length < 1) {
          this.flag = false
        }
        this.data = this.data.concat(ret.data.data.films)
      }

    },

  },
  //计算属性
  computed: {
    // isflag () {
    //   console.log("我进入isflagcomputed里面了");
    //   console.log(this.list1);
    //   return this.list1[0];
    // },
  },
  //侦听器
  watch: {
    list1: function (newval) {
      console.log("进来watch了");
      this.watchflag = false;
      this.data = this.list1;

      //   console.log(newVal);
    },
    //  immediate: true,

  },
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
    // console.log("我来到了components的comfilmlist created 里面");
    // console.log("this.list", this.list1);
    // if (this.list1.length > 0) {
    //   this.flag1 = false;
    // }

  },
  //页面渲染之前
  beforeMount () { },
  //页面渲染之后
  mounted () {
    this.height = document.documentElement.clientHeight - 150;

    // console.log("我来到了components的comfilmlist mounted 里面");
    // console.log("this.list", this.list1);
    // if (this.list1.length > 0) {
    //   this.flag1 = false;
    // }
  },
  //页面销毁之前
  beforeDestroy () { },
  //页面销毁之后
  destroyed () { },
  //页面视图数据更新之前
  beforeUpdate () { },
  //页面视图数据更新之后
  updated () {
    //new 得到better scroll的全部能力 
    if (!this.bs) {
      this.bs = new BScroll(".scroll", {
        pullUpLoad: true,
        // 激活下滑的事件监听
        mouseWheel: true,
        pullDownRefresh: true,
        // 它会禁止一些浏览器的事件
        click: true,
        pullUpLoad: {
          threshold: 20,
        },
      });
    } else {
      //如果已经有了 new BScroll给的全部能力 我就不继续 new 新的了 以防止重新渲染容器
      //this.bs.refresh()意思是  正常运转 已有的容器
      this.bs.refresh();
    }

    this.bs.on("pullingUp", () => {
      // 获取数据
      this.getData();

      this.bs.finishPullUp();
    });
    //本次pullup动作已经完成，继续准备下一次pullup
    this.bs.on("pullingDown", () => {
      // 获取数据

      this.getData();
      //本次pulldown动作已经完成，继续准备下一次pulldown
      this.bs.finishPullDown();
    });



    // this.bs = new BScroll(".scroll", {
    //   pullUpLoad: true,
    //   // 激活下滑的事件监听
    //   pullDownRefresh: true,
    //   // 它会禁止一些浏览器的事件 
    //   click: true,
    // });
    // this.bs.on("pullingUp", () => {
    //   // 获取数据
    //   this.getData();
    //   this.bs.finishPullUp();
    // });
    // this.bs.on("pullingDown", () => {
    //   // 获取数据
    //   this.getData();
    //   //这一步停止当前这一步 下拉刷新  刷新一次够了  要不服务器受不了
    //   this.bs.finishPullDown();
    // });
  },


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
.item {
  margin-top: 15px;
  padding-bottom: 15px;
  display: flex;
  color: #797d82;
  font-size: 13px;
  border-bottom: 1px solid #ededed;

  .left {
    width: 77px;
    height: 100px;
    margin-left: 20px;
    img {
      width: 66px;
      height: 100%;
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;

    div:nth-of-type(1) {
      color: #191a1b;
      font-size: 16px;
    }
    .yel {
      color: #ff5f16;
    }
    div:nth-of-type(3) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .right {
    width: 15%;
    display: flex;
    align-items: center;
    margin-right: 20px;

    span {
      border: 1px solid #ff5f16;
      background: white;
      color: #ff5f16;
      border-radius: 2px;
      height: 25px;
      line-height: 25px;
      font-size: 13px;
      width: 50px;
      text-align: center;
    }
  }
}
.all {
  margin-bottom: 30px;
}
.scroll {
  overflow: hidden;
}
</style>
