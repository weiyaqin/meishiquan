
<template>
   <div class="classWrap">
   		<h1>分类</h1>
   		<div class="classTop">
   			<dl class="leftC">
   				<dt><img src="../images/a17.png" alt="加载错误"></dt>
   				<dd>肉类</dd>
   			</dl>
   			<dl>
   				<dt><img src="../images/a18.png" alt="加载错误"></dt>
   				<dd>蔬果</dd>
   			</dl>
   			<dl>
   				<dt><img src="../images/a19.png" alt="加载错误"></dt>
   				<dd>水产</dd>
   			</dl>
   		</div>

   		<div class="classBot">
   			<dl class="leftC">
   				<dt><img src="../images/a20.png" alt=""></dt>
   				<dd>蛋白质类</dd>
   			</dl>
   			<dl>
   				<dt><img src="../images/a21.png" alt=""></dt>
   				<dd>菜系</dd>
   			</dl>
   			<dl>
   				<dt><img src="../images/a22.png" alt=""></dt>
   				<dd>烹饪口味</dd>
   			</dl>
   		</div>
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
</script>
<style scoped>
	.classWrap{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction:column;
		background: #EAE9E9;
	}
	.classWrap h1{
		height: 0.48rem;
		line-height: 0.48rem;
		text-align: center;
		background: #F6F6F6;
	}
	.classTop,.classBot{
		width: 100%;
		height: 0.88rem;
		text-align: center;
		display: flex;
	}
	.classTop dl,.classBot dl{
		flex:1;
		width: 1.07rem;
		height: 0.88rem;
		background: #F7F7F7;
		margin-top: 0.1rem;
		margin-right: 0.1rem;
	}
	.classTop dl dt,.classBot dl dt{
		width: 0.57rem;
		height: 0.57rem;
		margin:0 auto;
	}
	.classTop dl dt img,.classBot dl dt img{
		width: 100%;
		height: 100%;
	}
	.classBot{
		margin-top: 0.1rem;
	}
	.leftC{
		margin-left: 0.1rem;
	}
	.classTop dl dd,.classBot dl dd{
		margin-top: 0.08rem;
	}
</style>
