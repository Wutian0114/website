<template>
  <div>
    <Header></Header>
    <div class="title-banner">
      <p>签证云服务系统</p>
    </div>
    <div class="product-introduce clearfix">
      <p class="sec-title">产品介绍</p>
      <div class="introduce-info">
        <p>这里是产品的介绍内容这里是产品的介绍内容这里是产品的介绍内容这里是产品的介绍内容这里是产品的介绍内容这里是产品的介绍内容这里是产品的介绍内容这里是产品的介绍内容这里是产品的介绍内容</p>
      </div>
      <div class="introduce-img"></div>
    </div>
    <div class="product-func">
      <p class="sec-title">产品功能</p>
    </div>
    <div class="main-customer">
      <p class="sec-title">主要客户</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.title-banner {
  height: 500px;
  background: url(../assets/img/banner_1.jpg);
  padding-top: 150px;
  text-align: center;
  font-size: 34px;
  color: #fff;
}
.product-introduce,
.product-func,
.main-customer {
  padding: 0 50px;
}
.product-introduce .introduce-info,
.product-introduce .introduce-img {
  width: 50%;
  padding: 0 10px;
  float: left;
  box-sizing: border-box;
}
.product-introduce .introduce-img {
  border: 1px solid #32d28c;
  min-height: 300px;
  border-radius: 10px;
}

</style>
