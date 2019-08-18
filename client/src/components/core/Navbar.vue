<template>
  <nav>
    <v-toolbar app class="white" height="80">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <div class="pt-3">
        <img src="/img/logo.png" width height="50px" />
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down" v-if="toolbar_items_show">
        <v-btn color="grey" flat to="/">Accueil</v-btn>
        <v-btn color="grey" flat to="/calendar">Calendrier</v-btn>
        <v-menu offset-y>
          <v-btn flat slot="activator" color="grey">
            <v-icon right>expand_more</v-icon>
            <span>Concour Ci</span>
          </v-btn>
          <v-list>
            <v-list-tile router>
              <v-list-tile-title>ACCES BAC+2</v-list-tile-title>
            </v-list-tile>
            <v-list-tile router>
              <v-list-tile-title>ACCES BAC+3</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn color="grey" flat>Reinscription</v-btn>
        <v-btn color="grey" flat>Choix de filiere</v-btn>
        <v-btn color="grey" flat>Espace PFE</v-btn>
        <v-btn flat color="grey" to="/about">About</v-btn>
        <v-menu offset-y>
          <v-btn flat slot="activator" color="grey">
            <v-icon right>expand_more</v-icon>
            <span>Comptes</span>
          </v-btn>
          <v-list>
            <v-list-tile to="/login" router>
              <v-list-tile-title>SE CONNECTER</v-list-tile-title>
            </v-list-tile>
            <v-list-tile router>
              <v-list-tile-title>S'ENREGISTRER</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Navigation drawer -->
    <v-navigation-drawer
      floating
      app
      v-model="drawer"
      class="indigo lighten-2"
      dark
      offset-x
      @transitionend="toolbar_items_show = !toolbar_items_show"
    >
    
      <v-toolbar flat>
        
        <v-list class="indigo lighten-2" dark>
          <v-list-tile>
            <v-list-tile-title class="title text-xs-center"
              >e-ENSAS</v-list-tile-title
            >
            
          </v-list-tile>
        </v-list>
        
      </v-toolbar>
      
      <!--
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">e-ENSAS</v-list-item-title>
          <v-list-item-subtitle>Nouvelle plateforme</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      -->
      <v-divider></v-divider>
      <!-- list -->
      <v-list dense nav>
        <v-list-tile router to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Accueil</v-list-tile-title>
        </v-list-tile>

        <v-list-tile router to="/calendar">
          <v-list-tile-action>
            <v-icon>calendar_today</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Calendrier</v-list-tile-title>
        </v-list-tile>

        <v-list-group prepend-icon="school">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Concour Ci</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>ACCES BAC+2</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>ACCES BAC+3</v-list-tile-title>
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
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>fas fa-certificate</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Espace PFE</v-list-tile-title>
        </v-list-tile>

        <v-list-tile router to="/about">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile>

        <!-- 6 -->
        <v-list-group prepend-icon="account_box">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Comptes</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-tile to="/login" router>
                <v-list-tile-title>SE CONNECTER</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-tile to="/register" router>
                <v-list-tile-title>S'ENREGISTRER</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>
        </v-list-group>
        <!--
        <v-list-tile >
          <v-list-tile-action>
            <v-icon >contact_support</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Contact Us</v-list-tile-title>
        </v-list-tile>
        -->
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
      right: null,
      toolbar_items_show: true
    };
  }
};
</script>

<style lang="scss" scoped>
.ensas {
  color: #c7254e;
}
</style>
