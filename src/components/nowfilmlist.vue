<template>
  <div class="all scroll"
       :style="{ height: height + 'px' }">
    <comloading v-if="watchflag"></comloading>
    <div v-if="!watchflag">
      <div class="item"
           @click="jijiang(item.filmId)"
           v-for="(item,index) in data"
           :key="index">
        <div class="left">
          <img v-lazy="item.poster" />
        </div>
        <div class="middle">
          <div>{{item.name}}</div>
          <div>
            <span class="yel"> {{ item.grade }}</span>
          </div>
          <div>主演：<span v-for="(item1,index) in item.actors"
                  :key="index"> {{ item1.name }} </span></div>
          <div>中国大陆 | {{item.runtime}}分钟</div>
        </div>
        <div class="right">
          <span>预购</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comloading from "@/components/comloading.vue";

import BScroll from "better-scroll";
import { comingSoonListData } from "@/api/api";

export default {
  //组件名字
  name: "mowfilmlist",
  props: ["list2", "type"],
  //组件注册
  components: {
    comloading
  },
  data () {
    return {
      value: "1",
      watchflag: true,
      loading: true,
      height: 0,
      bs: null,
      pageNum: 1,
      flag: true,
      data: [],
    };
  },
  methods: {
    jijiang (filmId) {
      this.$router.push({ name: 'jijiang', params: { filmId } })
    },
    async getData () {
      if (this.flag) {
        this.pageNum++
        var ret = await comingSoonListData(this.pageNum)
        if (ret.data.data.films.length < 10) {
          this.flag = false
        }
        this.data = this.data.concat(ret.data.data.films)
      }

    },

  },
  watch: {
    list2: function (newval) {
      this.watchflag = false;
      this.data = this.list2;
    },
  },
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : "";
    },
  },

  mounted () {
    this.height = document.documentElement.clientHeight - 154;
  },
  updated () {
    if (!this.bs) {
      this.bs = new BScroll('.scroll', {
        pullUpLoad: true,
        pullDownRefresh: true,
        mouseWheel: true,
        click: true,
        pullUpLoad: {
          threshold: 20,
        },
      })
    } else {
      this.bs.refresh()
    }
    this.bs.on('pullingUp', () => {
      this.getData()
      this.bs.finishPullUp()
    })

    this.bs.on('pullingDown', () => {
      this.getData()
      this.bs.finishPullDown()
    })
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => { });
  },
  beforeRouteUpdate (to, from, next) {
    next();
  },
  beforeRouteLeave (to, from, next) {
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
  margin-bottom: 50px;
  padding-top: 50px;
}
.scroll {
  overflow: hidden;
}
</style>
