import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import { Loading } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import VueClipboard from "vue-clipboard2";

import axios from 'axios'
// 引入初始化样式的css
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
Vue.use(VueClipboard)


Vue.prototype.$http = axios
Vue.prototype.$Loading = Loading
Vue.prototype.$backList = []
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
