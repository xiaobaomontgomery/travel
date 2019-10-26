<template>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
  export default {
    name: 'CitySearch'
  };
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variable.styl"
  .search{
    height: 2.16rem;
    padding: 0.5rem;
    background: $bgColor;
  }
  .search-input{
    box-sizing: border-box;
    padding: 0 0.3rem;
    height: 1.86rem;
    line-height: 1.86rem;
    width: 99%;
    border-radius: 0.2rem;
    border-width 0;
    text-align:center;
    color: #666;
  }

</style>
