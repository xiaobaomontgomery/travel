<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
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
    props: {
      list: Array
    },
    data() {
      return {};
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl";
  .title{
    line-height :2.4rem;
    background :#eee;
    text-indent :0.6rem;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
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
