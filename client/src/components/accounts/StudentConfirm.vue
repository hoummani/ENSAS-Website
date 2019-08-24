<template>
  <div>
    <v-layout row wrap class="white pa-3">
      <v-flex xs12 sm12 md12 lg12>
        <h3
          class="display-1 text-sm-center grey--text text--darken-2 font-weight-light"
        >Resume de vos informations</h3>
        <v-divider></v-divider>
        <div class="pt-1 pb-1">
          <v-alert :value="true" color="warning" icon="priority_high" outline>
            <p class="body-2">
              Priere de verifier vos information avant de clicker sur "Valider"
              <span
                class="red--text"
              >La modofication impossible apres validation</span>
            </p>
          </v-alert>
        </div>

        <v-divider></v-divider>
        <v-btn color="secondary" block @click="openVerifier=!openVerifier">Verifier</v-btn>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 v-if="openVerifier">
        <v-layout row wrap>
          <v-card>
            <v-card-title class="text-center">Vos information</v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12 sm4 md3 lg3>
                  <div class="pa-1">
                    <h5 class="caption grey--text">Photo d'identite :</h5>
                  <img :src="studentObjectExemple.photo"/>
                </div>
                </v-flex>
                <v-flex xs12 sm8 md9 lg9>
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md6 lg6>
                      <h5 class="caption grey--text">CIN :</h5>
                      <div>{{studentObjectExemple.cin}}</div>
                    </v-flex>
                    <v-flex xs12 sm6 md6 lg6>
                      <h5 class="caption grey--text">CNE :</h5>
                      <div>{{studentObjectExemple.cne}}</div>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
          
          
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openVerifier: false
    };
  },
  props:['studentObjectExemple'],
};
</script>

