<template>
  <div class="yunfuzhou"  id="app">
	<div class="wrap_yunfuzhou">
	  <header>
		孕妇1-2周
	  </header>
	  <div class="min">
		<div class="nav">
		  <ul>
			<li class="xian">默认</li>
			<li>最新</li>
			<li>最热</li>
		  </ul>
		</div>
		<div class="main">
		  <div class="one">
			<ul @click="path">
			  <li ui-sref="yunfuzhouxiang"><img src="../../static/images/food7.png" alt="加载错误"></li>
			  <li>
				<p>油菜香菇</p>
				<p>
				  <img src="../../static/images/yanjing.png" alt="加载错误">
				  <span>87654</span>
				  <img src="../../static/images/xin.png" alt="加载错误">
				  <span>321</span>
				</p>
			  </li>
			  <li><img src="../../static/images/ren.png" alt="加载错误"><span>小辉石</span></li>
			</ul>
			<ul>
			  <li><img src="../../static/images/food9.png" alt="加载错误"> </li>
			  <li>
				<p>油菜香菇</p>
				<p>
				  <img src="../../static/images/yanjing.png" alt="加载错误">
				  <span>87654</span>
				  <img src="../../static/images/xin.png" alt="加载错误">
				  <span>321</span>
				</p>
			  </li>
			  <li><img src="../../static/images/ren.png" alt="加载错误"><span>小辉石</span></li>
			</ul>
		  </div>
		  <div class="one">
			<ul>
			  <li ui-sref="yunfuzhouxiang"><img src="../../static/images/food7.png" alt="加载错误"></li>
			  <li>
				<p>油菜香菇</p>
				<p>
				  <img src="../../static/images/yanjing.png" alt="加载错误">
				  <span>87654</span>
				  <img src="../../static/images/xin.png" alt="加载错误">
				  <span>321</span>
				</p>
			  </li>
			  <li><img src="../../static/images/ren.png" alt="加载错误"><span>小辉石</span></li>
			</ul>
			<ul>
			  <li><img src="../../static/images/food9.png" alt="加载错误"> </li>
			  <li>
				<p>油菜香菇</p>
				<p>
				  <img src="../../static/images/yanjing.png" alt="加载错误">
				  <span>87654</span>
				  <img src="../../static/images/xin.png" alt="加载错误">
				  <span>321</span>
				</p>
			  </li>
			  <li><img src="../../static/images/ren.png" alt="加载错误"><span>小辉石</span></li>
			</ul>
		  </div><div class="one">
			<ul>
			  <li ui-sref="yunfuzhouxiang"><img src="../../static/images/food7.png" alt="加载错误"></li>
			  <li>
				<p>油菜香菇</p>
				<p>
				  <img src="../../static/images/yanjing.png" alt="加载错误">
				  <span>87654</span>
				  <img src="../../static/images/xin.png" alt="加载错误">
				  <span>321</span>
				</p>
			  </li>
			  <li><img src="../../static/images/ren.png" alt="加载错误"><span>小辉石</span></li>
			</ul>
			<ul>
			  <li><img src="../../static/images/food9.png" alt="加载错误"> </li>
			  <li>
				<p>油菜香菇</p>
				<p>
				  <img src="../../static/images/yanjing.png" alt="加载错误">
				  <span>87654</span>
				  <img src="../../static/images/xin.png" alt="加载错误">
				  <span>321</span>
				</p>
			  </li>
			  <li><img src="../../static/images/ren.png" alt="加载错误"><span>小辉石</span></li>
			</ul>
		  </div><div class="one">
			<ul>
			  <li ui-sref="yunfuzhouxiang"><img src="../../static/images/food7.png" alt="加载错误"></li>
			  <li>
				<p>油菜香菇</p>
				<p>
				  <img src="../../static/images/yanjing.png" alt="加载错误">
				  <span>87654</span>
				  <img src="../../static/images/xin.png" alt="加载错误">
				  <span>321</span>
				</p>
			  </li>
			  <li><img src="../../static/images/ren.png" alt="加载错误"><span>小辉石</span></li>
			</ul>
			<ul>
			  <li><img src="../../static/images/food9.png" alt="加载错误"> </li>
			  <li>
				<p>油菜香菇</p>
				<p>
				  <img src="../../static/images/yanjing.png" alt="加载错误">
				  <span>87654</span>
				  <img src="../../static/images/xin.png" alt="加载错误">
				  <span>321</span>
				</p>
			  </li>
			  <li><img src="../../static/images/ren.png" alt="加载错误"><span>小辉石</span></li>
			</ul>
		  </div>
		</div>
	  </div>
	</div>
	<footer ui-sref="yunfu">
	  <img src="../../static/images/return.png" alt="加载错误" @click='fanhui'>
	</footer>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods:{
  	path(){
  		this.$router.push('/yunfuzhouxiang')
  	},
  	fanhui(){
  	  this.$router.push('/mother')
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
.yunfuzhou, .wrap_yunfuzhou 
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
.yunfuzhou header, .wrap_yunfuzhou header 
{
  height: 0.44rem;
  width: 100%;
  text-align: center;
  line-height: 0.44rem; 
}
.yunfuzhou .min, .wrap_yunfuzhou .min 
{
  flex: 1;
  width: 100%;
  height: 5.24rem;
  display: -webkit-flex;
  flex-direction: column; 
}
.yunfuzhou .min .nav, .wrap_yunfuzhou .min .nav 
{
  height: 0.44rem;
  border-top: 0.01rem solid #ccc; 
}
.yunfuzhou .min .nav ul, .wrap_yunfuzhou .min .nav ul 
{
  width: 100%;
  height: 0.44rem;
  display: -webkit-flex; 
}
.yunfuzhou .min .nav ul li, .wrap_yunfuzhou .min .nav ul li 
{
  flex: 1;
  text-align: center;
  line-height: 0.44rem; 
}
.yunfuzhou .min .nav ul li.xian, .wrap_yunfuzhou .min .nav ul li.xian 
{
  border-bottom: 0.01rem solid #ccc; 
}
.yunfuzhou .min .main, .wrap_yunfuzhou .min .main 
{
  flex: 1;
  width: 100%;
  height: 4.36rem;
  overflow: auto; 
}
.yunfuzhou .min .main .one, .wrap_yunfuzhou .min .main .one 
{
  width: 100%;
  height: 2.5rem; 
}
.yunfuzhou .min .main .one ul, .wrap_yunfuzhou .min .main .one ul 
{
  width: 48%;
  height: 100%;
  float: left;
  margin-left: 0.05rem;
  margin-top: 0.05rem; 
}
.yunfuzhou .min .main .one ul li:nth-child(1), .wrap_yunfuzhou .min .main .one ul li:nth-child(1) 
{
  width: 100%;
  height: 1.5rem; 
}
.yunfuzhou .min .main .one ul li:nth-child(1) img, .wrap_yunfuzhou .min .main .one ul li:nth-child(1) img 
{
  width: 1.5rem;
  height: 1.4rem; 
}
.yunfuzhou .min .main .one ul li:nth-child(2) p, .wrap_yunfuzhou .min .main .one ul li:nth-child(2) p 
{
  height: 0.25rem;
  line-height: 0.25rem;
  padding-left: 0.1rem; 
}
.yunfuzhou .min .main .one ul li:nth-child(2) p:nth-child(1), .wrap_yunfuzhou .min .main .one ul li:nth-child(2) p:nth-child(1) 
{
  color: red; 
}
.yunfuzhou .min .main .one ul li:nth-child(3), .wrap_yunfuzhou .min .main .one ul li:nth-child(3) 
{
  width: 100%;
  width: 100%;
  height: 1.5rem; 
}
.yunfuzhou .min .main .one ul li:nth-child(3) img, .wrap_yunfuzhou .min .main .one ul li:nth-child(3) img 
{
  width: 0.3rem;
  height: 0.3rem; 
}
.yunfuzhou .min .main .one ul li:nth-child(2) p, .wrap_yunfuzhou .min .main .one ul li:nth-child(2) p 
{
  height: 0.25rem;
  line-height: 0.25rem;
  padding-left: 0.1rem; 
}
.yunfuzhou .min .main .one ul li:nth-child(2) p:nth-child(1), .wrap_yunfuzhou .min .main .one ul li:nth-child(2) p:nth-child(1) 
{
  color: red; 
}
.yunfuzhou .min .main .one ul li:nth-child(3), .wrap_yunfuzhou .min .main .one ul li:nth-child(3) 
{
  width: 100%;
  height: 0.44rem;
  line-height: 0.34rem;
  padding: 0.05rem;
  display: -webkit-flex; 
}
.yunfuzhou .min .main .one ul li:nth-child(3) span, .wrap_yunfuzhou .min .main .one ul li:nth-child(3) span 
{
  flex: 1;
  padding-left: 0.1rem; 
}
.yunfuzhou footer, .wrap_yunfuzhou footer 
{
  height: 0.44rem;
  background: #292929;
  position: relative; 
}
.yunfuzhou footer img, .wrap_yunfuzhou footer img 
{
  position: absolute;
  width: 0.23rem;
  height: 0.21rem;
  top: 0.12rem;
  left: 0.2rem; 
}
</style>
