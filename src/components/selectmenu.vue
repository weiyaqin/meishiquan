

<template>
  <div class="selectWrap">
    <div class="selectTop">
      <h1>智能选菜</h1>
      <div class="selectMain">
        <ul>
          <li v-for="(data,index) in dataArr" @click="ordeDetail(index)">{{data.name}}</li>
        </ul>
      </div>
  </div>
    <div class="selectFoot" @click="home1">
      <img src="../images/return.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data (){
      return {
         'msg':'',
         'dataArr':[
          {'name':"牛肉",'imgsrc':'../../static/images/food11.png'},
          {'name':"鸡肉",'imgsrc':'../../static/images/rent.png'},
          {'name':"豆制品",'imgsrc':'../../static/images/food9.png'},
          {'name':"水果类",'imgsrc':'../../static/images/a13.png'},
          {'name':"羊肉",'imgsrc':'../../static/images/img1.png'},
          {'name':"猪肉",'imgsrc':'../../static/images/food12.png'},
          {'name':"面食",'imgsrc':'../../static/images/food9.png'},
          {'name':"海鲜",'imgsrc':'../../static/images/w1.png'},
          {'name':"点心",'imgsrc':'../../static/images/food6.png'},
          {'name':"早餐",'imgsrc':'../../static/images/xia.png'},
          {'name':"甜品",'imgsrc':'../../static/images/foods_09.png'},
          {'name':"饮料",'imgsrc':'../../static/images/banner1.png'},
          {'name':"菜类",'imgsrc':'../../static/images/a12.png'},
          {'name':"沙拉",'imgsrc':'../../static/images/food4.png'},
          {'name':"凉菜",'imgsrc':'../../static/images/food13.png'},
          {'name':"主食",'imgsrc':'../../static/images/w3.png'},
          {'name':"蛋奶",'imgsrc':'../../static/images/foods_09.png'},
          {'name':"菌藻类",'imgsrc':'../../static/images/food12.png'},
          {'name':"汤羹",'imgsrc':'../../static/images/food3.png'},
          {'name':"坚果",'imgsrc':'../../static/images/banner2.png'}
         ]
      }
    },
    methods:{
      home1 (){
       this.$router.push('/home')
      },
      ordeDetail (num){
       this.$router.push('/ordeDetail?food='+this.dataArr[num].name+'&img='+this.dataArr[num].imgsrc)
      }
    }
  }
</script>
<style scoped>
  .selectWrap,.selectTop{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #EAE9E9;
  }
  .selectWrap h1{
    width: 100%;
    height: 0.49rem;
    line-height: 0.49rem;
    text-align: center;
    border-bottom: 1px solid #D6D6D6;
    background: #F6F6F6;
  }
  .selectMain{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .selectMain ul{
    list-style: none;
    width: 100%;
    display: flex;
    flex-wrap:wrap;
  }
  .selectMain ul li{
    width: 0.7rem;
    height: 0.7rem;
    background: #F6F6F6;
    line-height: 0.77rem;
    text-align: center;
    margin-left: 0.08rem;
    margin-top: 0.1rem;
  }
  .selectFoot{
    height: 0.44rem;
    width: 100%;
    background: #292929;
    position: relative;
  }
  .selectFoot img{
    width: 0.21rem;
    height: 0.23rem;
    display: inline-block;
    position: absolute;
    left: 0.2rem;
    top:0.1rem;
  }
</style>


