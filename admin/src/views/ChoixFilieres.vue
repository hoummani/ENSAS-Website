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
          min="20"
          max="800"
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
      <v-layout class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              text
              color="grey"
              @click="sortedBy('firstName')"
              v-on="on"
            >
              <v-icon left small>filter_list</v-icon>
              <span class="caption text-lowercase">Enumeration par le nom</span>
            </v-btn>
          </template>
          <span class="caption text-lowercase">Enumeration par le nom</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              text
              color="grey"
              
              v-on="on"
            >
              <v-icon left small>settings</v-icon>
              <span class="caption text-lowercase">Parametres des modes</span>
            </v-btn>
          </template>
          <span class="caption text-lowercase">Parametres des modes</span>
        </v-tooltip>
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
        <v-layout row wrap :class="`pa-3 actualite ${item.status}`">
          <v-flex xs12 sm6 md8>
            <div class="caption grey--text">Nom et Prenom</div>
            <div class="body-2 font-weight-bold">
              {{ item.firstName }} {{ item.lastName }}
            </div>
            <div class="caption grey--text">CNE</div>
            <div class="body-2 font-weight-bold">{{ item.cne }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Score</div>
            <div>{{ item.score }}</div>
          </v-flex>
          <!-- operations -->
          <v-flex xs6 sm2 md2 lg1>
            <div class="caption grey--text">Operations</div>
            <div>
              <v-btn small icon>
                <v-icon small>edit</v-icon>
              </v-btn>
              <v-btn small icon>
                <v-icon small>delete</v-icon>
              </v-btn>
            </div>
          </v-flex>

          <v-flex xs12 sm6 md12>
            <div class="caption grey--text">List de filieres demendees</div>
            <!-- filieres list -->
            <div>
              <ul v-for="choice in item.choices" :key="choice.filiere">
                <li>Choix n <strong>{{choice.ranking}}</strong> : {{ choice.filiereFullName }}</li>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      //too component
      autoMode:false,
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
      studentChoice: [
        {
          firstName: "Handi",
          lastName: "Fouad",
          cne: "12346789",
          score: 156,
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
          ]
        },
        {
          firstName: "Handi",
          lastName: "Fouad",
          cne: "12344545",
          score: 256,
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
          ]
        },
        {
          firstName: "Handi",
          lastName: "Fouad",
          cne: "123888789",
          score: 136,
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
          ]
        },
        {
          firstName: "Handi",
          lastName: "Fouad",
          cne: "190046789",
          score: 99,
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
          ]
        },
        {
          firstName: "Handi",
          lastName: "Fouad",
          cne: "14444789",
          score: 34,
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
          ]
        }
      ]
    };
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

<style lang="scss" scoped></style>
