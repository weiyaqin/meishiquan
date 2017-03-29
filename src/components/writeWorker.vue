

<template>
  <div class="writeWworkerWrap">
  	<div class="writeWworkerTop">
	  	<h1>白领</h1>
	  	<ul>
	  		<li v-for="(data,index) in dataArr" @click='addUser(index)'>{{data.writeArr}}<b><img v-bind:src="data.imgArr"></b></li>
	  	</ul>
	</div>
  	<div class="writeWworkerFoot" @click="home1">
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
         	{'writeArr':"减肥食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'writeArr':"防辐射食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'writeArr':"美容食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'writeArr':"防衰老食谱",'imgArr':'../../static/images/hotter9.jpg'},
         	{'writeArr':"清热解毒食谱",'imgArr':'../../static/images/hotter9.jpg'}
         ]
      }
    },
    methods:{
      home1 (){
       this.$router.push('/home')
      },
      addUser(index){
      	this.$router.push('/bailinglist')
      }
    }
  }
</script>
<style scoped>
	.writeWworkerWrap,.writeWworkerTop{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #F7F7F7;
	}
	.writeWworkerWrap h1{
		width: 100%;
		height: 0.49rem;
		line-height: 0.49rem;
		text-align: center;
		border-bottom: 1px solid #D6D6D6;
	}
	
	.writeWworkerWrap ul li{
		width: 100%;
		height: 0.38rem;
		line-height: 0.38rem;
		border-bottom: 1px solid #D6D6D6;
		padding-left: 0.1rem;
		font-size: 0.12rem;
		position: relative;
	}
	.writeWworkerWrap ul li b{
		position: absolute;
		right: 0.15rem;
		top: 0.04rem;
	}
	.writeWworkerWrap ul li b img{
		width: 0.14rem;
		height: 0.14rem;
		display: inline-block;
	}
	.writeWworkerFoot{
		height: 0.44rem;
		width: 100%;
		background: #292929;
		position: relative;
	}
	.writeWworkerFoot img{
		width: 0.21rem;
		height: 0.23rem;
		display: inline-block;
		position: absolute;
		left: 0.2rem;
		top:0.1rem;
	}
</style>
