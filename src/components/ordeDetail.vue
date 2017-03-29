<template>
    <div class="wrap_detail">
      <div class="detailTop">
        <p><img v-bind:src="img"></p>
        <p>{{food}}</p>
        <p>秋天到了，跟家人朋友一起办个烧烤派对吧。烧烤的食物吃多了不好，外面的烧烤吃了也不放心，不妨利用烤箱在家里制作烧烤，味道也超级棒哦!没有油烟，不用看着火候，只需要腌好食材，放入烤箱烤制即可，想想就馋。</p>
      </div>
      <div class="detailFoot" @click="home1">
        <img src="../images/return.png">
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
    created (){
      this.food = this.$route.query.food;
      this.img = this.$route.query.img
    },
    methods:{
      home1 (){
       this.$router.push('/selectmenu')
      }
    }
  }
</script>
<style scoped>
  .wrap_detail{
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .detailTop{
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .detailTop p:nth-child(1) {
      width: 100%;
      height: 2rem; }
  .detailTop p:nth-child(1) img {
      width: 100%;
      height: 100%; }
  .detailTop p:nth-child(2) {
      margin-top: 0.2rem;
      text-align: center;
      font-size: 0.16rem;
      font-weight: bolder; }
  .detailTop p:nth-child(3) {
      text-indent: 0.2rem;
      margin-left: 0.1rem;
      margin-top: 0.1rem;
      line-height: 0.24rem; }
  .detailFoot{
    height: 0.44rem;
    width: 100%;
    background: #292929;
    position: relative;
  }
  .detailFoot img{
    width: 0.21rem;
    height: 0.23rem;
    display: inline-block;
    position: absolute;
    left: 0.2rem;
    top:0.1rem;
  }
</style>
