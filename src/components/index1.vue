<template>		
	<div class="indexWrap">
		<div class="indexTop">
			<router-view>
			</router-view> 
		</div>
		<div class="indexFoot">
		<dl>
			<dt><img src="../images/home.png" alt=""></dt>
			<dd><router-link to='/home'>首页</router-link></dd>
		</dl>
		<dl>
			<dt><img src="../images/searc.png" alt=""></dt>
			<dd><router-link to='/search'>搜索</router-link></dd>
		</dl>
		<dl>
			<dt><img src="../images/class.png" alt=""></dt>
			<dd><router-link to='/classes'>分类</router-link></dd>
		</dl>
		<dl>
			<dt><img src="../images/myself.png" alt=""></dt>
			<dd><router-link to='/my'>我的</router-link></dd>
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
	.indexWrap{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.indexTop{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	.indexHead{
		width: 100%;
		height: 2rem;
	}
	.indexHead img{
		width: 100%;
		height: 100%;
	}
	.indexMenu{
		width: 100%;
		height: 2.73rem;
		display: flex;
		margin-top: 0.1rem;
	}
	.indexMenu dl{
		flex:1;
		text-align: center;
	}
	.indexMenu dl dt{
		width: 0.43rem;
		height: 0.43rem;
		margin: 0 auto;
	}
	.indexMenu dl dt img{
		width: 100%;
		height: 100%;
	}
	.indexMenu dl dd{
		margin-top: 0.05rem;
	}
	.indexWork{
		width: 100%;
		height: 0.67rem;
		background: #EAE9E9;
	}
	.indexWork ul{
		list-style: none;
		display: flex;
		width: 100%;
		height: 0.67rem;
	}
	.indexWork ul li{
		flex:1;
		text-align: center;
		text-align: center;
		height: 0.33rem;
		line-height: 0.33rem;
		background: #fff;
		margin-top: 0.17rem;
		border-radius: 0.1rem;
		margin-left: 0.05rem;
		margin-right: 0.05rem;
	}
	.indexList{
	  overflow: scroll;
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  background: #fff;
	  margin-left: 0.1rem;
	  margin-right: 0.1rem; 
	}
	.indexList h1{
	    height: 0.24rem;
	    line-height: 0.24rem;
	    font-size: 0.14rem;
	    font-weight: bold;
	    color: red; 
	    margin-top: 0.1rem;
	}
	.listdl{
		display: flex;
		width: 100%;
		margin-top: 0.1rem;
		height: 0.63rem;
    }
   .listdl dt{
      width: 0.74rem;
      height: 0.63rem;
      margin-right: 0.1rem; 
  	}
      .listdl dt img{
        width: 100%;
        height: 100%; 
    }
    .listdl dd{
      width: 100%;
      height: 0.6rem; 
      margin-right: 0.1rem;
  	}
    .listdl dd h3{
	  	font-weight: normal;
	    font-size: 0.12rem;
   }
    .listdl dd p span{
        color: #8C8C8C; 
    }
    .listdl dd h6{
	 font-weight: normal;
	 font-size: 0.12rem;
	 width: 100%;
    }
    .indexFoot{
    	width: 100%;
    	height: 0.5rem;
    	display: flex;
    	background: #353535;
    }
    .indexFoot dl{
		flex:1;
		text-align: center;
		margin-top: 0.05rem;
    }
    .indexFoot dl dt{
    	width: 0.2rem;
    	height: 0.2rem;
    	margin: 0 auto;
    }
    .indexFoot dl dt img{
    	width: 100%;
    	height: 100%;
    }
    .indexFoot dl dd{
		color: #A19F9F;
		margin-top: 0.05rem;
    }
    .indexFoot dl dd a{
    	text-decoration: none;
    	color: #8F8D8D;
    }
</style>