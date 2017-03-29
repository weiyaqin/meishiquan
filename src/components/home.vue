<template>
    <div class="home">
       <p><router-link to='/home/list'>home</router-link></p>
        <router-view></router-view>  
    </div>    
</template>

<script>
  export default {
    data (){
      return {
         'msg':''
      }
    }
  }
  //scoped  限制样式到本插件
</script>
<style scoped>

</style>
