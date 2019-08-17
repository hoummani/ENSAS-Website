<template>
  <div>
    <v-layout row wrap class="pa-5">
      <v-card>
        <v-card-title class="indigo lighten-1 white-text" >
          <h3 class="white--text subheading font-weight-regular " text-sm-center>Jury : !+2+3</h3>
          <v-layout justify-end>
            <v-btn dark fab icon small>
              <v-icon>add</v-icon>
            </v-btn>
          </v-layout>
        </v-card-title>
        <v-card-text class="pa-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur magni, amet sed, recusandae eveniet asperiores aliquam qui commodi, illo vitae perferendis obcaecati perspiciatis est.</v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn>editer</v-btn>
          <v-btn>supprimer</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
