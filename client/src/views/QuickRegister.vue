<template>
  <div class="back pa-2">
    <v-container>
      
        <h3
          class="display-1 text-sm-center grey--text text--darken-2 font-weight-light pt-3 pb-3"
        >Inscription et Reinscription en ligne ENSA Safi</h3>
        <v-divider></v-divider>
        <v-container>
          <v-form ref="form" v-model="valid" class="form" lazy-validation>
            <v-layout row wrap>
              <!-- nom  -->
              <v-flex xs12 sm5 md5 lg5 class="mr-5 ml-5">
                <v-text-field type="text" label="Nom"></v-text-field>
              </v-flex>
              <!-- prenom  -->
              <v-flex xs12 sm5 md5 lg5>
                <v-text-field type="text" label="Prenom"></v-text-field>
              </v-flex>
              <!-- email  -->
              <v-flex xs12 sm11 md11 lg11 class="ml-5">
                <v-text-field type="email" label="E-mail" required></v-text-field>
              </v-flex>
            </v-layout>
            <!-- email  -->
            

            <!-- password -->
            <v-text-field type="password" :counter="6" label="Password" required></v-text-field>

            <v-checkbox v-model="checkbox" label="Remember me ?"></v-checkbox>
            <v-btn color="primary" class="mr-4">Enregistrer</v-btn>
            <!-- epic-spinners-3-k.gif -->
            <v-btn color="secondary" dark>Réinitialiser</v-btn>
          </v-form>
        </v-container>
      
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      checkbox: true
    };
  }
};
</script>
<style lang="scss" scoped>
.back {
  background-attachment: fixed;
  background-image: url("/img/bg_oc_things_grey.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>


