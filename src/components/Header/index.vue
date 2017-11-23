<!-- header -->
<template>
  <header class="i-header">
    <div class="i-header__inner">
      <div class="i-header__logo floatleft">
        <img alt="logo" :src="logo" class="floatleft">
        <span>琴伴</span>
      </div>
      <ul class="floatright">
        <li><router-link :to="serverUrl + '/'">首页</router-link></li>
        <li><router-link :to="serverUrl + '/sparring'">琴伴智能陪练</router-link></li>
        <li><router-link :to="serverUrl + '/system'">教学管理系统</router-link></li>
        <li><router-link :to="serverUrl + '/about'">关于我们</router-link></li>
        <li><router-link :to="serverUrl + '/help'">帮助与支持</router-link></li>
        <li><router-link :to="serverUrl + '/corp'">商务合作</router-link></li>
        <li><router-link :to="{ name: 'Login' }">登录</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
  import { mapState } from 'vuex'
  import logo from 'M1/assets/source/logo-120.png'

  export default {
    name: 'header',
    computed: {
      ...mapState({
        serverUrl: state => state.serverUrl
      })
    },
    data () {
      return {
        logo: logo
      }
    }
  }
</script>
