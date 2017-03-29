<template>
  <div class="timeWrap">
    <div class="timeTop">
      <h1>时令食材</h1>
      <div class="timeimg">
          <img src="../images/cai1.png" alt="">
      </div>
      <div class="timesMain">
          <div class="timesTop">
            <dl class="leftC">
              <dt><img src="../images/a11.png" alt=""></dt>
              <dd>黄瓜</dd>
            </dl>
            <dl>
              <dt><img src="../images/a13.png" alt=""></dt>
              <dd>西红柿</dd>
            </dl>
            <dl>
              <dt><img src="../images/a16.png" alt=""></dt>
              <dd>芦笋</dd>
            </dl>
        </div>

        <div class="timesTop bot">
          <dl class="leftC">
            <dt><img src="../images/a12.png" alt=""></dt>
            <dd>生菜</dd>
          </dl>
          <dl>
            <dt><img src="../images/a14.png" alt=""></dt>
            <dd>芹菜</dd>
          </dl>
          <dl>
            <dt><img src="../images/a11.png" alt=""></dt>
            <dd>黄瓜</dd>
          </dl>
        </div>    
      </div>
    </div>
    <div class="timeFoot" @click="home1">
      <img src="../images/return.png" alt="">
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
      home1 (){
       this.$router.push('/home')
      }
    }
  }
</script>
<style scoped>
  .timeWrap,.timeTop{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #F7F7F7;
  }
  .timeTop{
    overflow: auto;
  }
  .timeWrap h1{
    width: 100%;
    height: 0.49rem;
    line-height: 0.49rem;
    text-align: center;
    border-bottom: 1px solid #D6D6D6;
  }
  .timeimg{
    width: 100%;
    height: 2.05rem;
  }
  .timeimg img{
    width: 100%;
    height: 100%;
  }
  .timesMain{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #EAE9E9;
    
  }
  .timesTop{
    width: 100%;
    height: 0.88rem;
    text-align: center;
    display: flex;

  }
  .bot{
    margin-top: 0.6rem;
  }
  .timesTop dl{
    flex:1;
    width: 1.07rem;
    height: 1.36rem;
    margin-top: 0.1rem;
    margin-right: 0.1rem;

  }
  .timesTop dl dt{
    width: 0.9rem;
    height: 0.9rem;
    margin:0 auto;
  }
  .timesTop dl dt img{
    width: 100%;
    height: 100%;
  }
  
  .leftC{
    margin-left: 0.1rem;
  }
  .timesTop dl dd{
    margin-top: 0.08rem;
    font-size: 0.12rem;
  }
  
  .timeFoot{
    height: 0.44rem;
    width: 100%;
    background: #292929;
    position: relative;
  }
  .timeFoot img{
    width: 0.21rem;
    height: 0.23rem;
    display: inline-block;
    position: absolute;
    left: 0.2rem;
    top:0.1rem;
  }
</style>
