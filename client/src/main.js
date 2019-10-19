import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";

import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCOcy6Ko9Bymp_Ur5byQbc45nLhABuO7Zc"
  }
});

export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
