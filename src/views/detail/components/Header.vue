<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs">
      <div class="fa fa-chevron-left header-abs-back"></div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="fa fa-chevron-left header-fixed-back"></div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          // opacity是不透明度
          opacity: 0
        }
      };
    },
    methods: {
      handleScroll() {
        // 获取当前页面滚动条的位置
        const top = document.documentElement.scrollTop;
        if (top > 60) {
          let opacity = top / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = { opacity };
          this.showAbs = false;
        } else {
          this.showAbs = true;
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    // 解除滚动对其他页面对影响
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variable.styl";
  .header-abs
    position: absolute
    left: .6rem
    top: .6rem
    width: 2.4rem
    height: 2.4rem
    line-height: 2.4rem
    border-radius: 1.2rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: 1.2rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .96rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: 1.92rem
      text-align: center
      font-size: 1.2rem
      color: #fff

</style>
