<template>
  <div class="register">
    <input type="text" placeholder="请输入名字" name="name" v-model="registerData.name"/>
    <input type="text" placeholder="请输入年龄" name="age" v-model="registerData.age"/>
    <button class="registerBtn" @click="registerFun()">注册</button>
  </div>
</template>


<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      registerData:{
        name:'',
        age:'',
      },
    }
  },
  methods : {
    registerFun(){
      console.log(this.registerData);

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/register.css';
</style>
