<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Reinscription</h5>
    <div>
      <v-container>
        <v-select
          label="Selectioner le niveau universitaire"
          :items="levels"
          v-model="level_select"
          item-text="name"
          item-value="value"
          autocomplete
        ></v-select>
      </v-container>
    </div>
    <div>
      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

            <v-list-item v-else :key="item.title" v-ripple="{ class: `indigo--text lighten-2` }">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <v-list-item-subtitle v-html="item.email"></v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-list-item-content>
                <v-layout justify-end>
                  <v-flex>
                    <v-btn icon small>
                      <v-icon>more</v-icon>
                    </v-btn>
                    <v-btn icon small>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn icon small>
                      <v-icon>email</v-icon>
                    </v-btn>
                    <v-btn icon small>
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //select level
      level_select: null,

      levels: [
        { header: "Cycle preparatoire" },
        { name: "1ere Annee", value: "first" },
        { name: "2eme Annee", value: "second" },
        { header: "Genie Informatique" },
        { name: "3eme Annee G.Inf", value: "info3" },
        { name: "4eme Annee G.Inf", value: "info4" },
        { name: "5eme Annee G.Inf", value: "info5" },
        { header: "Genie Reseau et telecommunications" },
        { name: "3eme Annee GTR", value: "gtr3" },
        { name: "4eme Annee GTR", value: "gtr4" },
        { name: "5eme Annee GTR", value: "gtr5" },
        { header: "Genie de procedes et ceramique" },
        { name: "3eme Annee GPMC", value: "gpmc3" },
        { name: "4eme Annee GPMC", value: "gpmc4" },
        { name: "5eme Annee GPMC", value: "gpmc5" },
        { header: "Genie Industriel" },
        { name: "3eme Annee G.Indus", value: "indus3" },
        { name: "4eme Annee G.Indus", value: "indus4" },
        { name: "5eme Annee G.Indus", value: "indus5" }
      ],

      //list etudiants
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          name: "Brunch this weekend?",
          email: "handi.fouad@gmail.com"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          name: "handi.fouad@gmail.com",
          email: "handi.fouad@gmail.com"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          name: "Oui oui",
          email: "handi.fouad@gmail.com"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          name: "Birthday gift",
          email: "handi.fouad@gmail.com"
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          name: "Recipe to try",
          email: "handi.fouad@gmail.com"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
