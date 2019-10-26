<template>
    <div class="header">
        城市选择
      <router-link to="/" class="header-back">
        <div class="fa fa-chevron-left"></div>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  };
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variable.styl";
  .header{
    position: relative;
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: 1.2rem;
  }
  .header-back{
    top:0;
    left:0;
    position: absolute;
    width: 1.92rem;
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
  }

</style>
