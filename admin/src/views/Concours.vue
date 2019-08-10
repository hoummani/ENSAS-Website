<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Concours</h5>
    <div>
      <v-container>
        <v-layout row wrap justify-space-between>
          <v-flex xs12 sm5 md4 lg4 class="mr-2">
            <v-select
              label="Selectioner la specification universitaire"
              :items="filieres"
              v-model="filiere_selected"
              
              item-text="name"
              item-value="value"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm5 md4 lg4>
            <v-select
              label="Selectioner le niveau universitaire"
              :items="levels"
              v-model="level_selected"
              
              item-text="name"
              item-value="value"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-text-field
            color="primary"
            v-if="loading"
            loading
            disabled
          ></v-text-field>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //select level
      level_selected: "3",
      filiere_selected: "info",
      loading: false,
      noItems: false,
      //level_select:"",

      levels: [
        { name: "3eme Annee", value: "3" },

        { name: "4eme Annee", value: "4" },
      ],
      filieres: [
        {
          name: "Genie Informatique",
          value: "info"
        },
        {
          name: "Genie Industriel",
          value: "indus"
        },
        {
          name: "Genie Resaux & Telecom",
          value: "gtr"
        },
        {
          name: "Genie Procedes & Ceramique",
          value: "gpmc"
        }
      ],
    }
  },
}
</script>

