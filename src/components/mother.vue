

<template>
  <div class="motherWrap">
  	<div class="motherTop">
	  	<h1>孕妇</h1>
	  	<ul>
	  		<li v-for="(data,index) in dataArr" @click='yunfuzhou(index)'>{{data.motherArr}}<b><img v-bind:src="data.imgArr"></b></li>
	  	</ul>
	</div>
  	<div class="motherFoot" @click="home1">
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
         	{'motherArr':"孕妇1-2周",'imgArr':'../../static/images/hotter9.jpg'},
         	{'motherArr':"孕妇中期",'imgArr':'../../static/images/hotter9.jpg'},
         	{'motherArr':"孕妇晚期",'imgArr':'../../static/images/hotter9.jpg'},
         	{'motherArr':"分娩期",'imgArr':'../../static/images/hotter9.jpg'},
         	{'motherArr':"坐月子",'imgArr':'../../static/images/hotter9.jpg'}
         ]
      }
    },
    methods:{
      home1 (){
       this.$router.push('/home')
      },
      yunfuzhou(index){
      	this.$router.push("/yunfuzhou")
      }
    }
  }
</script>
<style scoped>
	.motherWrap,.motherTop{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #F7F7F7;
	}
	.motherWrap h1{
		width: 100%;
		height: 0.49rem;
		line-height: 0.49rem;
		text-align: center;
		border-bottom: 1px solid #D6D6D6;
	}
	
	.motherWrap ul li{
		width: 100%;
		height: 0.38rem;
		line-height: 0.38rem;
		border-bottom: 1px solid #D6D6D6;
		padding-left: 0.1rem;
		font-size: 0.12rem;
		position: relative;
	}
	.motherWrap ul li b{
		position: absolute;
		right: 0.15rem;
		top: 0.04rem;
	}
	.motherWrap ul li b img{
		width: 0.14rem;
		height: 0.14rem;
		display: inline-block;
	}
	.motherFoot{
		height: 0.44rem;
		width: 100%;
		background: #292929;
		position: relative;
	}
	.motherFoot img{
		width: 0.21rem;
		height: 0.23rem;
		display: inline-block;
		position: absolute;
		left: 0.2rem;
		top:0.1rem;
	}
</style>
