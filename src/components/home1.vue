<template>
  <div class="wrapHome">
     <div class="indexHead">
        <swiper :list="banner" height="2rem" :showDescMask="false" dotsPosition="center" loop auto :interval="1000"></swiper>
      </div>
      <div class="indexMenu">
        <dl @click="order">
          <dt><img src="../images/list1.png" alt="加载错误"></dt>
          <dd>排行榜</dd>
        </dl>
        <dl @click="hotmenu">
          <dt><img src="../images/list3.png" alt="加载错误"></dt>
          <dd>热门菜谱</dd>
        </dl>
        <dl @click="timefood">
          <dt><img src="../images/list2.png" alt="加载错误"></dt>
          <dd>时令食材</dd>
        </dl>
        <dl @click="selectmenu">
          <dt><img src="../images/list3.png" alt="加载错误"></dt>
          <dd>智能选菜</dd>
        </dl>
      </div>
      <div class="indexWork">
        <ul>
          <li @click="mother">孕妇</li>
          <li @click="writeWorker">白领</li>
          <li @click="oldman">老人</li>
          <li @click="children">白领</li>
        </ul>
      </div>
      <div class="indexList">
        <div class="scroll">
        <h1>菜谱专辑</h1>
        <dl class="listdl">
          <dt><img src="../images/img1.gif" alt=""></dt>
          <dd>
            <h3>看世界杯绝佳得下酒菜</h3>
            <p><span>by幻月飘雪</span></p>
            <h6>6月13日，迎来了大多数爷们所关注的世界杯,甭管你是否是球迷也要一起去看。</h6>
          </dd>
        </dl>
        <dl class="listdl">
          <dt><img src="../images/img1.gif" alt=""></dt>
          <dd>
            <h3>看世界杯绝佳得下酒菜</h3>
            <p><span>by幻月飘雪</span></p>
            <h6>6月13日，迎来了大多数爷们所关注的世界杯,甭管你是否是球迷也要一起去看。</h6>
          </dd>
        </dl>
        <dl class="listdl">
          <dt><img src="../images/img1.gif" alt=""></dt>
          <dd>
            <h3>看世界杯绝佳得下酒菜</h3>
            <p><span>by幻月飘雪</span></p>
            <h6>6月13日，迎来了大多数爷们所关注的世界杯,甭管你是否是球迷也要一起去看。</h6>
          </dd>
        </dl>
        <dl class="listdl">
          <dt><img src="../images/img1.gif" alt=""></dt>
          <dd>
            <h3>看世界杯绝佳得下酒菜</h3>
            <p><span>by幻月飘雪</span></p>
            <h6>6月13日，迎来了大多数爷们所关注的世界杯,甭管你是否是球迷也要一起去看。</h6>
          </dd>
        </dl>
        <dl class="listdl">
          <dt><img src="../images/img1.gif" alt=""></dt>
          <dd>
            <h3>看世界杯绝佳得下酒菜</h3>
            <p><span>by幻月飘雪</span></p>
            <h6>6月13日，迎来了大多数爷们所关注的世界杯,甭管你是否是球迷也要一起去看。</h6>
          </dd>
        </dl>
        </div>
      </div>
    </div>
</template>

<script>
  import {Swiper} from 'vux'
  export default {
    components: {
      Swiper
    },
    data (){
      return {
         'msg':'',
         'banner':[
            {'img':'../../static/images/banner1.png'},
            {'img':'../../static/images/banner2.png'},
            {'img':'../../static/images/banner3.png'}
         ]
      }
    },
    methods:{
      order (){
       this.$router.push('/order')
      },
      hotmenu (){
       this.$router.push('/hotmenu')
      },
      timefood (){
       this.$router.push('/timefood')
      },
      selectmenu (){
       this.$router.push('/selectmenu')
      },
      writeWorker (){
       this.$router.push('/writeWorker')
      },
      mother (){
       this.$router.push('/mother')
      },
      oldman (){
       this.$router.push('/oldman')
      },
      children (){
       this.$router.push('/children')
      }
    }
  }

</script>
<style scoped>
  .wrapHome{
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex:1;
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
    height: 0.72rem;
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
    width: 100%;
    height: 2.5rem;
    overflow: hidden;
    margin-left: 0.1rem;
    margin-right: 0.1rem; 
  }
  .scroll{
    width: 100%;
    height: 100%;
    overflow: auto;
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
   
</style>
