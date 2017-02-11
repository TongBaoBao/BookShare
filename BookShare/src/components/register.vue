<script>
  export default {
    data () {
      return {
       username:null,
       password:null,
       repeatpass:null
     }
   }
 }
</script>

<template>
  <div class="center-box">
   <form id="register">
    <span id="registerTitle">新用户注册</span>
    <ul class="center-rl">
      <li class="RLi"><span>用户名:</span><input type="text" id="username" v-model="username"/></li>
      <li class="RLi"><span>密码:</span><input type="password" id="password" v-model="password"/></li>
      <li class="RLi"><span>确认密码:</span><input type="password" id="repeatpass" v-model="repeatpass"/></li>
      <li class="RLi"><button>注册</button></li>
    </ul>
  </form>
</div>


</template>

<style>
  #register{
    margin:0 auto;
  }
 .formRl{
  display:block;
  margin:0 auto;
}
.RLi{
  list-style:none;
  margin:0 auto;
}
</style>
