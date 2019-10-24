<template>
  <div class="recommend-title">
    <div>
      热销推荐
    </div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
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
  .recommend-title{
    margin-top :0.6rem;
    line-height :2.4rem;
    background :#eee;
    text-indent :0.6rem;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: 5.7rem;
    background:#fff;
  }
  .item-img{
    width: 5.4rem;
    height: 5.4rem;
    padding: 0.3rem;
  }
  .item-info{
    flex: 1;
    padding: 0.3rem;
    min-width: 0;
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
  .item-button{
    line-height: 1.32rem;
    margin-top: 0.48rem;
    background: #ff9300;
    padding: 0 0.6rem;
    border-radius: 0.18rem;
    color: #fff;
  }

</style>
