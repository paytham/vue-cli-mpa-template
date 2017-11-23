<!-- 桌面端商城 -->
<template>
  <div id="qinban-shop">
    <i-header></i-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import IHeader from '@/components/Header'

  export default {
    name: 'app',
    components: {
      IHeader
    }
  }
</script>

<style lang="scss">
  @import "~normalize.css";
  @import "assets/index";
</style>
