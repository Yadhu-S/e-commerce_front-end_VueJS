// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Routes from './router'
import VueRouter from 'vue-router'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import { store } from './store/store'
import VModal from 'vue-js-modal'
import './css/main.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VModal)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router: router,
  template: '<App/>',
  components: {App}
})
