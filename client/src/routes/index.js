import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

// welcome
import Welcome from '@/components/Welcome.vue'

// login
import login from '@/components/Login.vue'

// product
import products from '@/components/Product/Products'
import newProduct from '@/components/Product/newProduct.vue'
import viewProduct from '@/components/Product/viewProduct.vue'

// orderForm component
import orderForm from '@/components/OrderForm/OrderForm.vue'

// frontPage components
import frontMain from '@/components/frontPage/Main.vue'

Vue.use(Router)

export const routes = [
  {path: '*', redirect: '/Home'},
  {path: '/', name: 'welcome', component: Welcome},
  {path: '/login', name: 'login', component: login},
  {path: '/Admin',
    name: 'Admin',
    component: Main,
    children: [
      {path: 'products', component: products},
      {path: 'newProduct', component: newProduct},
      {path: 'viewProduct/:id', component: viewProduct}
    ]
  },
  {path: '/Home', name: 'Home', component: frontMain},
  {path: '/orderForm', name: 'orderForm', component: orderForm}
]
