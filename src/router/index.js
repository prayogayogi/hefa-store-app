import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import SingelDetail from '../views/SingelDetail.vue'
import Cart from '../views/Cart.vue'
import Designer from '../views/Designer.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

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
    path: '/singelDetail/:id',
    name: 'SingelDetail',
    component: SingelDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
        behavior: 'smooth'
      };
    }
  }
})

export default router
