<template>
  <div id="app">
    <nav>
      <div>
       <span id="logo">LOGO</span>
       <ul id="side-nav">
       <li class="side-nav-li"><router-link to="register">注册</router-link></li>
       <li class="side-nav-li"><router-link to="login">登录</router-link></li>
       <li class="side-nav-li"><router-link to="booklist">Book</router-link></li>
       <li class="side-nav-li"><router-link to="home">Home</router-link></li>
       </ul>
     </div>
   </nav>
   <router-view></router-view>
 </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
