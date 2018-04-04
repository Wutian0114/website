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
      <div class="introduce-img">
        <img src="../assets/img/qianzhen.jpg" alt="">
      </div>
    </div>
    <div class="product-func">
      <p class="sec-title">产品功能</p>
      <div class="sec-func-container clearfix">
        <div class="func-item" v-for="item in funcItems" @mouseenter="showItemDesc(item.isShow)" @mouseleave="hideItemDesc(item.isShow)">
          <div :class="['item-desc', {active:isShowItemDesc==item.isShow}]">
            <p v-text="item.desc"></p>
          </div>
          <div class="item-img">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.iconClass"></use>
            </svg>
          </div>
          <h3 v-text="item.title"></h3>
        </div>
      </div>
    </div>
    <div class="main-customer clearfix">
      <p class="sec-title">主要客户</p>
      <div class="customer-logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-aliyun"></use>
        </svg>
        <h4>阿里云</h4>
      </div>
      <div class="customer-info">这里是客户信息这里是客户信息这里是客户信息这里是客户信息这里是客户信息这里是客户信息这里是客户信息这里是客户信息</div>
      <div class="customer-img">
        <img src="../assets/img/aliyun.png" alt="阿里云">
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
// 引入iconfont图标文件
import '../assets/iconfont/iconfont.js'
export default {
  data(){
    return {
      isShowItemDesc: false,
      funcItems: [
        {
          title: "订单管理",
          desc: "订单管理的描述订单管理的描述订单管理的描述订单管理的描述订单管理的描述订单管理的描述订单管理的描述订单管理的描述",
          iconClass: "#icon-dingdan",
          isShow: "order"
        },
        {
          title: "快递管理",
          desc: "快递管理快递管理快递管理快递管理快递管理快递管理快递管理快递管理快递管理快递管理快递管理",
          iconClass: "#icon-yunshuzhongwuliu-xianxing",
          isShow: "express"
        },
        {
          title: "短信通知",
          desc: "短信通知短信通知短信通知短信通知短信通知短信通知短信通知短信通知短信通知短信通知短信通知短信通知",
          iconClass: "#icon-shoujian",
          isShow: "message"
        },
        {
          title: "护照扫描",
          desc: "护照扫描护照扫描护照扫描护照扫描护照扫描护照扫描护照扫描护照扫描护照扫描护照扫描护照扫描护照扫描",
          iconClass: "#icon-businesscard",
          isShow: "passport"
        },
        {
          title: "材料生成",
          desc: "材料生成材料生成材料生成材料生成材料生成材料生成材料生成材料生成材料生成材料生成材料生成",
          iconClass: "#icon-dingdanyichenggong",
          isShow: "materials"
        },
        {
          title: "数据统计",
          desc: "数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计",
          iconClass: "#icon-zhexiantu-xianxing",
          isShow: "charts"
        }
      ]
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    showItemDesc(type){
      this.isShowItemDesc = type;
    },
    hideItemDesc(type){
      this.isShowItemDesc = "";
    }
  }
}
</script>

<style scoped>
.icon {
  width: 6em;
  height: 6em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.title-banner {
  height: 500px;
  box-sizing: border-box;
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
.product-introduce .introduce-img > img {
  width: 581px;
}
.sec-func-container .func-item {
  width: 33.3%;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  float: left;
  position: relative;
  overflow: hidden;
}
.sec-func-container .func-item > h3 {
  text-align: center;
  border: 1px solid #32d28c;
  border-top: 0;
  margin: 0;
  padding: 18px 0;
}
.sec-func-container .func-item > .item-img {
  text-align: center;
  border: 1px solid #32d28c;
  border-bottom: 0;
  padding: 30px 0;
}
.sec-func-container .func-item > .item-desc {
  position: absolute;
  bottom: -120px;
  left: 0;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  color: #ffffff;
  transition: bottom .5s;
}
.sec-func-container .func-item > .item-desc.active {
  bottom: -5px;
}
.sec-func-container .func-item > .item-desc > p {
  background-color: rgba(50,210,140,.7);
  padding: 20px;
  height: 120px;
  box-sizing: border-box;
  margin: 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  transition: 1s;
}
.sec-func-container .func-item > .item-desc.active > p {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.main-customer > div {
  width: 33.3%;
  float: left;
}
.main-customer .customer-logo,
.main-customer .customer-img {
  text-align: center;
}
.main-customer .customer-img > img {
  width: 456px;
}
</style>
