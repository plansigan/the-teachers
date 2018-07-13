import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import products from '@/components/Product/Products'
import newProduct from '@/components/Product/newProduct.vue'
import manageProductTypes from '@/components/ProductType/ProductTypes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/newProduct',
      name: 'newProduct',
      component: newProduct
    },
    {
      path:'/manageProductTypes',
      name:'manageProductTypes',
      component: manageProductTypes
    }
  ]
})
