<template>
  <div class="container">
    <div>
      <h2>登录飞鱼</h2>
      <div>
        <span>邮箱/手机</span>
        <input v-model="username" placeholder="请输入邮箱/手机">
      </div>
      <div>
        <span>密码</span>
        <input v-model="password" type="password" placeholder="请输入密码">
        <span>忘记密码</span>
      </div>

      <button @click="login">登录</button>
      <div class="text"><span>新用户? </span> <router-link style="color: black;" to="/register">注册飞鱼账号</router-link> </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.username,
          password: this.password
        });
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/');
        } else {
          alert('账号或密码错误');
        }
      } catch (error) {
        alert('登录失败: ' + error.message);
      }
    }
  }
}
</script>

<style src="@/assets/login.css" scoped></style>
