<template>
  <div>
    <el-page-header @back="goBack" content="注册页面" title="返回">
    </el-page-header>
    <el-divider></el-divider>
    <div class="container">
      <div>
        <h2>注册飞鱼</h2>
        <div>
          <span>邮箱/手机</span>
          <input v-model="username">
        </div>
        <div>
          <span>密码</span>
          <input v-model="password" type="password">
        </div>
        <div>
          <span>再次输入密码</span>
          <input v-model="confirmPassword" type="password">
        </div>
        <button @click="register">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    async register() {
      if (this.username && this.password && this.password === this.confirmPassword) {
        try {
          const response = await axios.post('http://localhost:3000/register', {
            username: this.username,
            password: this.password
          });
          if (response.data.success) {
            alert('注册成功');
          } else {
            alert('注册失败: ' + response.data.message);
          }
        } catch (error) {
          alert('注册失败: ' + error.message);
        }
      } else if (this.username && this.password && this.confirmPassword && this.password !== this.confirmPassword) {
        alert('两次输入密码不一致');
      } else {
        alert('请填写完整的注册信息');
      }
    },
    goBack() {
      this.$router.push('/');
    }
  }
}
</script>

<style src="../assets/register.css" scoped></style>
