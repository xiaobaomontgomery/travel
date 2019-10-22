<template>
  <div class="home">
    <HomeHeader/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeHeader from '@/components/Header.vue';

  export default {
    name: 'home',
    components: {
      HomeHeader
    }
  };
</script>
