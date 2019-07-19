<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light">e-</span>
        <span>ENSAS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn color="grey" flat to="/">Accueil</v-btn>
        <v-btn color="grey" flat>Actualite</v-btn>
        <v-menu offset-y>
          <v-btn flat slot="activator" color="grey">
            <v-icon left>expand_more</v-icon>
            <span>Concour Ci</span>
          </v-btn>
          <v-list>
            <v-list-tile router>
              <v-list-tile-title>3eme Annee</v-list-tile-title>
            </v-list-tile>
            <v-list-tile router>
              <v-list-tile-title>4eme Annee</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn color="grey" flat>Reinscription</v-btn>
        <v-btn color="grey" flat>Choix de filiere</v-btn>
        <v-btn flat color="grey" to="/about">About</v-btn>
        <v-btn flat color="grey">Contact us</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Navigation drawer -->
    <v-navigation-drawer absolute temporary app floating v-model="drawer" value="true">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">e-ENSAS</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>
      <!-- list -->
      <v-list>
        <v-list-tile router to="/">
          <v-list-tile-action >
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Accueil</v-list-tile-title>
        </v-list-tile>

        <v-list-group prepend-icon="school" >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Concour Ci</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group no-action sub-group >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>3eme Annee</v-list-tile-title>
              </v-list-tile>
            </template>
            
          </v-list-group>

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>4eme Annee</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>
        </v-list-group>
        <!-- 3 -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>group_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Reinscription</v-list-tile-title>
        </v-list-tile>
        <!-- 4  -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>rate_review</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Choix de Filiere</v-list-tile-title>
        </v-list-tile>
        <!-- 5 -->
        <v-list-tile router to="/about">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile>
        <!-- 6 -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_support</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Contact Us</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      drawer: false,
      /*
      links: [
        { icon: "announcement", text: "Actualite", route: "/" },
        { icon: "school", text: "Concour Ci", route: "/" },
        { icon: "group_add", text: "Reinscription", route: "/" },
        { icon: "rate_review", text: "Choix de filiere", route: "/" },
        { icon: "info", text: "About", route: "/" },
        { icon: "contact_support", text: "Contact us", route: "/" }
      ]*/

      right: null
    };
  }
};
</script>

<style lang="scss" scoped>
.ensas {
  color: #c7254e;
}
</style>


