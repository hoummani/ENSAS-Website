<template>
  <div>
    <Caroussel/> 
    <v-container>
      <h2 class="display-2 text-sm-center font-weight-light">Anances et actualitees</h2>
      <p class="caption text-sm-center">Lisez attentivement les annonces publiées dans cette page avant de commencer à postuler ou à s'inscrire!</p>
      <v-divider></v-divider>
      <v-layout row wrap justify-space-between class="mt-3">
        <v-flex xs12 sm12 md6 lg6 class="pa-1">
          
          <v-card flat>
            <p class="headline py-3 grey--text text-sm-center">Derniere anonces</p>
            <LatestAlert/>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 class="pa-1">
          <v-card flat>
            <p class="headline py-3 grey--text text-sm-center">Actualitees</p>
            <Actualities/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  
</template>

<script>

import Caroussel from "@/components/core/Caroussel";
import LatestAlert from "@/components/core/LatestAlert";
import Actualities from "@/components/core/Actualities";
export default {
  data(){
    return{
      
    }
  },
  components: {
   Caroussel,
    LatestAlert,
    Actualities

    
  }
};
</script>
