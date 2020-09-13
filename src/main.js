import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import { extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import tr from 'vee-validate/dist/locale/tr.json';

import 'bootstrap/dist/css/bootstrap.css'


Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('tr', tr);
import './styles/app.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')