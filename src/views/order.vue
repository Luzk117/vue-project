<template>
  <div>
    <el-page-header @back="goBack" content="订单页面" title="返回">
    </el-page-header>
    <el-divider></el-divider>
    <div class="order-container">
      <h2>订单列表</h2>
      <table>
        <thead>
        <tr>
          <td>商品名称</td>
          <td>商品价格</td>
        </tr>
        </thead>
      </table>
      <ul class="order-list">
        <li v-for="item in orderList" :key="item.id" class="order-item">
          <div class="item-details">
            <span>{{ item.name }} </span>
            <span>{{ item.price }}</span>
          </div>
          <button @click="removeOrder(item.id)" class="remove-btn">删除</button>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getOrderData']),
    orderList() {
      return this.getOrderData;
    },
  },
  methods: {
    ...mapActions(['removeOrder']),
    goBack() {
      this.$router.push('/details');
    },
  },


};
</script>

<style src="@/assets/order.css" scoped></style>