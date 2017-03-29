<template>
    <div class="myWrap">
    	<h1>个人中心</h1>
    	<div class="myHeader">
    		<img src="../images/banner.png" alt="加载错误" v-if='img'>
        <div class="denglu" v-if='text'>您还未登录，立即<a href="#/denglu">登录</a></div>
    	</div>
    	<div class="myNav">
    		<p>关注</p>
    		<p>粉丝</p>
    		<p>美食圈</p>
    	</div>
    	<div class="myPhone">
    		<p class="autopho">上传随拍</p>
    	</div>
    	<div class="myMain">
    		<div class="myTop">
   			<dl class="leftC">
   				<dt><img src="../images/11.png" alt=""></dt>
   				<dd @click='path'>我的收藏</dd>
   			</dl>
   			<dl>
   				<dt><img src="../images/22.png" alt=""></dt>
   				<dd @click='path'>我的动态</dd>
   			</dl>
   			<dl>
   				<dt><img src="../images/33.png" alt=""></dt>
   				<dd @click='path'>我的菜谱</dd>
   			</dl>
   		</div>

   		<div class="myBot">
   			<dl class="leftC">
   				<dt><img src="../images/44.png" alt=""></dt>
   				<dd @click='path'>随拍成果</dd>
   			</dl>
   			<dl>
   				<dt><img src="../images/55.png" alt=""></dt>
   				<dd @click='path'>最近来访</dd>
   			</dl>
   			<dl>
   				<dt><img src="../images/66.png" alt=""></dt>
   				<dd @click='path'>我的消息</dd>
   			</dl>
   		</div>
    	</div>
    </div>
</template>

<script>
  export default {
    data (){
      return {
         'msg':'',
         text: true,
         img : false
      }
    },
    methods: {
      path (){
        this.$router.push('/denglu')
      }
    }
  }
  //scoped  限制样式到本插件
</script>
<style scoped>
  .myWrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #EAE9E9;
  }
  .myWrap h1{
    width: 100%;
    height: 0.48rem;
    line-height: 0.48rem;
    text-align: center;
  }
  .myHeader{
    width: 100%;
    height: 1.5rem;
  }
  .myHeader img{
    width: 100%;
    height: 100%;
  }
  .myHeader .denglu{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 100%;
  }
  .myNav{
  	width: 100%;
  	height: 0.5rem;
  	background: #fff;
  	display: flex;
  }
  .myNav p{
  	flex:1;
  	text-align: center;
  	line-height: 0.3rem;
  	font-size: 0.12rem;
  }
  .autopho{
  	width: 96%;
  	height: 0.4rem;
  	background: #fff;
  	margin-top: 0.1rem;
  	margin-left: 0.07rem;
  	line-height: 0.4rem;
  	text-align: center;
  	font-size: 0.12rem;
  }
  .myMain{
  	width: 100%;
  	height: 100%;
  	display: flex;
  	flex-direction: column;
  }
  .myTop,.myBot{
		width: 100%;
		height: 0.88rem;
		text-align: center;
		display: flex;
	}
	.myTop dl,.myBot dl{
		flex:1;
		width: 1.07rem;
		height: 0.88rem;
		background: #F7F7F7;
		margin-top: 0.1rem;
		margin-right: 0.1rem;
	}
	.myTop dl dt,.myBot dl dt{
		width: 0.57rem;
		height: 0.57rem;
		margin:0 auto;
	}
	.myTop dl dt img,.myBot dl dt img{
		width: 100%;
		height: 100%;
	}
	.myBot{
		margin-top: 0.1rem;
	}
	.leftC{
		margin-left: 0.1rem;
	}
	.myTop dl dd,.myBot dl dd{
		margin-top: 0.08rem;
		font-size: 0.12rem;
	}
  
  
</style>
