import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import '@/styles/index.scss' // global css
import router from './router'

import '@/utils'

Vue.use(ElementUI);

// 注意：IdentifyCode 要保持和之前咱们封装组件的 index.js 一样
import IdentifyCode from 'vue-identifycode' // 引入包
Vue.use(IdentifyCode)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')