// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import bus from "./module/bus"
import directive from "./module/directive"
Vue.use(MintUI);

import  "./module/filter"
Vue.config.productionTip = false
import axios from "axios";
Vue.prototype.$http=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data:{
  	bus
  },
  components: { App },
  template: '<App/>'
})
