<template>
  <v-app>
    <!--
    <v-app-bar app>
      <Drawer/>
    </v-app-bar>
    -->
    <Drawer/>
    <v-content>
      <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from './components/core/Drawer';

export default {
  name: 'App',
  components: {
    Drawer
  },
  data: () => ({
    //
  }),
};
</script>
