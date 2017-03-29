<template>
  <div class="yunfuzhouxiang"  id="app">
	<div class="yunfuzhouxiangwrap">
	  <div class="banner">
		<img src="../../static/images/xia.png" alt="加载错误">
	  </div>
	  <ul>
		<li>油炸大虾</li>
		<li>
		  <img src="../../static/images/food.png" alt="加载错误">
		  <p>
			<span>熊猫猫</span>
			<span>2016-12-30</span>
		  </p>
		</li>
		<li>简介：开吃，我用来替代晚餐的，只吃水果太单调，于是就做成沙拉吃吧！</li>
		<li>
		  <p>制作时间：30分钟</p>
		  <p>用餐人数：1-2人</p>
		</li>
		<li><span>点击查看步骤大图</span>步骤</li>
	  </ul>
	  <div class="lists">
		<ul>
		  <li><img src="../../static/images/xuhao.png" alt="加载错误"> </li>
		  <li><img src="../../static/images/xiaa.png" alt="加载错误"></li>
		  <li>明虾去头、内脏、虾腺，洗净</li>
		</ul>
		<ul>
		  <li><img src="../../static/images/xuhao.png" alt="加载错误"> </li>
		  <li><img src="../../static/images/xiaa.png" alt="加载错误"></li>
		  <li>明虾去头、内脏、虾腺，洗净</li>
		</ul>
	  </div>
	</div>
	<div class="yunfuzhouxiangfooter" ui-sref="yunfuzhou">
	  <img src="../../static/images/return.png" alt="加载错误" @click="path">
	</div>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods:{
  	path(){
  		this.$router.push("/yunfuzhou")
  	}
  }
}
</script>

<style>
* 
{
  margin: 0;
  padding: 0;
  list-style: none;
}
.yunfuzhouxiang, .yunfuzhouxiangwrap 
{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -o-flex;
  display: ms-flex;
  flex-direction: column; 
}
.yunfuzhouxiang .banner, .yunfuzhouxiangwrap .banner 
{
  width: 100%;
  height: 2rem; 
}
.yunfuzhouxiang .banner img, .yunfuzhouxiangwrap .banner img 
{
  width: 100%;
  height: 100%; 
}
.yunfuzhouxiang ul li:nth-child(1), .yunfuzhouxiangwrap ul li:nth-child(1) 
{
  height: 0.22rem;
  line-height: 0.22rem;
  padding-left: 0.1rem;
  color: red; 
}
.yunfuzhouxiang ul li:nth-child(2), .yunfuzhouxiangwrap ul li:nth-child(2) 
{
  height: 0.5rem; 
}
.yunfuzhouxiang ul li:nth-child(2) img, .yunfuzhouxiangwrap ul li:nth-child(2) img 
{
  width: 0.5rem;
  height: 0.5rem;
  float: left;
  padding: 0.1rem 0.1rem 0.1rem 0.1rem; 
}
.yunfuzhouxiang ul li:nth-child(2) p, .yunfuzhouxiangwrap ul li:nth-child(2) p 
{
  float: left; 
}
.yunfuzhouxiang ul li:nth-child(2) p span, .yunfuzhouxiangwrap ul li:nth-child(2) p span 
{
  display: block;
  height: 0.22rem;
  line-height: 0.22rem; 
}
.yunfuzhouxiang ul li:nth-child(3), .yunfuzhouxiangwrap ul li:nth-child(3) 
{
  width: 100%;
  height: 0.44rem;
  line-height: 0.22rem;
  padding-left: 0.1rem; 
}
.yunfuzhouxiang ul li:nth-child(4), .yunfuzhouxiangwrap ul li:nth-child(4) 
{
  width: 90%;
  height: 0.44rem;
  background: #ccc;
  margin: 0 auto;
  border-radius: 10px; 
}
.yunfuzhouxiang ul li:nth-child(4) p, .yunfuzhouxiangwrap ul li:nth-child(4) p 
{
  width: 90%;
  height: 0.22rem;
  line-height: 0.25rem;
  padding-left: 0.1rem; 
}
.yunfuzhouxiang ul li:nth-child(5), .yunfuzhouxiangwrap ul li:nth-child(5) 
{
  height: 0.44rem;
  line-height: 0.44rem;
  padding-left: 0.1rem;
  font-size: 0.2rem; 
}
.yunfuzhouxiang ul li:nth-child(5) span, .yunfuzhouxiangwrap ul li:nth-child(5) span 
{
  float: right;
  font-size: 0.16rem;
  color: red; 
}
.yunfuzhouxiang .lists, .yunfuzhouxiangwrap .lists 
{
  width: 100%;
  height: 100%;
  overflow: hidden; 
}
.yunfuzhouxiang .lists ul, .yunfuzhouxiangwrap .lists ul 
{
  width: 100%;
  height: 1rem;
  display: flex; 
}
.yunfuzhouxiang .lists ul li, .yunfuzhouxiangwrap .lists ul li 
{
  height: 100%; 
}
.yunfuzhouxiang .lists ul li:nth-child(1), .yunfuzhouxiangwrap .lists ul li:nth-child(1) 
{
  width: 0.3rem; 
}
.yunfuzhouxiang .lists ul li:nth-child(1) img, .yunfuzhouxiangwrap .lists ul li:nth-child(1) img 
{
  width: 0.25rem;
  height: 0.25rem; 
}
.yunfuzhouxiang .lists ul li:nth-child(2), .yunfuzhouxiangwrap .lists ul li:nth-child(2) 
{
  width: 1rem; 
}
.yunfuzhouxiang .lists ul li:nth-child(2) img, .yunfuzhouxiangwrap .lists ul li:nth-child(2) img 
{
   width: 100%;
   height: 100%; 
}
.yunfuzhouxiang .lists ul li:nth-child(3), .yunfuzhouxiangwrap .lists ul li:nth-child(3) 
{
  flex: 1; 
}

.yunfuzhouxiangfooter 
{
  height: 0.44rem;
  background: #292929;
  position: relative; 
}
.yunfuzhouxiangfooter img 
{
  position: absolute;
  width: 0.23rem;
  height: 0.21rem;
  top: 0.12rem;
  left: 0.2rem; 
}
</style>
