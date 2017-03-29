<template>
  <div class="aa">
      <Swiper class="swiper" :list='list' :index="demo06_index" :showDescMask='false' :showDots='false' height='100%'>
        <span class='text' @click='home'></span>
      </Swiper>   
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'vux'
const baseList = [
  {
    url: 'javascript:',
    img: '../../static/images/4.png'
  },
  {
    url: 'javascript:',
    img: '../static/images/5.png'
  },
  {
    url: 'javascript:',
    img: '../static/images/6.png'
  }
]
export default {
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    home () {
      this.$router.push('/home')
    }
  },
  data () {
    return {
      value: true,
      title: '测试',
      list: baseList,
      demo06_index: 0,
      demo01_index: 0
    }
  },
  created () {
    // console.log(Swiper)
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped >
  .aa  
  {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .swiper 
  {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .text 
  {
    display: block;
    width: 124px;
    height: 50px;
    position: absolute;
    left: 96px;
    bottom: 20px;
    font-size: 50px;
    z-index: 999999
  }
  .vux-img
  {
    width: 100%;
    height: 100%;
  }
</style>