<template>
  <div class="bl-container" id="app">
    <div class="wrap_bailinglist">
      <div class="bl-header">
        减肥
      </div>
      <div class="bl-main">
        <ul class="nav-list">
          <li class="active">默认</li>
          <li>最新</li>
          <li>推荐</li>
        </ul>
        <div class="iscroll">
          <div class="count">
            <div class="div" @click='xiangqing'>
              <dl class="top">
                <dt><img src="../../static/images/food11.png" alt=""></dt>
                <dd>
                  <p>东江酿豆腐</p>
                  <span><i><img src="../../static/images/yanjing.png" alt=""></i>8902</span>
                  <span><i><img src="../../static/images/xin.png" alt=""></i>781</span>
                </dd>
              </dl>
              <dl class="btm">
                <dt><img src="../../static/images/food11.png" alt=""></dt>
                <dd>美食情书</dd>
              </dl>
            </div>
            <div class="div">
              <dl class="top">
                <dt><img src="../../static/images/food13.png" alt=""></dt>
                <dd>
                  <p>东江酿豆腐</p>
                  <span><i><img src="../../static/images/yanjing.png" alt=""></i>8902</span>
                  <span><i><img src="../../static/images/xin.png" alt=""></i>781</span>
                </dd>
              </dl>
              <dl class="btm">
                <dt><img src="../../static/images/food13.png" alt=""></dt>
                <dd>美食情书</dd>
              </dl>
            </div>
            <div class="div">
              <dl class="top">
                <dt><img src="../../static/images/food12.png" alt=""></dt>
                <dd>
                  <p>东江酿豆腐</p>
                  <span><i><img src="../../static/images/yanjing.png" alt=""></i>8902</span>
                  <span><i><img src="../../static/images/xin.png" alt=""></i>781</span>
                </dd>
              </dl>
              <dl class="btm">
                <dt><img src="../../static/images/food12.png" alt=""></dt>
                <dd>美食情书</dd>
              </dl>
            </div>
            <div class="div">
              <dl class="top">
                <dt><img src="../../static/images/food14.png" alt=""></dt>
                <dd>
                  <p>东江酿豆腐</p>
                  <span><i><img src="../../static/images/yanjing.png" alt=""></i>8902</span>
                  <span><i><img src="../../static/images/xin.png" alt=""></i>781</span>
                </dd>
              </dl>
              <dl class="btm">
                <dt><img src="../../static/images/food14.png" alt=""></dt>
                <dd>美食情书</dd>
              </dl>
            </div>
            <div class="div">
              <dl class="top">
                <dt><img src="../../static/images/food13.png" alt=""></dt>
                <dd>
                  <p>东江酿豆腐</p>
                  <span><i><img src="../../static/images/yanjing.png" alt=""></i>8902</span>
                  <span><i><img src="../../static/images/xin.png" alt=""></i>781</span>
                </dd>
              </dl>
              <dl class="btm">
                <dt><img src="../../static/images/food13.png" alt=""></dt>
                <dd>美食情书</dd>
              </dl>
            </div>
            <div class="div">
              <dl class="top">
                <dt><img src="../../static/images/food12.png" alt=""></dt>
                <dd>
                  <p>东江酿豆腐</p>
                  <span><i><img src="../../static/images/yanjing.png" alt=""></i>8902</span>
                  <span><i><img src="../../static/images/xin.png" alt=""></i>781</span>
                </dd>
              </dl>
              <dl class="btm">
                <dt><img src="../../static/images/food12.png" alt=""></dt>
                <dd>美食情书</dd>
              </dl>
            </div>
            <div class="div">
              <dl class="top">
                <dt><img src="../../static/images/food14.png" alt=""></dt>
                <dd>
                <p>东江酿豆腐</p>
                  <span><i><img src="../../static/images/yanjing.png" alt=""></i>8902</span>
                  <span><i><img src="../../static/images/xin.png" alt=""></i>781</span>
                </dd>
              </dl>
              <dl class="btm">
                <dt><img src="../../static/images/food14.png" alt=""></dt>
                <dd>美食情书</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
     <img src="../../static/images/return.png" alt="" @click='path'>
    </footer>
  </div>
</template>
<script>
export default 
{
  name: 'app',
  methods:{
    path(){
      this.$router.push('/writeWorker')
    },
    xiangqing(){
      this.$router.push("/bailingin")
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
.bl-container, .wrap_bailinglist 
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

.bl-header 
{
  width: 100%;
  height: 0.54rem;
  font-size: 0.22rem;
  line-height: 0.54rem;
  text-align: center;
  border: 1px solid #cccccc; 
}

.bl-main 
{
  -webkit-flex-grow: 1;
  overflow: hidden;
  display: -webkit-flex;
  -webkit-flex-direction: column; 
}
.bl-main .nav-list 
{
  width: 100%;
  height: 0.54rem; 
}
.bl-main .nav-list li 
{
  width: 33%;
  height: 0.54rem;
  line-height: 0.54rem;
  text-align: center;
  font-size: 0.16rem;
  float: left;
  border-left: 1px solid #cccccc; 
}
.bl-main .nav-list li:nth-of-type(1) 
{
  border: none; 
}
.bl-main .nav-list li.active 
{
  border-bottom: 2px solid #ff0000; 
}
.bl-main .iscroll 
{
  width: 100%;
  -webkit-flex: 1;
  overflow: hidden; 
}
.bl-main .iscroll .count 
{
  padding: 2%;
  width: 96%;
  height: 9.5rem; 
}
.bl-main .iscroll .count .div 
{
  width: 47%;
  float: left;
  margin: 1%; 
}
.bl-main .iscroll .count .div .top 
{
  width: 100%;
  height: 1.9rem; 
}
.bl-main .iscroll .count .div .top dt 
{
  width: 100%;
  height: 1.45rem; 
}
.bl-main .iscroll .count .div .top dt img 
{
  width: 100%;
  height: 100%; 
}
.bl-main .iscroll .count .div .top dd p 
{
  font-size: 0.14rem;
  color: deeppink;
  text-indent: 0.05rem; 
}
.bl-main .iscroll .count .div .top dd span 
{
  display: inline-block;
  width: 45%;
  height: 0.4rem; 
}
.bl-main .iscroll .count .div .top dd span i 
{
  width: 0.23rem;
  height: 0.18rem;
  display: inline-block;
  margin: 0.1rem 0.05rem 0 0.05rem; 
}
.bl-main .iscroll .count .div .top dd span i img 
{
  width: 100%;
  height: 70%; 
}
.bl-main .iscroll .count .div .btm 
{
  width: 100%;
  height: 0.4rem;
  background: #eeeeee;
  padding: 0.04rem; 
}
.bl-main .iscroll .count .div .btm dt 
{
  width: 0.4rem;
  float: left;
  height: 0.3rem; 
}
.bl-main .iscroll .count .div .btm dt img 
{
  width: 100%;
  height: 100%;
  padding-right: 0.05rem; 
}
.bl-main .iscroll .count .div .btm dd 
{
  color: #666; 
}

footer 
{
  height: 0.44rem;
  background: #292929;
  position: relative; 
}
footer img 
{
  position: absolute;
  width: 0.23rem;
  height: 0.21rem;
  top: 0.12rem;
  left: 0.2rem; 
}
</style>
