<template>
  <div>
    <Caroussel />
    <v-container>
      <h2 class="display-2 text-sm-center font-weight-light">
        Annonces et actualités
      </h2>
      <p class="subheading font-weight-bold text-sm-center">
        Lisez attentivement les annonces publiées dans cette page avant de
        commencer à postuler ou à s'inscrire!
      </p>
      <v-divider></v-divider>
      <v-layout row wrap justify-space-between class="my-3">
        <v-flex xs12 sm12 md6 lg6 class="pa-1">
          <v-card flat>
            <p class="headline py-3 grey--text text-sm-center">
              Dernière annonces
            </p>
            <LatestAlert />
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 class="pa-1">
          <v-card flat>
            <p class="headline py-3 grey--text text-sm-center">Actualités</p>
            <Actualities />
          </v-card>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <br />
      <!-- ## concour d'acces ### -->
      <ConcourAcces />

      <!--  Reinscription --->
      <ReinscriptionInfo />
      <!--#### Contact -->
      <Contact />
      <v-divider></v-divider>
      <br />
    </v-container>
  </div>
</template>

<script>
import Caroussel from "@/components/core/Caroussel";
import LatestAlert from "@/components/core/LatestAlert";
import Actualities from "@/components/core/Actualities";
import Contact from "@/components/core/Contact";
import ConcourAcces from "@/components/core/ConcourAcces";
import ReinscriptionInfo from "@/components/core/ReinscriptionInfo";
export default {
  data() {
    return {};
  },
  components: {
    Caroussel,
    LatestAlert,
    Actualities,
    Contact,
    ConcourAcces,
    ReinscriptionInfo
  }
};
</script>
