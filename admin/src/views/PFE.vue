<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Espace PFE</h5>
    <div>
      <v-card>
        <v-tabs background-color="white" show-arrows color="indigo" left>
          <v-tab href="#tab-1">Gestion des rapports</v-tab>
          <v-tab href="#tab-2">Entreprises</v-tab>
          <v-tab href="#tab-3">Groups des jurys</v-tab>
          <v-tab href="#tab-4">Planing de soutenances</v-tab>
           <v-tab href="#tab-5">Calendrier de PFE</v-tab>
          <v-tab-item value="tab-1">
            <Report />
          </v-tab-item>
          <v-tab-item value="tab-2">
            <Entreprise />
          </v-tab-item>

          <v-tab-item value="tab-3">
            <Jurys />
          </v-tab-item>

          <v-tab-item value="tab-4">
            <PlaningSoutenance/>
          </v-tab-item>

          <v-tab-item value="tab-5">
            <CalendarPFE/>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </div>
  </div>
</template>

<script>
import Entreprise from "../components/pfe/Entreprise";

import Report from "../components/pfe/Report";

import Jurys from "../components/pfe/Jurys";

import PlaningSoutenance from "../components/pfe/PlaningSoutenance";
import CalendarPFE from "../components/pfe/CalendarPFE";
export default {
  data() {
    return {
      tabs: 3
    };
  },
  components: {
    Entreprise,
    Report,
    Jurys,
    PlaningSoutenance,
    CalendarPFE
  }
};
</script>
