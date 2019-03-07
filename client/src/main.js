// created and coded by Paolo Luis G. Lansigan 2018


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router  from './routes/index.js'
import store from './store/store.js'

// Adding semantic-ui to the system
require('semantic-ui-css/semantic.min.css')
require('semantic-ui-css/semantic.min.js')

// configure router

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})

Vue.prototype.urlServer = 'http://localhost:8081'// dev
// Vue.prototype.urlServer = 'https://the-teacher.herokuapp.com'// prod
