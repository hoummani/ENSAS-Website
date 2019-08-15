<template>
  <div class="pa-4">
    <v-layout class="pa-3">
      <v-select
              label="Selectioner la specification universitaire"
              :items="deps"
              v-model="dep_selected"
              
              item-text="name"
              item-value="value"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn color="secondary">Ajouter Un Group</v-btn>
    </v-layout>
    <v-card flat>
      
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //select departement
      dep_selected:"infoGtr",
      deps: [
        {
          name: "Informatique & Reseaux",
          value: "infoGtr"
        },
        {
          name: "Genie Industriel & Procedes",
          value: "indusGpmc"
        }
      ],
    }
  },
}
</script>

