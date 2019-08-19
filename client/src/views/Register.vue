<template>
  <div class="back pa-2">
    <h3
      class="display-1 text-sm-center font-weight-light"
    >Inscription et Reinscription en ligne ENSA Safi</h3>
    <v-container>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" editable>Step {{ n }}</v-stepper-step>

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

            <v-layout row wrap justify-end class="mt-2">
              <v-btn text>Annuler</v-btn>
              <v-btn color="primary" @click="nextStep(n)">Continue</v-btn>

            
            </v-layout>
          </v-stepper-content>
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
      steps: 4,
    };
  },
  watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
    },
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
