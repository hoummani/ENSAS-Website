<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Choix de filieres</h5>
    <div>
      <v-container>
        <v-flex text-left>
          <span class="body-3 font-weight-light" v-text="slider.label"></span>
        </v-flex>
        <v-flex text-center>
          <span class="body-3 font-weight-light">{{ slider.val }} Points</span>
        </v-flex>
        <v-slider
          v-model="slider.val"
          :thumb-color="color"
          track-color="grey"
          always-dirty
          min="0"
          max="1000"
        >
          <template v-slot:prepend>
            <v-icon :color="color" @click="decrement">mdi-minus</v-icon>
          </template>

          <template v-slot:append>
            <v-icon :color="color" @click="increment">mdi-plus</v-icon>
          </template>
        </v-slider>
      </v-container>
    </div>
    <!--   choix de filiere  -->
    <div>
      <v-layout class="mb-3" row wrap>
        <v-flex xs12 sm4 md4 lg3>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small text color="grey" @click="sortedBy('firstName')" v-on="on">
                <v-icon left small>filter_list</v-icon>
                <span class="caption text-lowercase">Enumeration par le nom</span>
              </v-btn>
            </template>
            <span class="caption text-lowercase">Enumeration par le nom</span>
          </v-tooltip>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small text color="grey" v-on="on">
                <v-icon left small>build</v-icon>
                <span class="caption text-lowercase">Parametres des modes</span>
              </v-btn>
            </template>
            <span class="caption text-lowercase">Parametres des modes</span>
          </v-tooltip>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small text color="grey" v-on="on">
                <v-icon left small>person</v-icon>
                <span class="caption text-lowercase">Nombres des places disponibles</span>
              </v-btn>
            </template>
            <span class="caption text-lowercase">Nombres des places disponibles</span>
          </v-tooltip>
        </v-flex>
        <!--
        <v-flex>
          <v-switch class="caption text-lowercase" v-model="autoMode" label="Activer le mode automatique ?"></v-switch>
        </v-flex>
        -->
      </v-layout>

      <!-- card list  -->

      <v-card
        flat
        class="pa-2"
        v-for="item in studentChoice"
        :key="item.cne"
        v-ripple="{ class: `indigo--text lighten-2` }"
      >
        <v-layout row wrap :class="`pa-3 choice ${item.status}`">
          <v-flex xs12 sm6 md8>
            <div class="caption grey--text">Nom et Prenom</div>
            <div class="body-2 font-weight-bold">{{ item.firstName }} {{ item.lastName }}</div>
            <div class="caption grey--text">CNE</div>
            <div class="body-2 font-weight-bold">{{ item.cne }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Score</div>
            <div>{{ item.score }}</div>
          </v-flex>
          <!-- operations -->
          <v-flex xs6 sm2 md2 lg2>
            <div class="caption grey--text text-sm-center">Operations</div>
            <div class="text-sm-center">
              <!-- edit  -->
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn small icon @click="editItem(item)" v-on="on">
                    <v-icon small>edit</v-icon>
                  </v-btn>
                </template>
                <span class="caption text-lowercase">Editer</span>
              </v-tooltip>
              <!-- affectation  -->
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn small icon @click="affectItem(item)" v-on="on">
                    <v-icon small>assignment_turned_in</v-icon>
                  </v-btn>
                </template>
                <span class="caption text-lowercase">Affectation</span>
              </v-tooltip>
              <!-- delete  -->
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn small icon v-on="on">
                    <v-icon small>delete</v-icon>
                  </v-btn>
                </template>
                <span class="caption text-lowercase">Supprimer</span>
              </v-tooltip>
            </div>
          </v-flex>

          <v-flex xs12 sm6 md12>
            <div class="caption grey--text">List de filieres demendees</div>
            <!-- filieres list -->
            <div>
              <ul v-for="choice in item.choices" :key="choice.filiere">
                <li :class="{'affected':(choice.filiere===item.choiceAffecte)}">
                  Choix n
                  <strong>{{ choice.ranking }}</strong>
                  :
                  {{ choice.filiereFullName }}
                </li>
              </ul>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      <!--
        <v-pagination v-model="pagination.page" color="secondary" :total-visible="5" :length="lenPagination" circle>
      </v-pagination>
      -->

      <!-- ################  -->
      <!-- modals  -->
      <v-layout justify-center>
        <v-dialog v-model="edit_dialog" persistent max-width="590">
          <v-card>
            <v-card-title class="headline">
              Editer le classement de {{ edited_item.firstName }}
              {{ edited_item.lastName }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container grid-list-md>
                <v-form ref="form" v-model="editItemValid" lazy-validation>
                  <v-layout wrap>
                    <v-text-field
                      v-model="edited_item.cne"
                      readonly
                      type="text"
                      class="ma-1"
                      label="CNE"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="edited_item.firstName"
                      type="text"
                      readonly
                      label="Nom"
                      class="ma-1"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="edited_item.lastName"
                      type="text"
                      readonly
                      label="Prenom"
                      class="ma-1"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="edited_item.score"
                      type="number"
                      class="ma-1"
                      label="Score"
                      required
                    ></v-text-field>
                  </v-layout>
                </v-form>
              </v-container>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="indigo darken-1" text @click="edit_dialog = false">Fermer</v-btn>
              <v-btn color="indigo darken-1" text @click="edit_dialog = false">Modifier</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>

      <!--   affectation form  -->
      <v-layout justify-center>
        <v-dialog v-model="affectation_dialog" persistent max-width="590">
          <v-card>
            <v-card-title class="headline">
              Validation de et affectation pour {{ affected_item.firstName }}
              {{ affected_item.lastName }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container grid-list-md>
                <v-form ref="form" v-model="affectItemValid" lazy-validation>
                  <v-layout wrap>
                    <v-text-field
                      v-model="affected_item.cne"
                      readonly
                      type="text"
                      class="ma-1"
                      label="CNE"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="affected_item.firstName"
                      type="text"
                      readonly
                      label="Nom"
                      class="ma-1"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="affected_item.lastName"
                      type="text"
                      readonly
                      label="Prenom"
                      class="ma-1"
                      required
                    ></v-text-field>
                    <v-layout row>
                      <div class="subheading grey--text">Affectation des filieres</div>
                      <v-flex xs12 sm12 md12 lg12 v-for="choice in affected_item.choices" :key="choice.filiere">
                      <v-radio-group v-model="affectedChoice" :mandatory="false">
                        <v-radio color="primary" :label="choice.filiereFullName" :value="choice.filiere"></v-radio>
                      </v-radio-group>
                    </v-flex>
                    </v-layout>
                  </v-layout>
                </v-form>
              </v-container>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="indigo darken-1" text @click="affectation_dialog = false">Fermer</v-btn>
              <v-btn color="indigo darken-1" text @click="affectationSubmit()">Modifier</v-btn>
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
      //tool component
      autoMode: false,
      //pagination
      pagination: {
        page: 1
      },
      //slider
      slider: {
        label: "SELECTIONNER LE SCORE DESIRE",
        val: 20
      },
      //students choice

      studentChoice: [],

      //modals
      //--->edit
      edit_dialog: false,
      edited_item: {},
      editItemValid: false,

      //---->affectation
      affectItemValid: false,
      affected_item: {},
      affectation_dialog: false,
      affectedChoice:"",
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    color() {
      if (this.slider.val < 100) return "indigo";
      if (this.slider.val < 200) return "teal";
      if (this.slider.val < 300) return "green";
      if (this.slider.val < 400) return "orange";
      return "primary";
    },
    animationDuration() {
      return `${60 / this.bpm}s`;
    },
    lenPagination() {
      return this.studentChoice.length;
    }
  },
  methods: {
    initialize() {
      this.studentChoice = [
        {
          firstName: "Handi",
          lastName: "Fouad",
          cne: "12346789",
          score: 156,
          status: "not_valid",
          choices: [
            {
              ranking: 2,
              filiere: "info",
              filiereFullName: "Genie Informatique"
            },
            {
              ranking: 1,
              filiere: "indus",
              filiereFullName: "Genie Industriel"
            },
            {
              ranking: 3,
              filiere: "gpmc",
              filiereFullName: "Genie de Procede et Ceramique"
            },
            {
              ranking: 4,
              filiere: "gtr",

              filiereFullName: "Genie Reseaux et Telecommunication"
            }
          ],
          choiceAffecte:"",
        },
        {
          firstName: "Handi",
          lastName: "Fouad",
          cne: "12344545",
          score: 256,
          status: "valid",
          choices: [
            {
              ranking: 2,
              filiere: "info",
              filiereFullName: "Genie Informatique"
            },
            {
              ranking: 1,
              filiere: "indus",
              filiereFullName: "Genie Industriel"
            },
            {
              ranking: 3,
              filiere: "gpmc",
              filiereFullName: "Genie de Procede et Ceramique"
            },
            {
              ranking: 4,
              filiere: "gtr",
              filiereFullName: "Genie Reseaux et Telecommunication"
            }
          ],
          choiceAffecte:"",
        },
        {
          firstName: "Handi",
          lastName: "Fouad",
          cne: "123888789",
          score: 136,
          status: "not_valid",
          choices: [
            {
              ranking: 2,
              filiere: "info",
              filiereFullName: "Genie Informatique"
            },
            {
              ranking: 1,
              filiere: "indus",
              filiereFullName: "Genie Industriel"
            },
            {
              ranking: 3,
              filiere: "gpmc",
              filiereFullName: "Genie de Procede et Ceramique"
            },
            {
              ranking: 4,
              filiere: "gtr",
              filiereFullName: "Genie Reseaux et Telecommunication"
            }
          ],
          choiceAffecte:"",
        },
        {
          firstName: "Handi",
          lastName: "Fouad",
          cne: "190046789",
          score: 99,
          status: "not_valid",
          choices: [
            {
              ranking: 2,
              filiere: "info",
              filiereFullName: "Genie Informatique"
            },
            {
              ranking: 1,
              filiere: "indus",
              filiereFullName: "Genie Industriel"
            },
            {
              ranking: 3,
              filiere: "gpmc",
              filiereFullName: "Genie de Procede et Ceramique"
            },
            {
              ranking: 4,
              filiere: "gtr",
              filiereFullName: "Genie Reseaux et Telecommunication"
            }
          ],
          choiceAffecte:"",
        },
        {
          firstName: "Handi",
          lastName: "Fouad",
          cne: "14444789",
          score: 34,
          status: "valid",
          choices: [
            {
              ranking: 2,
              filiere: "info",
              filiereFullName: "Genie Informatique"
            },
            {
              ranking: 1,
              filiere: "indus",
              filiereFullName: "Genie Industriel"
            },
            {
              ranking: 3,
              filiere: "gpmc",
              filiereFullName: "Genie de Procede et Ceramique"
            },
            {
              ranking: 4,
              filiere: "gtr",
              filiereFullName: "Genie Reseaux et Telecommunication"
            }
          ],
          choiceAffecte:"",
        }
      ];
    },
    editItem(item) {
      this.edited_item = item;
      this.edit_dialog = true;
    },
    affectItem(item) {
      this.affected_item = item;
      this.affectation_dialog=true;
    },
    affectationSubmit(){
      this.affected_item.choiceAffecte=this.affectedChoice;
      console.log(this.affected_item);
    },
    decrement() {
      this.slider.val--;
    },
    increment() {
      this.slider.val++;
    },
    sortedBy(prop) {
      this.studentChoice.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style lang="scss" scoped>
.choice.valid {
  border-right: 4px solid #3cd1c2;
}

.choice.not_valid {
  border-right: 4px solid tomato;
}
.affected{
  color: green;
  font-weight: bold;
  font-style: italic;
}
</style>
