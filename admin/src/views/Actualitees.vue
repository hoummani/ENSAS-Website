<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Actualitees</h5>
    <div>
      <v-layout class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortedBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">Filtre par le titre</span>
            </v-btn>
          </template>
          <span class="caption text-lowercase">Filtre par le titre</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortedBy('date')" v-on="on">
              <v-icon left small>date_range</v-icon>
              <span class="caption text-lowercase">Filtrer par la date</span>
            </v-btn>
          </template>
          <span class="caption text-lowercase">Filtrer par la date</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <!-- modal -->
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="secondary" dark class="mb-2" v-on="on">Nouvelle Actualite</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm12 md12>
                    <v-textarea v-model="editedItem.title" label="Titre d'actualite"></v-textarea>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-text-field v-model="editedItem.date" label="Date limite"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-text-field v-model="editedItem.description_content" label="Contenu de description"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-text-field v-model="editedItem.description_url" label="Reference de description"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Enregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
      <v-card flat class="pa-2" v-for="item in actualities" :key="item.title">
        <v-layout row wrap :class="`pa-3 actualite ${item.status}`">
          <v-flex xs12 sm6 md8>
            <div class="caption grey--text">Titre d'anonce</div>
            <div class="body-2 font-weight-bold">{{ item.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Date</div>
            <div>{{ item.date }}</div>
          </v-flex>
          <!-- operations -->
          <v-flex xs6 sm2 md2 lg1>
            <div class="caption grey--text">Operations</div>
            <div>
              <v-btn small icon @click="editItem(item)">
                <v-icon small>edit</v-icon>
              </v-btn>
              <v-btn small icon @click="deleteItem(item)">
                <v-icon small>delete</v-icon>
              </v-btn>
            </div>
          </v-flex>

          <v-flex xs12 sm6 md12>
            <div class="caption grey--text">Description</div>
            <!-- ref description -->
            <div v-if="item.ref == true">
              <ul v-for="itemDesc in item.description" :key="itemDesc.content">
                <router-link :to="itemDesc.url" tag="li" exact>
                  <a>{{ itemDesc.content }}</a>
                </router-link>
              </ul>
            </div>
            <div v-else>
              <ul v-for="itemDesc in item.description" :key="itemDesc.content">
                <li>{{ itemDesc.content }}</li>
              </ul>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </div>
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
      actualities: [],
      dialog: false,
      editedIndex: -1,
      editedItem: {
        title: "",
        date: new Date().toDateString(),
        description_content: "",
        description_url: "",
        status: ""
      },
      defaultItem: {
        title: "",
        date: new Date().toDateString(),
        description_content: "",
        description_url: "",
        status: ""
      }
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Ajouter Une Actualite"
        : "Editer une Actualite";
    }
  },
  methods: {
    initialize() {
      this.actualities = [
        {
          title: "Affichage des Places vacantes",
          date: "17/07/2019",
          status: "encour",
          ref: true,
          description: [
            {
              content: "Genie informatique",
              url: "#"
            },
            {
              content: "Genie industrielle",
              url: "#"
            }
          ]
        },
        {
          title: "Résultats du concours de la 3ème année :",
          date: "19/07/2019",
          ref: true,
          status: "termine",
          description: [
            {
              content: "Genie informatique",
              url: "#"
            },
            {
              content: "Genie industrielle",
              url: "#"
            }
          ]
        },
        {
          title: "Concours d'accès	",
          date: "10/06/2019",
          ref: false,
          status: "proche",
          description: [
            {
              content:
                "Aucun document papier ne doit être envoyé à l'ENSA Safi.",
              url: null
            },
            {
              content:
                "La présélection est basée sur les notes candidats de leurs parcours universitaires.",
              url: null
            },
            {
              content:
                "Les candidats admis en présélection doivent justifier les jours des concours toutes les informations fournies par des documents authentifiés.",
              url: null
            }
          ]
        }
      ];
    },
    sortedBy(prop) {
      this.actualities.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    editItem(item) {
      this.editedIndex = this.actualities.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.actualities.indexOf(item);
      const deleteStatus = confirm(
        "Are you sure you want to delete this item?"
      );

      // if(!deleteStatus){
      //   this.snackbar=true;
      //   this.snackBar_text="You are cancel delete !";
      // }
      if (deleteStatus) {
        this.actualities.splice(index, 1);
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
        Object.assign(this.actualities[this.editedIndex], this.editedItem);
      } else {
        this.actualities.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style lang="scss" scoped>
.actualite.termine {
  border-right: 4px solid #3cd1c2;
}

.actualite.encour {
  border-right: 4px solid orange;
}

.actualite.proche {
  border-right: 4px solid tomato;
}

ul li a {
  text-decoration: none;
}
</style>
