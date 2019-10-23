<template>
  <div class="title">
    <div>
      周末去哪儿
    </div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data() {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首战 浪漫的海洋主题公园'
        }, {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首战 浪漫的海洋主题公园'
        }, {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首战 浪漫的海洋主题公园'
        }]
      };
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl";
  .title{
    margin-top :0.6rem;
    line-height :2.4rem;
    background :#eee;
    text-indent :0.6rem;
  }
  .item-img-wrapper{
    height: 0;
    padding-bottom: 33.9%;
    }
  .item-img{
    width: 100%;
  }
  .item-info{
    background:#fff;
    flex: 1;
    padding: .8rem .8rem .8rem .8rem;
  }
  .item-title{
    line-height: 1.62rem;
    font-size: 0.96rem;
    ellipsis();
  }
  .item-desc{
    line-height: 1.2rem;
    color:#ccc;
    ellipsis();
  }

</style>
