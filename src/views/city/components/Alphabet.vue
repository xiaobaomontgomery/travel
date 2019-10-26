<template>
    <ul class="list">
      <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variable.styl";
  .list{
    display: flex;
    flex-direction: column;
    justify-content:center;
    position: absolute;
    top:5.8rem;
    right:0;
    bottom:0;
    width:1.2rem;
  }
  .item{
    line-height:1.2rem;
    text-align:center;
    color: $bgColor;
  }

</style>
