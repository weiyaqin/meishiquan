

<template>
  <div class="childrenWrap">
  	<div class="childrenTop">
	  	<h1>儿童</h1>
	  	<ul>
	  		<li v-for="data in dataArr">{{data.childrenArr}}<b><img v-bind:src="data.imgArr"></b></li>
	  	</ul>
	</div>
  	<div class="childrenFoot" @click="home1">
  		<img src="../images/return.png" alt="">
  	</div>
  </div>
</template>

<script>
  export default {
    data (){
      return {
         'msg':'',
         'dataArr':[
         	{'childrenArr':"3周岁食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'childrenArr':"4周岁食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'childrenArr':"5周岁食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'childrenArr':"6周岁食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'childrenArr':"7周岁食谱",'imgArr':'../../static/images/hotter9.jpg'}
         ]
      }
    },
    methods:{
      home1 (){
       this.$router.push('/home')
      }
    }
  }
</script>
<style scoped>
	.childrenWrap,.childrenTop{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #F7F7F7;
	}
	.childrenWrap h1{
		width: 100%;
		height: 0.49rem;
		line-height: 0.49rem;
		text-align: center;
		border-bottom: 1px solid #D6D6D6;
	}
	
	.childrenWrap ul li{
		width: 100%;
		height: 0.38rem;
		line-height: 0.38rem;
		border-bottom: 1px solid #D6D6D6;
		padding-left: 0.1rem;
		font-size: 0.12rem;
		position: relative;
	}
	.childrenWrap ul li b{
		position: absolute;
		right: 0.15rem;
		top: 0.04rem;
	}
	.childrenWrap ul li b img{
		width: 0.14rem;
		height: 0.14rem;
		display: inline-block;
	}
	.childrenFoot{
		height: 0.44rem;
		width: 100%;
		background: #292929;
		position: relative;
	}
	.childrenFoot img{
		width: 0.21rem;
		height: 0.23rem;
		display: inline-block;
		position: absolute;
		left: 0.2rem;
		top:0.1rem;
	}
</style>

