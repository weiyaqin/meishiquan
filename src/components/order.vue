
<template>
  <div class="orderWrap">
  	<div class="orderTop">
	  	<h1>排行榜</h1>
	  	<ul>
	  		<li v-for="(data,index) in dataArr" @click="ordeDetail(index)">{{data.textArr}}<b><img v-bind:src="data.imgArr"></b></li>
	  	</ul>
	</div>
  	<div class="orderFoot" @click="home1">
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
         	{'textArr':"快手菜人气排行榜",'imgArr':'../../static/images/hotter9.jpg','id':1,'name':'快手菜','imgsrc':'../../static/images/food14.png'},
         	{'textArr':"家常菜人气排行榜",'imgArr':'../../static/images/hotter9.jpg','id':2,'name':'家常菜','imgsrc':'../../static/images/food13.png'},
         	{'textArr':"减肥人气排行榜",'imgArr':'../../static/images/hotter9.jpg','id':3,'name':'减肥菜','imgsrc':'../../static/images/a11.png'},
         	{'textArr':"烤箱人气排行榜",'imgArr':'../../static/images/hotter9.jpg','id':4,'name':'烤箱菜','imgsrc':'../../static/images/w3.png'},
         	{'textArr':"早餐人气排行榜",'imgArr':'../../static/images/hotter9.jpg','id':5,'name':'早餐','imgsrc':'../../static/images/food14.png'},
         	{'textArr':"小吃排行榜",'imgArr':'../../static/images/hotter9.jpg','id':6,'name':'小吃','imgsrc':'../../static/images/img1.png'},
         ]
      }
    },
    methods:{
      home1 (){
       this.$router.push('/home')
      },
      ordeDetail (num){
       this.$router.push('/ordeDetail?food='+this.dataArr[num].name+'&img='+this.dataArr[num].imgsrc)
      }
    }
  }
</script>
<style scoped>
	.orderWrap,.orderTop{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #F7F7F7;
	}
	.orderWrap h1{
		width: 100%;
		height: 0.49rem;
		line-height: 0.49rem;
		text-align: center;
		border-bottom: 1px solid #D6D6D6;
	}
	
	.orderWrap ul li{
		width: 100%;
		height: 0.38rem;
		line-height: 0.38rem;
		border-bottom: 1px solid #D6D6D6;
		padding-left: 0.1rem;
		font-size: 0.12rem;
		position: relative;
	}
	.orderWrap ul li b{
		position: absolute;
		right: 0.15rem;
		top: 0.04rem;
	}
	.orderWrap ul li b img{
		width: 0.14rem;
		height: 0.14rem;
		display: inline-block;
	}
	.orderFoot{
		height: 0.44rem;
		width: 100%;
		background: #292929;
		position: relative;
	}
	.orderFoot img{
		width: 0.21rem;
		height: 0.23rem;
		display: inline-block;
		position: absolute;
		left: 0.2rem;
		top:0.1rem;
	}
</style>
