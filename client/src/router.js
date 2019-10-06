import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";

//--->Import views

import Calendar from "./views/Calendar.vue";

import About from "./views/About.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import ChoixFiliere from "./views/ChoixFiliere.vue";
//import Register from "./views/Register.vue";

import QuickRegister from "./views/QuickRegister.vue";
Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: QuickRegister
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/choixFilieres",
      name: "choixFilieres",
      component: ChoixFiliere
    },
    {
      path: "/pfe",
      name: "pfe",
      component: ChoixFiliere
    },
    {
      path: "/ci3a",
      name: "ci3a",
      component: ChoixFiliere
    },
    {
      path: "/ci4a",
      name: "ci4a",
      component: ChoixFiliere
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === "/profile") {
    if (!store.getters.isLoggedIn) {
      next("/login");
    }
  }
  next();
});
export default router;
