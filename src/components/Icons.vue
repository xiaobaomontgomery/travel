<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide  v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img" >
              <img class="icon-img-content" :src="item.imgUrl" alt="">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>

    </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          autoplay: false
        }
      };
    },
    computed: {
      pages() {
        const pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
      // pages1() {
      //   const pages = [];
      //   for (let i = 0; i < Math.ceil(this.iconList.length / 8); i++) {
      //     pages.push(this.iconList.slice(i * 8, Math.min(this.iconList.length, (i + 1) * 8)));
      //   }
      //   return pages;
      // }
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variable.styl";
  @import "~@/assets/styles/mixins.styl";
  .icons >>> .swiper-container{
    height: 0;
    padding-bottom: 50%;
  }
  .icon{
    margin-top: 0.1rem;
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
    ellipsis();
  }

</style>
