

<template>
  <div class="oldmanWrap">
  	<div class="oldmanTop">
	  	<h1>老人</h1>
	  	<ul>
	  		<li v-for="data in dataArr">{{data.oldmanArr}}<b><img v-bind:src="data.imgArr"></b></li>
	  	</ul>
	</div>
  	<div class="oldmanFoot" @click="home1">
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
         	{'oldmanArr':"失眠食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'oldmanArr':"钙铁锌食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'oldmanArr':"保健食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'oldmanArr':"低脂肪食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'oldmanArr':"高维生素食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'oldmanArr':"疏通血管食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'oldmanArr':"健康养生食谱",'imgArr':'../../static/images/hotter9.jpg'}
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
	.oldmanWrap,.oldmanTop{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #F7F7F7;
	}
	.oldmanWrap h1{
		width: 100%;
		height: 0.49rem;
		line-height: 0.49rem;
		text-align: center;
		border-bottom: 1px solid #D6D6D6;
	}
	
	.oldmanWrap ul li{
		width: 100%;
		height: 0.38rem;
		line-height: 0.38rem;
		border-bottom: 1px solid #D6D6D6;
		padding-left: 0.1rem;
		font-size: 0.12rem;
		position: relative;
	}
	.oldmanWrap ul li b{
		position: absolute;
		right: 0.15rem;
		top: 0.04rem;
	}
	.oldmanWrap ul li b img{
		width: 0.14rem;
		height: 0.14rem;
		display: inline-block;
	}
	.oldmanFoot{
		height: 0.44rem;
		width: 100%;
		background: #292929;
		position: relative;
	}
	.oldmanFoot img{
		width: 0.21rem;
		height: 0.23rem;
		display: inline-block;
		position: absolute;
		left: 0.2rem;
		top:0.1rem;
	}
</style>

