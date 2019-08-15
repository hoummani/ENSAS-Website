<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Espace PFE</h5>
    <div>
      <v-card>
        <v-tabs background-color="white" color="indigo" left>
          <v-tab href="#tab-1">Entreprises</v-tab>
          <v-tab href="#tab-2">Gestion des rapports</v-tab>
          <v-tab href="#tab-3">Membres des jurys</v-tab>

          <v-tab-item value="tab-1">
            <Entreprise />
          </v-tab-item>

          <v-tab-item value="tab-2">
            <v-container fluid>
              <v-row>
                <div class="ma-3">
                  <p>
                    Rapport Rapport Rapport Rapport Rapport Rapport Rapport
                    Rapport
                  </p>
                </div>
              </v-row>
            </v-container>
          </v-tab-item>

          <v-tab-item value="tab-3">
            <v-container fluid>
              <v-row>
                <div class="ma-3">
                  <p>Jury Jury</p>
                </div>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </div>
  </div>
</template>

<script>
import Entreprise from "../components/pfe/Entreprise";
export default {
  data() {
    return {
      tabs: 3
    };
  },
  components: {
    Entreprise
  }
};
</script>
