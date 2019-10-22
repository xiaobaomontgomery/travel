<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          // 实现循环轮播
          loop: true
        },
        swiperList: [
          {
            id: '0001',
            imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/50f7f650f3f64d5799bc58afb7d807f9.jpg_890x330_5c1e7bdc.jpg'
          },
          {
            id: '0002',
            imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/a3f38ad80e09f37ab1cf4e6a35dfbd17.jpg_890x330_8f5477d6.jpg'

          }]
      };
    }
  };
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active{
    background :#fff;
  }
  .wrapper{
    overflow :hidden;
    width:100%;
    height:0;
    padding-bottom :36.96%;
    background :#eee;
  }
  .swiper-img{
    width:100%;
  }

</style>
