<template>
  <div class="register">
    <inputView :listData="inputMsg" :data="formData"></inputView>
    <button class="registerBtn" @click="registerFun()">注册</button>
  </div>
</template>


<script>
  import inputView from '../../components/inputView'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      registerData:{
        name:'',
        age:'',
      },
//      提交数据
      formData: {
        name : 'safas',
        age: 32
      },
      inputMsg:[
        {
          textTitle:'用户名',
          inputType:'true',
          inputAttr:{
            inputClasses:'aaa ddd',
            type:'text',
//          disabled:'',
            name:'name',
//          readonly:'',
            placeholder:'请输入名字',
//            widthChange:'200px',
            val:'name',
          },
        },
        {
          textTitle:'年龄',
          listType:'true',
          inputAttr:{
            cType:'text',
            inputClasses:'bbb',
            type:'number',
//          disabled:'',
            name:'name1',
            placeholder:'请输入年龄',
            widthChange:'200px',
//          readonly:'',
            val:56
          },
        },
      ]
    }
  },
  components:{
    inputView
  },
  methods : {
    registerFun(){
      console.log(this.formData);
    },
    submit () {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../static/css/register.css';
</style>
