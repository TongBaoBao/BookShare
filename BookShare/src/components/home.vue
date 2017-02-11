<script>
  export default {
    data () {
      return {
       data:"home page",
       title:"ddddd"
     }
   },
   methods:{
     test(){
      this.$http.post('/home',{data:"wangtong"})
      .then((response)=>{
        this.data = response.body;
      })
    }
  }
}
</script>

<template>
  <p>{{data}}</p>
  <p>{{title}}</p>
  <p>{{title}}</p>
  <button @click="test()">home</button>
</template>

<style >

</style>