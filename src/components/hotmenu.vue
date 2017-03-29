
<template>
    <div class="wrapHot">
        <div class="topHot">
          <h1>热门菜谱</h1>
          <div class="mainHot">
            <dl>
              <dt><img src="../images/rens.jpg" alt=""></dt>
              <dd>
                <h4>高考食谱--香菇鸡翅</h4>
                <p>翅膀煮香菇，可将钾硫氨基酸与香菇中的植物纤维发挥相乘效果，对于便秘有效，也可以预防中风及大肠癌。将鸡翅膀与香菇一起烹煮，可使纤维效果加倍，对预防脑中风及大肠癌的效果提高。</p>
              </dd>
            </dl>

            <dl>
              <dt><img src="../images/rens.jpg" alt=""></dt>
              <dd>
                <h4>高考食谱--香菇鸡翅</h4>
                <p>翅膀煮香菇，可将钾硫氨基酸与香菇中的植物纤维发挥相乘效果，对于便秘有效，也可以预防中风及大肠癌。将鸡翅膀与香菇一起烹煮，可使纤维效果加倍，对预防脑中风及大肠癌的效果提高。</p>
              </dd>
            </dl>
            <dl>
              <dt><img src="../images/rens.jpg" alt=""></dt>
              <dd>
                <h4>高考食谱--香菇鸡翅</h4>
                <p>翅膀煮香菇，可将钾硫氨基酸与香菇中的植物纤维发挥相乘效果，对于便秘有效，也可以预防中风及大肠癌。将鸡翅膀与香菇一起烹煮，可使纤维效果加倍，对预防脑中风及大肠癌的效果提高。</p>
              </dd>
            </dl>
          </div>
        </div>
      <div class="hotFoot" @click="home1">
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
  .wrapHot{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    background: #EAE9E9;
  }
  .topHot{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
  }
  .topHot h1{
    height: 0.48rem;
    line-height: 0.48rem;
    text-align: center;
    background: #F6F6F6;
  }
  .mainHot{
    overflow: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    background: #EAE9E9;
  }
  .mainHot dl{
    width: 3.0rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    margin-top: 0.1rem;
    background: #fff;
    margin-top: 0.1rem;
  }
  .mainHot dl dt{
    width: 3.0rem;
    height: 1.68rem;

  }
  .mainHot dl dt img{
    width: 100%;
    height: 100%;
  }
  .mainHot dl dd h4{
    width: 100%;
    height: 0.32rem;
    line-height: 0.32rem;
    color: #FC5353;
    padding-left: 0.1rem;
  }
  .mainHot dl dd p{
    font-size: 0.12rem;
    line-height: 0.24rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }
  .hotFoot{
    height: 0.44rem;
    width: 100%;
    background: #292929;
    position: relative;
  }
  .hotFoot img{
    width: 0.21rem;
    height: 0.23rem;
    display: inline-block;
    position: absolute;
    left: 0.2rem;
    top:0.1rem;
  }
</style>
