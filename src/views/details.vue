<template>
  <div class="container">

    <el-page-header @back="goBack" content="详情页面" title="返回">
    </el-page-header>
    <el-divider></el-divider>
    <div class="slide-image">
      <h3>喜德盛 - 奥运战车纪念款</h3>
      <img src="../assets/image/bike1.png" alt="">
    </div>
    <div class="textcontent">
      <h3>奥运战车纪念款</h3>
      <div class="threebrother">分享: <img src="../assets/image/threebrother.png" alt="">
      </div>
      <div class="jiage"><span>预计价格:</span> ¥ 18800</div>
      <div class="shuifei">税费和运费可能会稍后添加,具体数据取决与所在位置</div>
      <div>
        <h2>商品详情</h2>
        <p>ID: {{ product.id }}</p>
        <p>Name: {{ product.name }}</p>
        <p>Price: {{ product.price }}</p>
        <button @click="submitProduct">提交订单</button>
        <button @click="$router.push('/order')">查看订单</button>
        <p v-if="showSuccessMessage" class="success-message" style="color: red;font-size: 12px;">提交成功！</p>
      </div>
      <div class="jianjie">
        <span>简介</span>
        <el-divider></el-divider>
        <p>喜德盛东京奥运会山地车越野赛纪念款产品,传承奥运战车的优秀品质,
          采用航空级超轻碳纤维技术,先进工艺引领时尚潮流,荣耀传承,胜而不凡!
        </p>
      </div>
      <div class="jianjie">
        <span>颜色和尺寸</span><br><br>
        <el-divider></el-divider>
        <img src="../assets/image/chinahong.png" alt="">
        <div>
          <span>"龙腾" 涂装</span>
          <el-divider></el-divider>
          <p>奥运战车“龙腾”涂装以五星红旗的红黄两色为主基调，
            以一条中国龙贯穿车身，象征龙的传人，龙的精神，给人以醒目的中国元素。</p>
        </div>
        <div>
          <span>奥运品质的优异性能</span>
          <el-divider></el-divider>
          <p>车架采用XDS UD碳纹碳纤维材料，整车净重9.7Kg , 实现超轻量的同时，不失强度和韧性，
            搭配超强配置，无限电控气压前叉，轻量与性能达到绝佳平衡，国际顶级研发水平的竞技级战车，
            “龙腾”涂装，值得珍藏！</p>
        </div>
        <div>
          <span>重量更轻，刚性更强</span>
          <el-divider></el-divider>
          <p>增强式五通，增强踩踏刚性及驱动力传导，减少踩踏力的损失，极细后上叉设计提升车架吸震性，
            有效增强骑乘的舒适性合理的几何设计破风阻设计，令骑行更快速</p>
        </div>
        <!-- test -->


      </div>
    </div>

  </div>

</template>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      product: {
        id: '110520',
        name: '喜德盛-奥运战车',
        price: '18800',
      },
      showSuccessMessage: false,
    };
  },

  methods: {
    ...mapActions(['submitOrder']),

    goBack() {
      this.$router.push('/');
    },
    submitProduct() {
      this.submitOrder(this.product).then(() => {
        // 当提交操作成功后，显示成功消息，并在一段时间后隐藏
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000); // 3秒后自动隐藏消息
      });
    },
  },
}

</script>

<style src="../assets/details.css" scoped></style>
