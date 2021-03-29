
<template>
  <div>
    <nowfilmlist :list2="list2"
                 :type='type'></nowfilmlist>
  </div>

</template>



<script>
import { comingSoonListData } from '@/api/api'
import nowfilmlist from '@/components/nowfilmlist.vue'
export default {
  name: "comingsong",
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
    nowfilmlist
  },
  // vue数据集中管理
  data () {
    return {
      value: "1",
      list2: [],
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
    let ret = await comingSoonListData(this.page)
    this.list2 = ret.data.data.films

  },

};
</script>





<style scoped lang="scss">
</style>


