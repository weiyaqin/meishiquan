
<template>
    <div class="login">
        <p><input type="text" name="username"></p>
        <p><input type="password" name="paassword"></p>
        <p><button type="submit" @click="login">登录</button></p>
        <Alert :title="title" :value="value"></Alert> 
        <Group>
            <Cell title="test"></Cell>
           <!--  <Calendar v-model="demo1" :title="title" disabled-past></Calendar> -->
            <inline-calendar v-model="demo1" :title="title" disabled-past></inline-calendar>
        </Group>  
    </div>    
</template>

<script>
  import {Alert,Cell,Group,Calendar,InlineCalendar} from 'vux'
  export default {
    components : {
      Alert,
      Cell,
      Group,
      Calendar,
      InlineCalendar
    },
    data (){
      return {
        show : true,
        value : true,
        title : '测试',
        demo1: '',
        demo2: 'TODAY'
      }
    },
    methods:{
      login (){
        //this.$router.push('/home')
        //console.log(this)
        //方法一
        var data=this.$http({
          url:"/login",
          method:"POST",
          body:{
            key:"1234"
          }
        }).then(function(res){
            console.log(res)
        },function(err){
            console.log(err)
        })
        /*方法二
        this.$http.get('/login').then(function(res){
            console.log(res)
        },function(err){
            console.log(err)
        })*/
      }
    },
    created () {
      //console.log(Alert)
    }
  }
</script>
<style lang="less">
    /* @import '~vux/src/styles/index.less' */
</style>
