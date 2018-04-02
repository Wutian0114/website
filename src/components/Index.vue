<template>
  <div class="">
    <Header></Header>
    <div class="main-content">
      <div id="home-sec">
        <swiper :options="swiperOption" ref="mainSwiper">
          <!-- slides -->
          <swiper-slide><a href="#" class="link-slide img1"></a></swiper-slide>
          <swiper-slide><a href="#" class="link-slide img2"></a></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
      </div>
      <div id="aboutUs-sec" class="clearfix">
        <p class="sec-title">关于我们</p>
        <div class="address-map">地图位置</div>
        <div class="company-info">
          <p>这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。这里是公司的相关信息。</p>
          <p>详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息</p>
        </div>
      </div>
      <div id="partner-sec" class="clearfix">
        <p class="sec-title">合作伙伴</p>
        <ul>
          <li><a href="https://anymod.com/" target="_blank"><img src="../assets/img/anymod.png"></a></li>
          <li><a href="https://chaitin.cn/en/" target="_blank"><img src="../assets/img/chaitin.png"></a></li>
          <li><a href="https://laravel.com/" target="_blank"><img src="../assets/img/laravel.png"></a></li>
          <li><a href="https://vueschool.io/" target="_blank"><img src="../assets/img/vueschool.png"></a></li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data(){
    return {
      swiperOption: {
        loop: true,
        // 分页器
        pagination: {
          el: '.swiper-pagination',
        },
        // 前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  },
  components: {
    Header,
    Footer,
    swiper,
    swiperSlide
  },
  computed: {
    swiper(){
      return this.$refs.mainSwiper.swiper
    }
  },
  mounted(){
    this.swiper.slideTo(3,1000, false)
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
#home-sec {
  padding-top: 50px;
  background-color: rgba(0, 0, 0, .7);
}
#home-sec .swiper-slide {
  height: 500px;
}
#home-sec .swiper-slide > a.link-slide {
  height: 500px;
  display: block;
}
#home-sec .swiper-wrapper a.link-slide.img1 {
  background-color: red;
}
#home-sec .swiper-wrapper a.link-slide.img2 {
  background-color: blue;
}
#aboutUs-sec,
#partner-sec {
  padding: 0 50px;
}
#aboutUs-sec {
  min-height: 500px;
}
#aboutUs-sec .address-map,
#aboutUs-sec .company-info {
  float: left;
  width: 50%;
  box-sizing: border-box;
  padding: 0 10px;
}
#aboutUs-sec .company-info {
  padding-left: 30px;
}
.sec-title {
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  border-bottom: 3px solid #32d28c;
  line-height: 50px;
  text-align: center;
}
#partner-sec {
  min-height: 300px;
}
#partner-sec ul > li {
  float: left;
  width: 25%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
#partner-sec ul > li a {
  vertical-align: middle;
  display: block;
  height: 50px;
}
#partner-sec ul > li img {
  width: 160px;
}

</style>
