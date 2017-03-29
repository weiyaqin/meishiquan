<template>
    <div class="searchWrap">
    	<h1>搜索</h1>
    	<div class="searchHeader">
    		<img src="../images/search1.gif" alt="">
    	</div>
    	<div class="searchList">
    		<ul>
    			<li @click='hotsearch'><em><img src="../images/s1.gif" alt=""></em>热门搜索<b><img src="../images/hotter9.jpg" alt=""></b></li>
    			<li><em><img src="../images/s2.gif" alt=""></em>最近搜索<b><img src="../images/hotter9.jpg" alt=""></b></li>
    			<li><em><img src="../images/s3.gif" alt=""></em>最近浏览<b><img src="../images/hotter9.jpg" alt=""></b></li>
    			<li><em><img src="../images/s4.gif" alt=""></em>最近流行<b><img src="../images/hotter9.jpg" alt=""></b></li>
    		</ul>
    	</div>
    </div>
</template>

<script>
  export default {
    data (){
      return {
         'msg':''
      }
    },
    methods:{
      hotsearch(){
        this.$router.push('/hotsearch')
      }
    }
  }
  //scoped  限制样式到本插件
</script>
<style scoped>
  .searchWrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #F7F7F7;
  }
  .searchWrap h1{
    width: 100%;
    height: 0.48rem;
    line-height: 0.48rem;
    text-align: center;
  }
  .searchHeader{
    width: 100%;
    height: 0.98rem;
  }
  .searchHeader img{
    width: 100%;
    height: 100%;
  }
  .searchList{
    width: 100%;
    height: 100%;
  }
  .searchList ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .searchList ul li{
    width: 100%;
    height: 0.47rem;
    line-height: 0.47rem;
    border-bottom: 1px solid #D6D6D6;
    position: relative;
    padding-left: 0.4rem;
  }
  .searchList ul li em{
    position: absolute;
    left: 0.1rem;
    top: 0.04rem;
    width: 0.18rem;
    height: 0.18rem;
  }
  .searchList ul li em img{
    width: 100%;
    height: 100%;
  }
  .searchList ul li b{
    position: absolute;
    right: 0.5rem;
    top: 0.04rem;
    width: 0.16rem;
    height: 0.16rem;
  }
  .searchList ul li b img{
    width: 100%;
    height: 100%;
  }
</style>
