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
      </v-container>
    </div>
    <!--  data table  -->
    <!-- ************  -->

    <v-data-table
      :headers="headers"
      :items="filtredCandidate"
      item-key="name"
      :loading="loading"
      loading-text="Loading... Please wait"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.action="{ item }">
        <!-- detals  -->
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon
              small
              @click="detailItem(item)"
              class="mr-2"
              v-on="on"
              style="cursor:pointer"
              >more</v-icon
            >
          </template>
          <span>Plus de details</span>
        </v-tooltip>
        <!-- validate candidate -->
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon small class="mr-2" v-on="on" style="cursor:pointer"
              >done</v-icon
            >
          </template>
          <span>Valider cette candidature</span>
        </v-tooltip>

        <!-- edit  -->

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon
              small
              class="mr-2"
              v-on="on"
              @click="editItem(item)"
              style="cursor:pointer"
              >edit</v-icon
            >
          </template>
          <span>Editer</span>
        </v-tooltip>

        <!-- delete  -->
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon
              small
              v-on="on"
              @click="deleteItem(item)"
              style="cursor:pointer"
              >delete</v-icon
            >
          </template>
          <span>Supprimer</span>
        </v-tooltip>
      </template>
      <template v-slot:no-data>
        <v-alert
          text
          class="ma-2"
          prominent
          type="error"
          style="border-left:5px solid;"
          icon="mdi-alert"
          >Attention ! Aucun donnees trouve pour cette specification !</v-alert
        >
      </template>
    </v-data-table>
    <!-- modals  -->
    <!-- edit  -->
    <v-layout justify-center>
      <v-dialog v-model="edit_dialog" persistent max-width="590">
        <v-card>
          <v-card-title class="headline"
            >Editer la candidature de {{ edited_item.name }}</v-card-title
          >
          <v-divider></v-divider>
          <v-card-text>
            <v-container grid-list-md>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-layout wrap>
                  <v-text-field
                    v-model="edited_item.name"
                    type="text"
                    :rules="candidateRules.requiredItem"
                    label="Nom"
                    required
                  ></v-text-field>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="indigo darken-1" text @click="reset">Annuler</v-btn>
            <v-btn color="indigo darken-1" text @click="submit">Modifier</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- detail  -->
      <v-dialog v-model="detail_dialog" persistent max-width="590">
        <v-card>
          <v-card-title class="headline"
            >Details sur la candidature de
            {{ detailed_item.name }}</v-card-title
          >
          <v-divider></v-divider>
          <v-card-text>
            <p class="subheading">
              <strong>Nom :</strong>
              {{ detailed_item.name }}
            </p>
            <p class="subheading">
              <strong>Email :</strong>
              {{ detailed_item.email }}
            </p>
            <p class="subheading">
              <strong>Filiere :</strong>
              {{ detailed_item.filiere }}
            </p>
            <p class="subheading">
              <strong>Niveau :</strong>
              {{ detailed_item.level }}
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="indigo darken-1" @click="detail_dialog = false" text
              >Fermer</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
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

        { name: "4eme Annee", value: "4" }
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
      //edit candidature
      edit_dialog: false,
      valid: false,
      edited_item: {
        name: "",
        email: "",
        cin: "",
        filiere: "",
        level: "",
        score: 0,
        status: ""
      },

      //validation rules
      candidateRules: {
        requiredItem: [v => !!v || "Name is required"]
      },
      satus_candidate: "",
      select_items_cand: ["Accepte(e)", "Refuse(e)"],

      //detail Item
      detail_dialog: false,
      detailed_item: {
        name: "",
        email: "",
        cin: "",
        filiere: "",
        level: "",
        score: 0,
        status: ""
      },
      //candidates
      search: "",

      itemsPerPage: 5,
      headers: [
        {
          text: "Nom de condidat",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "CIN", value: "cin" },
        { text: "Filiere", value: "filiere" },
        { text: "Score", value: "score" },
        { text: "Etat", value: "status" },
        { text: "Operations", value: "action", sortable: false }
      ],

      candidates: []
    };
  },
  computed: {
    filtredCandidate() {
      if (this.level_selected != "" && this.filiere_selected != "") {
        return this.candidates.filter(item => {
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
        return this.candidates.filter(() => {
          return true;
        });
      }
    }
  },

  watch: {
    filtredCandidate: function() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.candidates = [
        {
          name: "Handi Fouad",
          email: "handi.fouad@gmail.com",
          cin: "HH34568909",
          filiere: "informatique",
          level: "3",
          score: 0,
          status: "Refuse(e)"
        },
        {
          name: "Talhaoui ismail",
          email: "talhaoui.ismail@gmail.com",
          cin: "HH34565609",
          filiere: "informatique",
          level: "4",
          score: 0,
          status: "Accepte(e)"
        },
        {
          name: "Alkama Mostafa",
          email: "alkama.mostafa@gmail.com",
          cin: "HH342898909",
          filiere: "informatique",
          level: "3",
          score: 0,
          status: "Refuse(e)"
        },
        {
          name: "Loudi Yassine",
          email: "loudi.yassine@gmail.com",
          cin: "HH3456890909",
          filiere: "industriel",
          level: "4",
          score: 0,
          status: "Accepte(e)"
        },
        {
          name: "Oualla Zahra",
          email: "oualla.zahra@gmail.com",
          cin: "HH0002568909",
          filiere: "GPMC",
          level: "4",
          score: 0,
          status: "Accepte(e)"
        },
        {
          name: "Omkaltoum Zineb",
          email: "ouamm.zineb@gmail.com",
          cin: "HG376568909",
          filiere: "GPMC",
          level: "4",
          score: 0,
          status: "Refuse(e)"
        },
        {
          name: "Ghazouane Badr",
          email: "ghazouane.badr@gmail.com",
          cin: "HM14568909",
          filiere: "informatique",
          level: "3",
          score: 0,
          status: "Accepte(e)"
        }
      ];
    },

    editItem(item) {
      this.edited_item = item;
      this.edit_dialog = true;
    },
    reset() {
      if (this.$refs.form.validate()) {
        this.edit_dialog = false;
      }
      //this.$refs.form.reset();
    },

    submit() {
      if (this.$refs.form.validate()) {
        console.log("valid");
      } else {
        console.log("Not valid !");
      }
    },

    detailItem(item) {
      this.detailed_item = item;
      this.detail_dialog = true;
    },

    deleteItem(item) {
      const index = this.candidates.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.candidates.splice(index, 1);
    },

    close() {},

    save() {}
  }
};
</script>
