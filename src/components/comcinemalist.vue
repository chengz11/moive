<template>
  <div id="app">

  </div>
</template>



<script>

export default {
  name: "app",
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
    comfooternav
  },
  data () {
    return {
      value: "1",

    };
  },
  filters: {
    toUpcase (value) {
      return value ? value.toUpperCase() : ''
    },
  },
};
</script>





<style lang="scss" >
* {
  margin: 0;
  padding: 0;
}

html,
body {
  // touch-action:none;
  height: 100%;
  ul,
  li {
    list-style: none;
  }
}
</style> 
 