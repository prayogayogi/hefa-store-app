import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import SingelDetail from '../views/SingelDetail.vue'
import Cart from '../views/Cart.vue'
import Designer from '../views/Designer.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/designer',
    name: 'Designer',
    component: Designer
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/singelDetail',
    name: 'SingelDetail',
    component: SingelDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
