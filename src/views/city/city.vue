<template>
  <div>
    <van-index-bar :index-list="indexList"
                   highlight-color="red">
      <div>
        <template v-for="(item,index) in dataList">
          <van-index-anchor :index="item.index"
                            :key='index'
                            style="background:#f5f5f5" />
          <van-cell v-for="(sub,key) in item.data"
                    :title="sub.name"
                    :key="key"
                    @click=changecity(sub.name,sub.cityId) />
        </template>
      </div>
    </van-index-bar>
  </div>
</template>

<style>
.van-index-bar__index {
  line-height: 25px;
}
</style>

<script>
import comvancell from '@/components/comvancell'

import Vue from "vue";
import { cityListData } from '@/api/api'
import { IndexBar, IndexAnchor, Cell } from "vant";
import "vant/lib/index.css";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);

export default {
  data () {
    return {
      dataList: [],
      indexList: [],
    };
  },
  // 进入的时候去掉底部导航
  created () {
    this.eventBus.$emit('footernav', false)

  },
  mounted () {
  },
  // 出来的时候显示底部导航
  components: {
    comvancell
  },
  beforeDestroy () { },
  async mounted () {
    var abc = await cityListData();

    this.dataList = abc[0];
    this.indexList = abc[1];
  },
  methods: {
    changecity (name, cityId) {
      this.$store.commit('add2', name)
      this.$router.push('/cinema')
      this.$store.commit('Id', cityId)

    }
  },
  destroyed () {
    this.eventBus.$emit('footernav', true)

  },
  updated () {
  }
}

</script>
