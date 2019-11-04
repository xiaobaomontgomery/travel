<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeHeader from '@/components/Header.vue';
  import HomeSwiper from '@/components/Swiper';
  import HomeIcons from '@/components/Icons';
  import HomeRecommend from '@/components/Recommend';
  import HomeWeekend from '@/components/Weekend';
  import axios from 'axios';
  import { mapState } from 'vuex';
  export default {
    name: 'home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        lastCity: ' ', // 通过lastCity缓存上一次城市选择
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      };
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo() {
        axios.get('/mock/index.json?city=' + this.city)
          .then(this.getHomeInfoSucc);
      },
      getHomeInfoSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      }
    },
    mounted() {
      this.lastCity = this.city;
      this.getHomeInfo();
    },
    // 首页城市和上一次一样时页面不需要重新渲染，首页城市变化时页面对应的内容则需要重新加载
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
    }
  };
</script>
