<template>
  <div>
    <v-card>
      <v-container>
        <!--
      <h3
        class="display-1 text-sm-center grey--text text--darken-2 font-weight-light mb-2"
      >This section is under unit testing for now !</h3>
        -->
        <v-card class="mx-auto mt-1 pa-3" max-width="644">
          <div class="pt-1 pb-1">
            <v-alert :value="true" color="warning" icon="priority_high" outline>
              <p class="body-2 pt-3">
                This section stil in testing process !
                <span class="red--text"
                  >Almost there, as close as possible !</span
                >
              </p>
            </v-alert>
          </div>
        </v-card>
        <v-card class="mx-auto mt-4 pa-3" max-width="644">
          <v-img
            src="/img/1_HgoWZ4dD3rj2sPZbVjaoPw@2x.jpeg"
            height="320px"
          ></v-img>

          <v-card-title>
            <div>
              We launch this content when the testing process get finished .
            </div>
            <span class="grey--text subtitle-1">Almost there !</span>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-actions>
            <v-btn flat color="primary">Plus de detail</v-btn>
            <div class="flex-grow-1"></div>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-card-text
                >I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.</v-card-text
              >
            </div>
          </v-expand-transition>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
