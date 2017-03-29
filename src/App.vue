<template>
    <div class="wrap">
    	<router-view></router-view>    	
    </div>
</template>
<script>
  import * as obj from './text'
  export default {
    created(){
      // console.log(...[1,2,3],obj)
    }
  }
</script>
<style scoped>
	.wrap{
		width: 100%;
		height: 100%;
	}
</style>


