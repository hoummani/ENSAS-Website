import Vue from "vue";
import Vuex from "vuex";

//importing store modules

import register from "./store/register";

Vue.use(Vuex);

export default new Vuex.Store({
  /*state: {},
  mutations: {},
  actions: {},
  getters: {}*/
  modules: {
    register
  }
});
