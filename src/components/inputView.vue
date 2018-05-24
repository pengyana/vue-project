<template>
  <div class="info-body content f12">
    <div v-for="mesgData in listData">
      <div v-if="mesgData.inputType" class="form-group form-mt">
        <div class="form-label form-width">{{mesgData.textTitle}}：</div>
        <input class="form-control"
          @blur="blurFun"
          :placeholder="mesgData.inputAttr.placeholder"
          :class="mesgData.inputAttr.inputClasses"
          :name="mesgData.inputAttr.name"
          :readonly="mesgData.inputAttr.readonly"
          :type="mesgData.inputAttr.type"
          :disabled="mesgData.inputAttr.disabled"
          :style="{width: mesgData.inputAttr.widthChange}"
          v-model="mesgData.inputAttr.val"
        />
      </div>
      <div v-if="mesgData.listType" class="form-group form-mt">
          <label class="form-label form-width">{{mesgData.textTitle}}：</label>
          <div class="form-control-text formR-text tl">
            {{mesgData.inputAttr.name}}
          </div>
      </div>

    </div>

    <!--<input type="text" placeholder="请输入年龄" name="age" v-model="registerData.age"/>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      registerData:this.listData,
    }
  },
  props:['listData'],
  methods:{
    blurFun(){
      console.log(this.registerData)
//      console.log(this.listData);
    }
  },
}
</script>
<style scoped>
  @import '../../static/css/index-list.css';
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

