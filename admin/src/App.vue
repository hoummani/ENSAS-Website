<template>
  <v-app>
    <!--
    <v-app-bar app>
      <Drawer/>
    </v-app-bar>
    -->
    <Drawer />
    <v-content fluid transition="slide-x-transition">
      <v-container>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "./components/core/Drawer";

export default {
  name: "App",
  components: {
    Drawer
  },
  data: () => ({
    //
  })
};
</script>
