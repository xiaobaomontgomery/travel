<template>
    <transition>
      <slot></slot>
    </transition>
</template>

<script>
  export default {
    name: 'FadeAnimation'
  };
</script>

<style lang="stylus" scoped>
  .v-enter,.v-leave-to
    opacity: 0
  .v-enter-active,.v-enter-leave
    transition: opacity .5s

</style>
