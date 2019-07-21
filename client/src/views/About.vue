<template>
  <div class="about">
    <v-container>
      <h2 class="display-2 text-sm-center font-weight-light">
        Aprpos de
        <span class="e-ensas">e-ENSAS</span>
      </h2>
      <p class="subheading text-sm-center">
        e-ENSAS est une plate-forme de l'ENSA Safi, a pour but de regrouper l'accès à toutes les applications d'inscription, réinscription, choix de filière et bien d'autres prochaines applications.
        <br />Les applications actuellements disponibles sur la plateform:
      </p>
      <v-divider></v-divider>
      <div>
      <v-tabs
        color="indigo lighten-1"
        dark
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="i in 30" :key="i" :href="'#tab-' + i">Item {{ i }}</v-tab>

        <v-tabs-items>
          <v-tab-item v-for="i in 30" :key="i" :value="'tab-' + i">
            <v-card flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </div>
    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>

<style lang="scss" scoped>
.e-ensas {
  color: #c7254e;
}
</style>

