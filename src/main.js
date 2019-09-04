import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import './assets/material-icons.css'
import Loading from 'muse-ui-loading'
import Axios from 'axios'

Vue.use(MuseUI)
Vue.use(Loading)

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'https://localhost:5001/'// 配置你的接口请求地址
Axios.defaults.headers.get['Content-Type'] = 'application/json'// 配置请求头信息。

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  /* 路由发生改变修改页面的title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

