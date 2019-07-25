<template>
  <div>
    <h2 class="display-2 font-weight-thin text-sm-center font-weight-light">
      Concours d'acces au cycle d'ingenieur
    </h2>
    <p class="subheading font-weight-bold text-sm-center">
      Vous pouvez visiter la page About pour plus de details
    </p>
    <v-divider></v-divider>
    <div class="mb-3">
      <v-tabs centered color="indigo lighten-1" dark show-arrows icons-and-text>
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab href="#tab-2">
          Concour bac+2
          <v-icon>school</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          Concour bac+3
          <v-icon>school</v-icon>
        </v-tab>

        <!-- concour 3eme annee tab content -->
        <v-tab-item :value="'tab-2'">
          <v-card flat class="pa-3">
            <Concour3aInfo />
          </v-card>
        </v-tab-item>

        <!-- concour 4eme annee tab content -->
        <v-tab-item :value="'tab-3'">
          <v-card flat class="pa-3">
            <Concour4aInfo />
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import Concour3aInfo from "@/components/core/Concour3aInfo";
import Concour4aInfo from "@/components/core/Concour4aInfo";
export default {
  components: {
    Concour3aInfo,
    Concour4aInfo
  }
};
</script>
