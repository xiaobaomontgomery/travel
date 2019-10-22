<template>
    <div class="icons">
      <div class="icon" v-for="item of iconList" :key="item.id">
          <div class="icon-img" >
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
        <p class="icon-desc">{{item.text}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    data() {
      return {
        iconList: [{
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          text: '热门景点'
        }, {
          id: '002',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png',
          text: '中山陵'
        }, {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          text: '秋意浓'
        }, {
          id: '004',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          text: '牛首山'
        }, {
          id: '005',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          text: '一日游'
        }, {
          id: '006',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
          text: '红山森林动物园'
        }, {
          id: '007',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f6dda1876c5950d83cc159c8fd522943.png',
          text: '总统府'
        }, {
          id: '008',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          text: '银杏湖乐园'
        }] };
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variable.styl";
  .icons{
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
  }
  .icon{
    overflow: hidden;
    position: relative;
    float: left;
    height: 0;
    width: 25%;
    padding-bottom: 25%;
  }
  .icon-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 1.32rem;
    box-sizing: border-box;
    padding: 0.3rem;
  }
  .icon-img-content{
    display: block;
    margin: 0 auto;
    height: 100%;
  }
  .icon-desc{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1.32rem;
    line-height: 1.32rem;
    color: $darkTextColor;
    text-align: center;
  }

</style>
