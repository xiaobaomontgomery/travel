<template>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
      <li class="item">D</li>
      <li class="item">E</li>
      <li class="item">F</li>
    </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet'
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
