<template>
  <div id="app">
    <div class="header">
      <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <router-link to="/" class="pure-menu-heading">Home</router-link>

        <ul class="pure-menu-list">
          <li class="pure-menu-item"><router-link to="booklist" class="pure-menu-link">Book</router-link></li>
          <li class="pure-menu-item"><router-link to="login" class="pure-menu-link">登录</router-link></li>
          <li class="pure-menu-item"><router-link to="register" class="pure-menu-link">注册</router-link></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
    <Footer></Footer>
 </div>
</template>

<script>
  import Footer from './components/Footer'
  export default {
    name: 'app',
    components:{Footer}
  }
</script>

<style>
</style>
