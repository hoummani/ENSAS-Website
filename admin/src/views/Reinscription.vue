<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Reinscription</h5>
    <div>
      <v-container>
        <v-layout row wrap justify-space-between>
          <v-flex xs12 sm5 md4 lg4 class="mr-2">
            <v-select
              label="Selectioner la specification universitaire"
              :items="filieres"
              v-model="filiere_selected"
              v-on:change="filiereSelected"
              
              item-text="name"
              item-value="value"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm5 md4 lg4>
            <v-select
              label="Selectioner le niveau universitaire"
              :items="levels"
              v-model="level_selected"
              v-on:change="levelSelected"
              
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
    <div>
      <v-layout class="ma-2">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortedBy('name')" v-on="on">
              <v-icon left small>filter_list</v-icon>
              <span class="caption text-lowercase">Lister par le nom</span>
            </v-btn>
          </template>
          <span class="caption text-lowercase">Filtre par le nom</span>
        </v-tooltip>
      </v-layout>
      <v-card>
        <v-alert
          text
          v-if="noItems"
          prominent
          type="error"
          style="border-left:5px solid;"
          icon="mdi-alert"
          >Attention ! Assurer limergence entre la filiere et le niveau
          selectionne !</v-alert
        >
        <v-list three-line v-if="!noItems">
          <template v-for="(item, index) in filtredItems">
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
            <v-divider :key="index"></v-divider>
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
            <v-card-text>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </v-card-text>

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
            <v-card-text>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </v-card-text>

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
      level_selected: "1",
      filiere_selected: "prepa",
      loading: false,
      noItems: false,
      //level_select:"",

      levels: [
        { name: "Premiere Annee", value: "1" },

        { name: "Deuxieme Annee", value: "2" },

        { name: "3eme Annee", value: "3" },

        { name: "4eme Annee", value: "4" },

        { name: "5eme Annee", value: "5" }
      ],
      filieres: [
        {
          name: "Cycle Prepa",
          value: "prepa"
        },
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
      //list etudiants
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          name: "Brunch this weekend?",
          email: "handi.fouad@gmail.com",
          filiere: "informatique",
          level: "3"
        },
        //{ divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          name: "handi.fouad@gmail.com",
          email: "handi.fouad@gmail.com",
          filiere: "gtr",
          level: "4"
        },
        //{ divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          name: "Oui oui",
          email: "handi.fouad@gmail.com",
          filiere: "gpmc",
          level: "3"
        },
        //{ divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          name: "Birthday gift",
          email: "handi.fouad@gmail.com",
          filiere: "informatique",
          level: "3"
        },
        //{ divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          name: "Recipe to try",
          email: "handi.fouad@gmail.com",
          filiere: "informatique",
          level: "4"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          name: "Birouk",
          email: "birouk.fouad@gmail.com",
          filiere: "preparatoire",
          level: "1"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          name: "Rakib",
          email: "rakib.fouad@gmail.com",
          filiere: "preparatoire",
          level: "2"
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          name: "Zineb",
          email: "zineb.meryem@gmail.com",
          filiere: "preparatoire",
          level: "2"
        }
      ],

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

  computed: {
    filtredItems() {
      if (this.level_selected != "" && this.filiere_selected != "") {
        return this.items.filter(item => {
          return (
            item.filiere
              .toLowerCase()
              .match(this.filiere_selected.trim().toLowerCase()) &&
            item.level
              .toLowerCase()
              .match(this.level_selected.trim().toLowerCase())
          );
        });
      } else {
        return this.items.filter(() => {
          return true;
        });
      }

      /*
      return item.filiere
          .toLowerCase()
          .match(this.level_select.value.trim().toLowerCase());
          */
    }
  },
  watch: {
    filtredItems: function(v) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      if (v.length <= 0) {
        this.noItems = true;
      } else {
        this.noItems = false;
      }
    }
  },
  methods: {
    method(operation, item) {
      this.selected_item = item;
      if (operation == "Editer") {
        this.dialog_edit = true;
      } else if (operation == "Details") {
        this.dialog_detail = true;
      }
    },

    sortedBy(prop) {
      this.items.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },

    //filter select
    filiereSelected() {},
    levelSelected() {},
    
  }
};
</script>
