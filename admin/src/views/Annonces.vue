<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Annonces</h5>
    <div>
      <v-data-table
        :headers="headers"
        :search="search"
        :items="alerts"
        sort-by="end_date"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Recherche..."
              single-line
              hide-details
            ></v-text-field>

            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="secondary" dark class="mb-2" v-on="on"
                  >Nouvelle Annonce</v-btn
                >
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm12 md12>
                        <v-textarea
                          v-model="editedItem.title"
                          label="Titre d'annonce"
                        ></v-textarea>
                        <!--
                        <v-text-field v-model="editedItem.title" label="Titre d'annonce"></v-text-field>
                        -->
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                        <v-text-field
                          v-model="editedItem.end_at"
                          label="Date limite"
                        ></v-text-field>
                      </v-flex>
                      <!--
                      <v-flex xs12 sm12 md12>
                        <v-text-field v-model="editedItem.filiere" label="Filiere"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                        <v-text-field v-model="editedItem.level" label="Niveau"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                        <v-text-field v-model="editedItem.status" label="Etat"></v-text-field>
                      </v-flex>
                      -->
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="save"
                    >Enregistrer</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
          <v-icon small @click="deleteItem(item)">delete</v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="secondary" @click="initialize">Oublier</v-btn>
        </template>
      </v-data-table>
      <!-- snackbar -->
      <v-snackbar
        v-model="snackbar"
        bottom
        :color="snackbar_color"
        :timeout="timeout"
      >
        {{ snackBar_text }}
        <v-btn dark text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //snackbar
      color: "success",

      snackbar: false,
      snackBar_text: "",
      timeout: 6000,
      snackbar_color: "",
      x: null,
      y: "top",
      //snackbar end
      search: "",
      dialog: false,
      headers: [
        {
          text: "Titre dannonce",
          align: "left",
          sortable: false,
          value: "title"
        },
        { text: "Date limite", value: "end_at" },

        { text: "Etat", value: "status" },
        { text: "Operations", value: "action", sortable: false }
      ],
      alerts: [],
      editedIndex: -1,
      editedItem: {
        title: "",
        end_at: new Date().toDateString(),

        status: "En cours"
      },
      defaultItem: {
        title: "",
        end_at: new Date().getDate(),

        status: "En cours"
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Ajouter Annone" : "Editer Annonce";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.alerts = [
        {
          title:
            "Le nombre de places vacantes par chaque filière est précisé dans la rubrique",
          end_at: new Date().toDateString(),

          status: "En cours"
        },
        {
          title:
            "Inscription des listes d'attente (3ème et 4ème année) le 24 et 25 Juillet",
          end_at: new Date().toDateString(),
          status: "En cours"
        },
        {
          title:
            "Le nombre de places vacantes par chaque filière est précisé dans la rubrique",
          end_at: new Date().toDateString(),
          status: "En cours"
        },
        {
          title:
            "Inscription des listes d'attente (3ème et 4ème année) le 24 et 25 Juillet",
          end_at: new Date().toDateString(),
          status: "En cours"
        },
        {
          title:
            "Le nombre de places vacantes par chaque filière est précisé dans la rubrique",
          end_at: new Date().toDateString(),
          status: "En cours"
        },
        {
          title:
            "Inscription des listes d'attente (3ème et 4ème année) le 24 et 25 Juillet",
          end_at: new Date().toDateString(),
          status: "En cours"
        },
        {
          title:
            "Le nombre de places vacantes par chaque filière est précisé dans la rubrique",
          end_at: new Date().toDateString(),
          status: "En cours"
        },
        {
          title:
            "Inscription des listes d'attente (3ème et 4ème année) le 24 et 25 Juillet",
          end_at: new Date().toDateString(),
          status: "En cours"
        },
        {
          title:
            "Le nombre de places vacantes par chaque filière est précisé dans la rubrique",
          end_at: new Date().toDateString(),
          status: "En cours"
        },
        {
          title:
            "Inscription des listes d'attente (3ème et 4ème année) le 24 et 25 Juillet",
          end_at: new Date().toDateString(),
          status: "En cours"
        }
      ];
    },
    editItem(item) {
      this.editedIndex = this.alerts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.alerts.indexOf(item);
      const deleteStatus = confirm(
        "Are you sure you want to delete this item?"
      );

      // if(!deleteStatus){
      //   this.snackbar=true;
      //   this.snackBar_text="You are cancel delete !";
      // }
      if (deleteStatus) {
        this.alerts.splice(index, 1);
        this.snackbar = true;
        this.snackbar_color = "success";
        this.snackBar_text = "Delete with success status !";
      } else {
        this.snackbar = true;
        this.snackbar_color = "error";
        this.snackBar_text = "You are cancel delete !";
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.alerts[this.editedIndex], this.editedItem);
      } else {
        this.alerts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
