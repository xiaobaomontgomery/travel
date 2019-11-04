<template>
  <div class="header">
    <div class="header-left" style="align-items:center">
      <div class="fa fa-chevron-left back-icon"></div>
    </div>
    <div class="header-input">
      <em class="fa fa-search" style="align-items: center"></em>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <em class="fa fa-caret-down" style="align-items: center"></em>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city'])
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus" scoped>
  @import "~@/assets/styles/variable.styl";
  .header {
    display: flex;
    line-height: $headerHeight;
    background: $bgColor;
    color: #fff;
  }

  .header-left {
    width: 2rem;
    float: left;
    text-align: center;
  }
  .header-left .back-icon{
    font-size: 1.2rem;
  }

  .header-input {
    flex: 1;
    height: 2.28rem;
    line-height: 2.28rem;
    padding-left: 0.6rem;
    background-color: #fff;
    border-radius: 0.3rem;
    margin-top: 0.36rem;
    margin-left: 0.6rem;
    color: #ccc;
  }

  .header-right {
    min-width: 3.12rem;
    padding: 0.3rem;
    float: right;
    text-align: center;
    color: #fff;

  }
</style>
