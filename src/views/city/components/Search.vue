<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content"
         ref="search"
         v-show="keyword"
    >
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom"
            v-show="hasNoData"
        >
          没有匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll';
  export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    computed: {
      hasNoData() {
        return !this.list.length;
      }
    },
    data() {
      return {
        keyword: '',
        list: [],
        timer: null
      };
    },
    watch: {
      keyword() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (!this.keyword) {
          this.list = [];
          return;
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value);
              }
            });
          }
          this.list = result;
        }, 100);
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.search);
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/variable.styl"
  .search{
    height: 2.16rem;
    padding: 0.5rem;
    background: $bgColor;
  }
  .search-input{
    box-sizing: border-box;
    padding: 0 0.3rem;
    height: 1.86rem;
    line-height: 1.86rem;
    width: 99%;
    border-radius: 0.2rem;
    border-width 0;
    text-align:center;
    color: #666;
  }
  .search-content{
    z-index:1;
    position: absolute;
    top:5.8rem;
    left:0;
    right:0;
    bottom:0;
    background:#eee;
  }
  .search-item{
    line-height:1.86rem;
    padding-left:0.6rem;
    background:#fff;
    color:#666;
  }

</style>
