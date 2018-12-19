import Vuex from 'vuex'
import Vue from 'vue'

//import modules
import product from './modules/product.js'
import productType from './modules/productType.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    productType
  }
})
