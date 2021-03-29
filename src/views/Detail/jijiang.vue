<template>

  <div class="detail">

    <comloading v-if="!isflag"></comloading>
    <div v-else>
      <div class="pa10">
        <div class="img">
          <img v-lazy="film.poster"
               class="imgs" />
        </div>
        <div class="film-detail">
          <div class="name">{{ film.name }}
            <b>{{name1}}</b>
            <span v-if="!fl"><i>{{grade1}}</i> 分</span>
          </div>
          <div class="category">{{ film.category }}</div>
          <div class="premiereAt">{{ film.premiereAt | timeparser }}上映</div>
          <div class="nation">{{ film.nation }} | {{ film.runtime }} 分钟</div>
          <div class="synopsis abc"
               @click="aaa">
            {{ film.synopsis }}
          </div>
          <div class="Jimg"
               @click="aaa">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
                 alt=""
                 class=""
                 id="imgs">
          </div>
        </div>
      </div>

      <!-- 演员轮播 -->
      <div class="ma10">
        <h3>演职人员</h3>

        <comswiper :key="film.actors.length">
          <div v-for="(item,index) in film.actors"
               :key="index"
               class="swiper-slide">

            <img v-lazy="item.avatarAddress"
                 alt="">
            <p>{{item.name}}</p>
            <p>{{item.role}}</p>
          </div>
        </comswiper>
      </div>
    </div>
  </div>
</template>



<script>
import comloading from "@/components/comloading.vue";
import comswiper from '@/components/comswiper.vue'

import { jijiangDetailData } from '@/api/api'

import moment from 'moment'
export default {
  //组件名字
  name: "jijiang",

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
    comswiper,

    comloading,
    jijiangDetailData

  },
  data () {
    return {
      value: "1",
      film: {},
      name1: '',
      grade1: '',

      fl: false,
      film: { actors: [] },
    };
  },

  methods: {
    aaa () {

      let obj = document.getElementsByClassName('synopsis')[0]
      console.log(obj);
      let imgs = document.getElementById('imgs')
      imgs.className = 'updt'
      if (obj.className == 'synopsis') {
        obj.className = 'synopsis abc'
        imgs.className = ''
      } else {
        obj.className = 'synopsis'
      }
    }
  },
  //计算属性
  computed: {
    isflag () {
      console.log("我进入isflagcomputed里面了");
      console.log(this.list1);
      return this.film;
    },

  },

  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : "";
    },
    timeparser (value) {
      return moment(value * 1000).format('YYYY-MM-DD')
    },

  },

  created () {
    this.eventBus.$emit('footernav', false)

  },

  async mounted () {
    let ret = await jijiangDetailData(this.$route.params.filmId)
    this.film = ret.data.data.film
    this.name1 = ret.data.data.film.item.name
    this.grade1 = ret.data.data.film.grade
    if (this.film.length > 0) {
      this.flag = false;
    }
    console.log(this.grade1);
    if (this.grade1 == undefined) {
      this.fl = true
    } else {
      this.fl = false
    }
  },
  destroyed () {
    this.eventBus.$emit('footernav', true)
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
.pa10 {
  border-bottom: 10px solid #f5f5f5;
}
.img {
  position: relative;
  width: 100%;
  height: 210px;
  overflow: hidden;
  .imgs {
    width: 100%;
    position: absolute;
    top: -50%;
  }
}
.film-detail {
  padding: 15px;
  div {
    color: gray;
    margin-bottom: 6px;
    font-size: 14px;
  }
  .synopsis {
    // height: 36px;
    padding-top: 15px;
  }
  // .synopsis:hover {
  //   animation: 1s infinite xl;
  // }
  b {
    font-size: 12px;
    display: inline;
    border-radius: 5px;
    background: gray;
    color: white;
  }
  .name {
    font-size: 20px;
    color: #000;
    position: relative;

    span {
      font-size: 14px;
      position: absolute;
      color: orange;
      right: 0;
      i {
        font-size: 18px;
      }
    }
  }
}
.Jimg {
  box-sizing: border-box;
  text-align: center;
  display: block;
  height: auto;
  width: 20px;
  margin: auto;
  line-height: normal;
  img {
    width: 8px;
    margin: auto;
  }
}
.updt {
  width: 8px;

  transform: rotate(180deg);
}
.abc {
  height: 36px !important;
  overflow: hidden;
}
.swiper-slide {
  text-align: center;

  img {
    width: 72px;
    height: 100px;
  }
}
.gran {
  background: #f5f5f5;
  height: 10px;
  width: 200px;
}
.ma10 {
  border-bottom: 10px solid #f5f5f5;

  padding: 10px;
  h3 {
    padding: 8px;
    font-weight: 500;
  }
}
</style> 



 