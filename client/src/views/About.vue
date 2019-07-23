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
        <v-tabs centered color="indigo lighten-1" dark show-arrows icons-and-text>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab href="#tab-1">
            Reinscription
            <v-icon>group_add</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Concour bac+2
            <v-icon>school</v-icon>
          </v-tab>

          <v-tab href="#tab-3">
            Concour bac+3
            <v-icon>school</v-icon>
          </v-tab>

          <v-tab href="#tab-4">
            Choix de filiere
            <v-icon>rate_review</v-icon>
          </v-tab>

           <v-tab href="#tab-5">
            Espace PFE(Info+GTR)
            <v-icon>fas fa-certificate</v-icon>
          </v-tab>
          <!-- reinscription tab content -->
          <v-tab-item  :value="'tab-1'">
            <v-card flat class="pa-3">
              <Reinscription/>
            </v-card>
          </v-tab-item>

          <!-- concour 3eme annee tab content -->
          <v-tab-item  :value="'tab-2'">
            <v-card flat class="pa-3">
              <Concour3a/>
            </v-card>
          </v-tab-item>

          <!-- concour 4eme annee tab content -->
          <v-tab-item  :value="'tab-3'">
            <v-card flat class="pa-3">
              <Concour4a/>
            </v-card>
          </v-tab-item>

          <!-- concour choix de filiere tab content -->
          <v-tab-item  :value="'tab-4'">
            <v-card flat class="pa-3">
              <ChoixFiliereInfo/>
            </v-card>
          </v-tab-item>

          <!-- concour pfe tab content -->
          <v-tab-item  :value="'tab-5'">
            <v-card flat class="pa-3">
              <PfeInfo/>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-container>
  </div>
</template>

<script>

import Reinscription from "@/components/about/Reinscription";
import Concour3a from "@/components/about/Concour3a";
import Concour4a from "@/components/about/Concour4a";
import ChoixFiliereInfo from "@/components/about/ChoixFiliereInfo";
import PfeInfo from "@/components/about/PfeInfo";

export default {

  
  data() {
    return {
    }
  },
  components:{
    Reinscription,
    Concour3a,
    Concour4a,
    ChoixFiliereInfo,
    PfeInfo
  }
};
</script>

<style lang="scss" scoped>
.e-ensas {
  color: #c7254e;
}
</style>

