<template>
  <div class="bi-container"  id="app">
    <div class="wrap_bailingin">
      <header>
        <img src="../../static/images/food13.png" alt="">
      </header>
      <section>
        <p class="tit">蔬菜沙拉</p>
        <dl>
          <dt>
            <img src="../../static/images/food13.png" alt="">
          </dt>
          <dd>
            <p>苹果1321</p>
            <span>2012-03-19</span>
          </dd>
        </dl>
        <p class="tell">
          简介：美妙的节日里，为心爱的她或他做上一份牛排吧，好吃又好看，在来杯红酒，绝对有情调哦！喜欢的不要错过哦！
        </p>
        <div class="text">
          <p>制作时间：<span class="sp">2012-06-08</span></p>
          <span>用餐人数：1-2人</span>
        </div>
        <h1>步骤 <span class="look">点击查看大图</span></h1>
        <ul class="list">
          <li>
            <span>1</span>
            <img src="../../static/images/food2.png" alt="">
            <p>准备耗油、红酒、黑胡椒、干罗列</p>
          </li>
          <li>
            <span>1</span>
            <img src="../../static/images/food2.png" alt="">
            <p>准备耗油、红酒、黑胡椒、干罗列</p>
          </li>
        </ul>
      </section>
    </div>
    <footer class="foot">
      <img src="../../static/images/return.png" @click='path'>
    </footer>
  </div>
</template>
<script>
export default 
{
  name: 'app',
  methods:{
    path(){
      this.$router.push("/bailinglist")
    }
  }
}
</script>

<style>
.bi-container, .wrap_bailingin 
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

header 
{
  font-size: 0.16rem;
  width: 100%;
  height: 2.3rem;
  background: #eee; 
}
header img 
{
  width: 100%;
  height: 100%; 
}

section 
{
  font-size: 0.16rem;
  width: 100%;
  -webkit-flex-grow: 1;
  overflow: hidden;
  padding: 0 0.1rem;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  background: #fafafa; 
}
section .tit 
{
  font-size: 0.2rem;
  font-weight: 700;
  color: #FC5353;
  padding: 0.05rem 0; 
}
section dl 
{
  width: 100%;
  display: block;
  height: 0.6rem;
  padding: 0.05rem 0; 
}
section dl dt 
{
  width: 0.5rem;
  height: 0.5rem;
  float: left;
  padding-right: 0.1rem; 
}
section dl dt img 
{
  width: 100%;
  height: 100%; 
}
section dl dd p 
{
  line-height: 0.25rem;
  color: #666;
  font-weight: bold; 
}
section dl dd span 
{
  line-height: 0.25rem;
  color: #666; 
}
section .tell 
{
  font-size: 0.12rem;
  padding-bottom: 0.05rem;
  margin-top: 0.05rem; 
}
section .text 
{
  width: 100%;
  height: 0.6rem;
  background: #eeeeee;
  border-radius: 0.03rem; 
}
section .text p 
{
  padding: 0 0.1rem; 
}
section .text span 
{
  line-height: 0.3rem;
  padding: 0 0.1rem;
  color: #666; 
}
section .text span:first-child 
{
  padding: 0; 
}
section h1 
{
  width: 100%;
  height: 0.6rem;
  font-size: 0.2rem;
  border-bottom: 1px solid #eeeeee; 
}
section h1 span 
{
  color: #f00;
  font-size: 0.16rem;
  float: right; 
}
section .list 
{
  width: 100%;
  height: auto;
  background: #fafafa; 
}
section .list li 
{
  padding: 0.05rem 0; 
}
section .list li span 
{
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  border: 1px solid #ff0000;
  display: inline-block;
  line-height: 0.25rem;
  text-align: center;
  padding: 0; 
}
section .list li img 
{
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  padding: 0 0.07rem; 
}
section .list li p 
{
  display: inline-block;
  width: 50%; 
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
