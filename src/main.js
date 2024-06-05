import Vue from 'vue'
import App from './App.vue'
import index from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router: index,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
