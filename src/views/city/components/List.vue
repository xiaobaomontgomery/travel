<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"
                 v-for="item of hotCities"
                 :key="item.id"
                 @click="handleCityClick(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area"
             v-for="(item,key) of cities"
             :key="key"
             :ref="key"
        >
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom"
                 v-for="innerItem of item"
                 :key="innerItem.id"
                 @click="handleCityClick(innerItem.name)"
            >
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Bscroll from 'better-scroll';
  export default {
    name: 'CityList',
    props: {
      cities: Object,
      hotCities: Array,
      letter: String
    },
    methods: {
      handleCityClick(city) {
        this.$store.commit('changeCity', city);
        this.$router.push('/');
      }
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element);
        }
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true
      });
    }
  };
</script>

<style lang="stylus" scoped>
  .list{
    overflow:hidden;
    position:absolute;
    top:5.8rem;
    left:0;
    right:0;
    bottom:0;
  }
  .border-topbottom:before,.border-topbottom:after{
   border-color: #ccc;
  }
  .title{
    line-height:1.62rem;
    background:#eee;
    padding-left: 0.6rem;
    color: #666;
    font-size: .78rem;
  }
  .button-list{
    overflow:hidden;
    padding:0.3rem 1.8rem 0.3rem 0.3rem;
  }
  .button-wrapper{
    float: left;
    width:33.3%;
  }
  .button{
    margin:0.3rem;
    padding:0.3rem 0;
    text-align :center;
    border: 0.06rem solid #ccc;
    border-radius:0.12rem;
  }
  .item{
    line-height:2.28rem;
    padding-left:0.6rem;
  }
  .button-bottom:after{
    border-color: #ccc;
  }

</style>
