import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";

import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


import 'bootstrap/dist/css/bootstrap.css'



import './styles/app.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')