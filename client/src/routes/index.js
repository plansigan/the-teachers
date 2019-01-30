import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
// import middlewareAuth from '@/middleware/index.js'

// welcome
import Welcome from '@/components/Welcome.vue'

// login
import login from '@/components/Login.vue'

//register
import register from '@/components/register.vue'

// product
import products from '@/components/Product/Products'
import newProduct from '@/components/Product/newProduct.vue'
import viewProduct from '@/components/Product/viewProduct.vue'

//site 
import Site from '@/components/Site/Site.vue'

// orderForm component
import orderForm from '@/components/OrderForm/OrderForm.vue'

// frontPage components
import frontMain from '@/components/frontPage/Main.vue'

//store 
import store from '../store/store'

Vue.use(Router)

export const routes = [
  {path: '*', redirect: '/Home'},
  {path: '/', name: 'welcome', component: Welcome},
  {path: '/register', name: 'register', component: register},
  {path: '/login', name: 'login', component: login},
  {path: '/admin',
    name: 'admin',
    component: Main,
    beforeEnter(to,from,next){
      if(store){
        next()
      } else {
        next('/login')
      }
    },
    children: [
      // Product
      {path: 'products', component: products},
      {path: 'newProduct', component: newProduct},
      {path: 'viewProduct/:id', component: viewProduct},
      // Site
      {path: 'Site', component: Site}
    ]
  },
  {path: '/Home', name: 'Home', component: frontMain},
  {path: '/orderForm', name: 'orderForm', component: orderForm}
]
