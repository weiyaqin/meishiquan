<template>
	<div class="zhuce">
	  <div class="top">
		  <header>
			  <ul>
				  <li @click='path'>
					  <img src="../../static/images/jiantou.png" alt="加载错误">
				  </li>
				  <li>注册</li>
				  <li>
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
				  <li @click='zhuceAdd'>注册</li>
			  </ul>
		  </div>
	  </div>
	  <footer>
		  <img src="../../static/images/return.png" alt="加载错误"  @click='path'>
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
    path(){
      this.$router.push('/my')
    },
    zhuceAdd(){
      var _this = this
      this.$http({
        url:'http://localhost:8090/zhuce?name='+_this.name,
        method:"GET"
      }).then(function(resp){
        console.log(resp)
        if(resp.data.length){
          alert("sdjfjk")
          return false
          // $scope.name="用户名已被占用，请重新输入"
        }else{
          this.$http({
            url:'http://localhost:8090/zhuceAdd?name='+_this.name+'&pwd='+_this.pwd,
            method: "GET"
          }).then(function(){
            _this.$router.push('/my')
          })
        }
      })
    }
  }
}
</script>

<style>

/*公共页*/
* {
  padding: 0;
  margin: 0; 
  list-style: none

}
body, html 
{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff; 
}

html 
{
  font-size: 100px; 
}

body 
{
  font-family: "Microsoft YaHei"; 
}

.bigContainer 
{
  width: 100%;
  height: 100%; 
}

.container 
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

.main 
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

.footer 
{
  width: 100%;
  height: 0.44rem;
  background: #353535; 
}
.footer .list 
{
	width: 100%;
	height: 100%; 
}
.footer .list ul 
{
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -o-flex;
  display: ms-flex;
  width: 100%;
  height: 100%;
  overflow: hidden; 
}
.footer .list ul li 
{
	-webkit-flex: 1;
	flex: 1;
	text-align: center; 
}
.footer .list ul li i 
{
  color: #fff;
  margin-top: 0.1rem; 
}
.footer .list ul li a 
{
  color: #fff;
  display: block; 
}

.zhuce 
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
  background: #EAE9E9; 
}
.zhuce .top 
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
	flex: 1; 
}
.zhuce .top header 
{
  width: 100%;
  height: 0.44rem;
  margin-bottom: 0.1rem;
  background: #fff; 
}
.zhuce .top header ul 
{
	width: 100%;
	height: 100%;
	display: -webkit-flex; 
}
.zhuce .top header ul li 
{
  text-align: center;
  line-height: 0.44rem; 
}
.zhuce .top header ul li img 
{
	width: 0.3rem;
	height: 0.3rem;
	margin-top: 0.05rem; 
}
.zhuce .top header ul li:not(:nth-child(2)) 
{
	width: 0.44rem;
	height: 100%; 
}
.zhuce .top header ul li:nth-child(2) 
{
flex: 1;
font-size: 0.2rem; 
}
.zhuce .top .main 
{
  width: 100%;
  height: 100%; 
}
.zhuce .top .main ul 
{
	width: 100%;
	height: 100%; 
}
.zhuce .top .main ul li:nth-child(1) 
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
.zhuce .top .main ul li:nth-child(1) span 
{
	width: 0.44rem;
	color: #FC5353; 
}
.zhuce .top .main ul li:nth-child(1) input 
{
	flex: 1;
	border: none; 
}
.zhuce .top .main ul li:nth-child(2) 
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
.zhuce .top .main ul li:nth-child(2) span 
{
	width: 0.44rem;
	color: #FC5353; 
}
.zhuce .top .main ul li:nth-child(2) input 
{
	flex: 1;
	border: none; 
}
.zhuce .top .main ul li:nth-child(3) 
{
  width: 90%;
  height: 0.3rem;
  margin: 0.15rem;
  background: #FC5353;
  text-align: center;
  line-height: 0.3rem;
  color: #fff; 
}
.zhuce footer 
{
	height: 0.44rem;
	background: #292929;
	position: relative; 
}
.zhuce footer img 
{
  position: absolute;
  width: 0.23rem;
  height: 0.21rem;
  top: 0.12rem;
  left: 0.2rem; 
}

</style>
