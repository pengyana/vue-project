<template>
  <div class="content">
    <div class="nav">
      <ul class="nav-list">
        <li v-for="(titleData,index) in arrMsg" class="nav-mod" :class="titleData.active" v-on:click="addClassFun(index)">
          <a href="javascript:;">{{titleData.name}}</a>
        </li>
      </ul>
    </div>
    <leftMenu></leftMenu>
  </div>
</template>


<script>
  import leftMenu from '../../components/leftMenu'
  import formView from '../../components/formView'
export default { 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arrMsg:[
        {name:'菜单一',id:'1', active: 'active',url:'Register'},
        {name:'菜单二',id:'2', active: '',url:'formView'},

      ],
    }
  },
  components:{
    leftMenu
  },
  methods : {
    addClassFun (index) {
      this.arrMsg.map(item => {
        item.active = '';
      })
//      this.arrMsg.map(function (item) {
//
//      })
      this.arrMsg[index].active = 'active';
      this.$router.push({name:this.arrMsg[index].url});
    },
  },
  created:function () {
    console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../static/css/index-list.css';
</style>
