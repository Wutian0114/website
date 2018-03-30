<template>
  <div>
    <div id="contactUs-sec">
        <div class="footer-contactUs clearfix">
          <dl>
            <dt><a>快速导航</a></dt>
            <dd><a>首页</a></dd>
            <dd><a>汽车销售管理</a></dd>
            <dd><a>签证云</a></dd>
          </dl>
          <dl>
            <dt>联系我们</dt>
            <dd>地址：杭州市滨江区</dd>
            <dd>电话：1111-111111</dd>
            <dd>邮箱：wutian0114@163.com</dd>
          </dl>
        </div>
        <div class="footer-copy-right">Copyright&copy;2018测试科技有限公司</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-contactUs {
  padding: 50px 50px 20px;
  background: #1d253c;
  color: #fff;
}
.footer-contactUs > dl {
  float: left;
  width: 50%;
}
.footer-contactUs > dl dt {
  font-weight: bolder;
  font-size: 18px;
}
.footer-contactUs > dl dd {
  margin: 0;
  font-size: 14px;
}
#contactUs-sec .footer-copy-right {
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  background-color: #222d42;
}
</style>
