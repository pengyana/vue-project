<template>
  <div class="leftMenu">
    <ul class="leftMenu-ul fix">
      <li class="leftMenu-li tc" v-for="(listData,index) in data">
        <a class="leftMenu-a">{{listData.text}}</a>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        data:[
          {text:'菜单一',id:'1'},
          {text:'菜单二',id:'2'},
          {text:'菜单三',id:'3'},
        ]
      }
    },
    methods : {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/index-list.css';
</style>
