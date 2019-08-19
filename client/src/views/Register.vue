<template>
  <div class="back pa-2">
    <h3
      class="display-1 text-sm-center font-weight-light"
    >Inscription et Reinscription en ligne ENSA Safi</h3>
    <v-container>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" editable>Etape {{ n }}</v-stepper-step>

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <!-- basic info  -->
          <v-stepper-content :step="step">
            <v-card>
              <v-card-title>
                <h5 class="subheading text-uppercase grey--text">Information de base</h5>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-form v-model="registerValid" ref="registerForm" lazy-validation>
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field label="CIN(Code d'Identité National)" type="text" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field label="CNE(Code Nationnal de l'étudiant)" type="text" required></v-text-field>
                    </v-flex>
                  </v-layout>
                  
                  <!-- email  -->
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field label="E-mail" type="email" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field label="E-mail(Confirmer l'E-mail)" type="email" required></v-text-field>
                    </v-flex>
                  </v-layout>

                  <!-- password -->
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field label="Mot de passe" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field label="Confirmer le mot de passe" type="password" required></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-card-text>
            </v-card>

            <v-layout row wrap justify-end class="mt-2">
              <v-btn color="primary">Continue</v-btn>
            </v-layout>
          </v-stepper-content>
          <!--  basic info  end  -->
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //stepper data
      e1: 1,
      step: 1,
      steps: 5,

      //register form
      registerValid: false,
      studentObject:{
        cin:"",
        cne:"",
        email:"",
        photo:"",
        password:"",
        confirmPassword:"",
        firstName:"",
        lastName:"",
        firstNameAr:"",
        lastNameAr:"",
        birthDay:new Date(),
        birthPlace:"",
        address:"",
        phone:"",
        nationality:"",
        filiere:"",
        level:"",
        bacType:"",
        bacGetYear:"",mention:"",
        fatherFullName:"",
        fatherJob:"",
        motherFullName:"",
        motherJob:"",
        parentAddress:"",
        parentPhone:"",
      },
    };
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    }
  },

  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    }
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
