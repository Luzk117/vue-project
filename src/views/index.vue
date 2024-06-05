<template>
  <div class="container">
    <!-- 快捷导航 -->
    <div class="shortnav">
      <div class="navcontent">
        <ul>
          <li v-if="!isLoggedIn" @click="$router.push('/login')"> 请先登录</li>
          <li v-else @click="logout">退出登录</li>
          <li> <router-link to="/register">注册</router-link></li>
          <li v-if="isLoggedIn">
            <router-link to="/order">我的订单</router-link>
          </li>
          <li v-if="isLoggedIn"><a href="##">会员中心</a></li>
          <li><a href="##">帮助中心</a></li>
          <li><a href="##">在线客服</a></li>
          <li><a href="##"><span></span>手机版</a></li>
        </ul>
      </div>
    </div>
    <!-- 导航 -->
    <div class="header">
      <div class="logo"><img src="../assets/image/logo.png"></div>
      <div class="nav">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><a href="##">公路</a></li>
          <li><a href="##">山地</a></li>
          <li><a href="##">折叠</a></li>
          <li><a href="##">电助力</a></li>
          <li><a href="##">休闲/通勤</a></li>
          <li><a href="##">配件</a></li>
          <li><a href="##">装备</a></li>
        </ul>
      </div>
      <div class="search">
        <span></span>
        <input type="text">

      </div>
      <div class="car">
        <span></span>
        <span>2</span>
      </div>
    </div>
    <!-- banner -->
    <div class="banner">
      <div class="bannercontent">
        <ul class="slide-nav">
          <li><a href="#">XDS/喜德盛</a>
            <div class="second-menu">
              <dl>
                <dd>山地车</dd>
                <dt><a href="#">纪念版系列</a></dt>
                <dt><a href="#">山霸系列</a></dt>
                <dt><a href="#">逐日系列</a></dt>
                <dt><a href="#">女性系列</a></dt>
              </dl>
              <dl>
                <dd>公路车</dd>
                <dt><a href="##">AD系列</a></dt>
                <dt><a href="##">RT系列</a></dt>
                <dt><a href="##">RC系列</a></dt>
                <dt><a href="##">平把公路车系列</a></dt>
              </dl>
              <dl>
                <dd>助力&锂电车</dd>
                <dt><a href="##">山地助力车</a></dt>
                <dt><a href="##">城市锂电车</a></dt>
                <dt><a href="##">城市助力车</a></dt>
              </dl>
              <dl>
                <dd>青少年系列</dd>
                <dt><a href="##">青少年车</a></dt>
              </dl>
              <dl>
                <dd>定制</dd>
                <dt><a href="##">DIY定制</a></dt>
              </dl>
            </div>
          </li>
          <li><a href="#">GIANT/捷安特</a></li>
          <li><a href="#">MERIDA/美利达</a></li>
          <li><a href="#">Specialized/闪电</a></li>
          <li><a href="#">TREK/崔克</a></li>
          <li><a href="#">DEC4THLON/迪卡侬</a></li>
          <li><a href="#">PARDUS/瑞豹</a></li>
          <li><a href="#">TRINX/千里达</a></li>
          <li><a href="#">Radon/坎普</a></li>
          <li><a href="#">Phoenix/凤凰</a></li>
          <li><a href="#">FOREVER/永久</a></li>
          <li><a href="#">FLYING PIGEON/飞鸽</a></li>

        </ul>
        <div class="carousel">
          <img :src="data[currentIndex].url" />
          <button class="next" @click="nextImage">&gt;</button>
          <button class="prev" @click="prevImage">&lt;</button>
          <ul class="carousel-indicators">
            <li v-for="(item, index) in data" :key="index" :class="{ active: currentIndex === index }"
                @mouseenter="changeImage(index)"></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 推荐页 -->
    <div class="recommend">
      <div class="types">
        <div class="texts">
          <h3>山地自行车推荐</h3><span><a href="##">查看更多>></a></span>
        </div>
        <div class="pictures">

          <div class="picture" @click="handleClick">

            <img src="../assets/image/bike1.png" alt="">
            <p>TCR Advanced SL 0-DA</p>
            <p>¥ 88888</p>


          </div>
          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
        </div>
      </div>
      <div class="types">
        <div class="texts">
          <h3>公路自行车推荐</h3><span><a href="##">查看更多>></a></span>
        </div>
        <div class="pictures">

          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
        </div>
      </div>
      <div class="types">
        <div class="texts">
          <h3>折叠自行车推荐</h3><span><a href="##">查看更多>></a></span>
        </div>
        <div class="pictures">

          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
        </div>
      </div>
      <div class="types">
        <div class="texts">
          <h3>锂电助力车推荐</h3><span><a href="##">查看更多>></a></span>
        </div>
        <div class="pictures">

          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
        </div>
      </div>
      <div class="types">
        <div class="texts">
          <h3>青少年车推荐</h3><span><a href="##">查看更多>></a></span>
        </div>
        <div class="pictures">

          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
          <div class="picture">
            <a href="##">
              <img src="../assets/image/bike1.png" alt="">
              <p>TCR Advanced SL 0-DA</p>
              <p>¥ 88888</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="Fline"></div>
    <!-- 服务栏 -->
    <div class="service">
      <div class="servicecontent">
        <p>客户服务</p>
        <div>
          <a href="##"><img src="../assets/image/在线客服.png" alt=""></a>
          <a href="##"><img src="../assets/image/问题反馈.png" alt=""></a>
        </div>


      </div>
      <div class="servicecontent">
        <p>关注我们</p>
        <div>
          <a href="##"><img src="../assets/image/公众号.png" alt=""></a>
          <a href="##"><img src="../assets/image/微博.png" alt=""></a>
        </div>

      </div>
      <div class="servicecontent">
        <p>下载APP</p>
        <div class="APP">
          <img src="../assets/image/二维码.png" alt="">
          <div class="app">
            扫描二维码 <br> 立马下载APP
            <a href="##"><button>下载页面</button></a>
          </div>
        </div>

      </div>
      <div class="servicecontent">
        <p>服务热线</p>
        <div class="tel">
          <p>400-0000-000</p>
          <p>周一至周日 8:00-18:00</p>
        </div>

      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="footercontent">
        <div class="top">
          <div><img src="../assets/image/footer1.png"> <span>价格合理</span></div>
          <div><img src="../assets/image/footer2.png"> <span>物流快捷</span></div>
          <div><img src="../assets/image/footer3.png"> <span>品质保障</span></div>
        </div>
        <div class="bottom">

          <div>
            <ul>
              <li><a href="##">关于我们</a></li>
              <li><a href="##">帮助中心</a></li>
              <li><a href="##">售后服务</a></li>
              <li><a href="##">配送与验收</a></li>
              <li><a href="##">商务合作</a></li>
              <li><a href="##">搜索推荐</a></li>
              <li><a href="##">友情链接</a></li>
            </ul>
          </div>
          <span>CopyRight @ 飞鱼商城</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { url: require('../assets/image/bike1.png') },
        { url: require('../assets/image/bike2.png') },
        { url: require('../assets/image/bike3.png') },
        { url: require('../assets/image/bike4.png') },
        { url: require('../assets/image/bike5.png') },
        { url: require('../assets/image/bike6.png') },
        { url: require('../assets/image/bike7.png') },
      ],
      currentIndex: 0,
      timeId: null,
      isLoggedIn: false,
    };
  },
  computed: {
    currentImage() {
      return this.data[this.currentIndex].url;
    },
  },
  //生命周期钩子页面创建完成浏览器挂在也面前执行
  created() {
    //获取token值(注册时生成)
    const token = localStorage.getItem('token');
    //转化为布尔值赋给isLoggedIn
    this.isLoggedIn = !!token;
  },
  methods: {
    //轮播
    nextImage() {
      this.currentIndex++;
      if (this.currentIndex >= this.data.length) {
        this.currentIndex = 0;
      }
    },
    prevImage() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.data.length - 1;
      }
    },
    changeImage(index) {
      this.currentIndex = index;
    },
    startCarousel() {
      this.timeId = setInterval(() => {
        this.nextImage();
      }, 1500);
    },
    stopCarousel() {
      clearInterval(this.timeId);
    },
    //登出
    logout() {
      localStorage.removeItem('token');
      // localStorage.removeItem('registeredUser');
      this.isLoggedIn = false;
    },
    handleClick() {

      if (this.isLoggedIn) {
        // 如果已登录，则进行路由跳转
        this.$router.push("/details");
      } else {
        // 如果未登录，则显示提示窗口
        alert("请先登录");
      }
    },



  },


  mounted() {
    this.startCarousel();
    const carouselElement = this.$el.querySelector('.carousel');
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', () => {
        this.stopCarousel();
      });
      carouselElement.addEventListener('mouseleave', () => {
        this.startCarousel();
      });
    }
  }
};
</script>

<style src="../assets/index.css" scoped></style>