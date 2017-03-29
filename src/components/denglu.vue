<template>
  <div class="denglu">
	<div class="top">
	  <header>
		<ul>
		  <li>
			<img src="../../static/images/jiantou.png" alt="加载错误"  @click='path'>
		  </li>
		  <li>登录</li>
		  <li>
			<img src="../../static/images/zhuce.png" alt="加载错误"  @click='zhuce'>
		  </li>
		</ul>
	  </header>
	  <div class="main">
	    <ul>
		  <li>
		    <span>账号：</span>
			<input type="text" placeholder="邮箱手机号昵称" v-model="name">
		  </li>
		  <li>
			<span>密码：</span>
			<input type="password" placeholder="请输入密码" v-model="pwd">
		  </li>
		  <li @click="success">登录</li>
		  <li></li>
		  <li>使用第三方账号登录</li>
		  <li>
			<img src="../../static/images/qq.png" alt="加载错误">
			<img src="../../static/images/taobao.png" alt="加载错误">
		  </li>
		  <li>使用第三方账号一键登录，购物更方便</li>
		</ul>
	  </div>
	</div>
	<footer>
	  <img src="../../static/images/return.png" alt="加载错误" @click='path'>
	</footer>
  </div>
</template>
<script>
export default 
{
  name: 'app',
  data(){
    return {
      name:'',
      pwd: ''
    }
  },
  methods: {
    path() {
      this.$router.push('my')
    },
    success (){
      // var _this = this
      this.$http({
        url:'http://127.0.0.1:8090?name='+this.name+'&pwd='+this.pwd,
        method:"GET"
      }).then(function(res){
        console.log(res.data[0].user)
        if(res.data[0].user && res.data[0].pwd){   //记住账号密码  并且跳入my页
          var ls = window.localStorage;
              ls.setItem("user",this.name)
              ls.setItem("pwd",this.pwd)
          this.$router.push('/my')
        }else{    //渲染注册页
          this.$router.push('/denglu')
        }
      })
     // this.$http({
     //    url:"/api/data",
     //    method:"GET"
     //  }).then(function(res){
     //    console.log(res.body.data.data)
     //     if(this.name==res.body.data.data.user && this.pwd==res.body.data.data.pwd){
     //        this.$router.push('/success')
     //     }else{
     //       alert("信息错误，请重新输入")
     //      this.$router.push('/denglu')
     //      this.name=''
     //      this.pwd=''
     //     }
     //  })
    },
    zhuce(){
      this.$router.push('/zhuce')
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
.denglu 
{
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
  background: #EAE9E9; 
}
.denglu .top 
{
   flex: 1; 
}
.denglu .top header 
{
  width: 100%;
  height: 0.44rem;
  margin-bottom: 0.1rem;
  background: #fff; 
}
.denglu .top header ul 
{
  width: 100%;
  height: 100%;
  display: -webkit-flex; 
}
.denglu .top header ul li 
{
  text-align: center;
  line-height: 0.44rem; 
}
.denglu .top header ul li img 
{
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0.05rem; 
}
.denglu .top header ul li:not(:nth-child(2)) 
{
  width: 0.44rem;
  height: 100%; 
}
.denglu .top header ul li:nth-child(2) 
{
  flex: 1;
  font-size: 0.2rem; 
}
.denglu .top .main 
{
  width: 100%;
  height: 100%; 
}
.denglu .top .main ul 
{
  width: 100%;
  height: 100%; 
}
.denglu .top .main ul li:nth-child(1) 
{
  width: 90%;
  height: 0.3rem;
  line-height: 0.3rem;
  margin-top: 0.1rem;
  margin-left: 0.15rem;
  padding-left: 0.1rem;
  background: #fff;
  border-radius: 0.1rem 0.1rem 0 0;
  display: -webkit-flex; 
}
.denglu .top .main ul li:nth-child(1) span 
{
  width: 0.44rem;
  color: #FC5353; 
}
.denglu .top .main ul li:nth-child(1) input 
{
  flex: 1;
  border: none; 
}
.denglu .top .main ul li:nth-child(2) 
{
  width: 90%;
  height: 0.3rem;
  line-height: 0.3rem;
  margin-bottom: 0.1rem;
  margin-left: 0.15rem;
  background: #fff;
  padding-left: 0.1rem;
  border-radius: 0 0 0.1rem 0.1rem;
  display: -webkit-flex; 
}
.denglu .top .main ul li:nth-child(2) span 
{
  width: 0.44rem;
  color: #FC5353; 
}
.denglu .top .main ul li:nth-child(2) input 
{
  flex: 1;
  border: none; 
}
.denglu .top .main ul li:nth-child(3) 
{
  width: 90%;
  height: 0.3rem;
  margin: 0.15rem;
  background: #FC5353;
  text-align: center;
  line-height: 0.3rem;
  color: #fff; 
}
.denglu .top .main ul li:nth-child(4) 
{
  width: 90%;
  height: 0.2rem;
  margin: 0.15rem;
  text-align: right;
  line-height: 0.2rem;
  text-decoration: underline; 
}
.denglu .top .main ul li:nth-child(5) 
{
  width: 100%;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center; 
}
.denglu .top .main ul li:nth-child(6) 
{
  display: -webkit-flex;
  margin-top: 0.1rem; 
}
.denglu .top .main ul li:nth-child(6) img 
{
  width: 0.37rem;
  height: 0.37rem;
  margin-left: 25%; 
}
.denglu .top .main ul li:nth-child(7) 
{
  margin: 0.2rem;
  text-align: center; 
}
.denglu footer 
{
  height: 0.44rem;
  background: #292929;
  position: relative; 
}
.denglu footer img 
{
  position: absolute;
  width: 0.23rem;
  height: 0.21rem;
  top: 0.12rem;
  left: 0.2rem; 
  }
</style>
