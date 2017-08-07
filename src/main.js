import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI) 

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)




new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
