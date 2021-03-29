<template>
  <div class="sss">
    {{title}}
  </div>
</template>

<script>

export default {
  name: "comvancell",
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
    title: {
      type: String,
      default: "默认文本",
    }
  },
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
</style>

