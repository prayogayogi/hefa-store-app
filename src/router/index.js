import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Category from "../views/Category.vue";
import SingelDetail from "../views/SingelDetail.vue";
import Cart from "../views/Cart.vue";
import Designer from "../views/Designer.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
    meta: {
      title: "Category",
    },
  },
  {
    path: "/designer",
    name: "Designer",
    component: Designer,
    meta: {
      title: "Designer",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: "/singelDetail/:id",
    name: "SingelDetail",
    component: SingelDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      title: "Cart",
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "NotFound",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
        behavior: "smooth",
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
