<script>
  export default {
    data () {
      return {
        lusername:null,
        lpassword:null,
        info:null,
        date:null
      }
    },
    methods:{
     doLogin(){
       if (!this.lusername.length) return this.info = '请输入正常的用户名'
         if (!this.lpassword.length) return this.info = '请输入正常的密码'
          this.$http.post('/api/login',{name: this.lusername, pwd: this.lpassword})
        .then(response=> {
         if (response.data.state === 1) {
           this.info == response.data.msg
         }
       })
      }
    }
  }
</script>

<template>
  <div class="center-box">
    <span >登录</span>
    <ul class="center-rl">
      <li class="RLi"><span>用户名:</span><input type="text" id="lusername" name="lusername" v-model.rim="lusername"/></li>
      <li class="RLi"><span>密码:</span><input type="password" id="lpassword" name="lpassword" v-model.trim="lpassword"/></li>
      <li><button @click="doLogin()">登陆</button></li>
    </ul>
  </div>
</template>

<style>
  .center-box{
    margin:0 auto;
    width:50%;
    height:300px;
  // box-shadow:2px 2px 2px  rgba(0, 0, 0, 0.2);
  box-shadow: -2px 0 5px green,0 -2px 5px blue,0 2px 5px red,2px 0 5px yellow;
  // box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2),0 -2px 5px rgba(0, 0, 0, 0.2),0 2px 5px rgba(0, 0, 0, 0.2),2px 0 5px rgba(0, 0, 0, 0.2);
  border:2px solid rgba(0, 0, 0, 0.2);
  border-radius:4px;
  margin-top:100px;
  position:relative;
}
.center-rl{
  list-style:none;
  position: absolute;
  width:80%;
  height:60%;
  text-align:center;
}
.center-rl li{
  margin:15px;

}
</style>