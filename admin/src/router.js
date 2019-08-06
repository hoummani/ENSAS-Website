import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Annonces from "./views/Annonces.vue";
import Actualitees from "./views/Actualitees.vue";
import AddActualitee from "./views/actualitee/AddActualitee.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/annonces",
      name: "annonces",
      component: Annonces
    },
    {
      path: "/actualitees",
      name: "actualitees",
      component: Actualitees
    },
    {
      path: "/addActualitee",
      name: "addActualitee",
      component: AddActualitee
    }
  ]
});
