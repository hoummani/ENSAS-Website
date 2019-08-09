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
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
              v-ripple="{ class: `indigo--text lighten-2` }"
            >
              <v-list-item-avatar size="80">
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.email"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-spacer class="hidden-xs-only"></v-spacer>
              <v-list-item-content>
                <v-layout justify-end class="mr-5" z-index="99999">
                  
                  <v-btn icon>
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on">more_vert</v-icon>
                      </template>

                      <v-list
                        v-for="operation in operations"
                        :key="operation.name"
                      >
                        <v-list-item @click="method(operation.name, item)">
                          <v-icon left>{{ operation.icon }}</v-icon>
                          <v-list-item-title>{{
                            operation.name
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-btn>
                </v-layout>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
      <!--  modals  -->
      <!-- edit profile  -->
      <v-layout justify-center v-if="selected_item != null">
        <v-dialog v-model="dialog_edit" max-width="590">
          <v-card>
            <v-card-title class="headline"
              >Editer le profile de {{ selected_item.name }}</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text
              >Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are
              running.</v-card-text
            >

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="indigo darken-1" text @click="dialog_edit = false"
                >Annuler</v-btn
              >

              <v-btn color="indigo darken-1" text @click="dialog_edit = false"
                >Modifier</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>

      <!-- show details -->
      <v-layout justify-center v-if="selected_item != null">
        <v-dialog v-model="dialog_detail" max-width="590">
          <v-card>
            <v-card-title class="headline"
              >Plus d'informations sur {{ selected_item.name }}</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text
              >Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are
              running.</v-card-text
            >

            <v-card-actions>
              <v-spacer></v-spacer>

              

              <v-btn color="indigo darken-1" text @click="dialog_detail = false"
                >Fermer</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
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
      items: [],

      //fab button

      //action buttons
      operations: [
        {
          name: "Editer",
          icon: "person"
        },
        {
          name: "Message",
          icon: "email"
        },
        {
          name: "Supprimer",
          icon: "delete"
        },
        {
          name: "Details",
          icon: "more"
        }
      ],
      //dialogs
      dialog_edit: false,
      dialog_detail: false,
      selected_item: null
    };
  },
  created() {
    this.initialize();
  },
  computed: {},
  watch: {},
  methods: {
    method(operation, item) {
      this.selected_item = item;
      if (operation == "Editer") {
        this.dialog_edit = true;
      } else if (operation == "Details") {
        this.dialog_detail = true;
      }
    },
    initialize() {
      this.items = [
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
      ];
    }
  }
};
</script>
