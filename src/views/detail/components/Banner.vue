<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg"  alt="">
        <div class="banner-info">
          <div class="banner-title">
            {{this.sightName}}
          </div>
          <div class="banner-number">
            <em class="iconfont banner-icon fa fa-image" style="align-items: center"></em>
            {{this.bannerImgs.length}}
          </div>
        </div>
      </div>
      <fade-animation>
        <common-gallary
          :imgs="bannerImgs"
          v-show="showGallary"
          @close="handleGallaryClose"
        ></common-gallary>
      </fade-animation>
    </div>
</template>

<script>
  import CommonGallary from '@/common/gallary/Gallary';
  import FadeAnimation from '@/common/fade/FadeAnimation';
  export default {
    name: 'DetailBanner',
    props: {
      sightName: String,
      bannerImg: String,
      bannerImgs: Array
    },
    components: {
      CommonGallary,
      FadeAnimation
    },
    data() {
      return {
        showGallary: false,
        imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_350x240_4dd46cd0.jpg',
               'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_350x240_8d02892d.png']
      };
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true;
      },
      handleGallaryClose() {
        this.showGallary = false;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: 1.8rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .96rem
        padding: 0 .6rem
      .banner-number
        height: .96rem
        line-height: .96rem
        margin-top: .42rem
        padding: 0 1.2rem
        border-radius: .6rem
        background: rgba(0, 0, 0, .8)
        font-size: .72rem
        .banner-icon
          font-size: .72rem

</style>
