
<template>
  <div>
    <comfilmlist :list1="list1"
                 :type='type'></comfilmlist>
  </div>
</template>



<script>
import { nowplayingListData } from '@/api/api'
import comfilmlist from '@/components/comfilmlist.vue'
export default {
  //组件名字
  name: "nowplaying",
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  //组件注册
  components: {
    comfilmlist
  },
  // vue数据集中管理
  data () {
    return {
      value: "1",
      list1: [],
      type: 1,
      page: 1
    };
  },
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : ''
    },
  },
  async mounted () {
    let ret = await nowplayingListData(this.page)
    this.list1 = ret.data.data.films
  },
};
</script>





<style scoped lang="scss">
</style>


