<template>
  <div id="app">
    <div id="nav">
    </div>
<!-- 把加载过的内容放在缓存中，下一次再进入路由则不需要重新渲染该组件-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>

</style>
