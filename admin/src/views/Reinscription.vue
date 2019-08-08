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
    <v-container fluid grid-list-md>
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :page="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar dark color="secondary" class="mb-1">
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="search"
              label="Recherche.."
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="keys"
                prepend-inner-icon="search"
                label="Trier par"
              ></v-select>
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="sortDesc" mandatory>
                <v-btn depressed color="secondary" :value="false">
                  <v-icon>arrow_upward</v-icon>
                </v-btn>
                <v-btn depressed color="secondary" :value="true">
                  <v-icon>arrow_downward</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>
          </v-toolbar>
        </template>

        <template v-slot:default="props">
          <v-layout wrap>
            <v-flex v-for="item in props.items" :key="item.cin" xs12 sm6 md4 lg3>
              <v-card>
                <v-card-title>
                  <v-avatar class="mr-3">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                  </v-avatar>
                  <div class="body-1 font-weight-thin">{{ item.nom }}</div>
                </v-card-title>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item
                    v-for="(key, index) in filteredKeys"
                    :key="index"
                    :color="sortBy === key ? `blue lighten-4` : `white`"
                  >
                    <v-list-item-content>{{ key }}:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{
                      item[key.toLowerCase()]
                      }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <!-- actions  -->
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>more</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>email</v-icon>
                  </v-btn>
                  <!-- ------  -->
                   <!--  edit operation  -->
                  <v-layout row justify-center>
                    <v-dialog v-model="dialog" persistent max-width="600px">
                      <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                          <v-icon>add</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">Editer le profile de {{item.nom}}</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container grid-list-md>
                            <v-layout wrap>
                              <v-flex xs12 sm6 md4>
                                <v-text-field v-model="item.nom" label="Legal first name*" required></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm6 md4>
                                <v-text-field
                                  label="Legal middle name"
                                  hint="example of helper text only on focus"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm6 md4>
                                <v-text-field
                                  label="Legal last name*"
                                  hint="example of persistent helper text"
                                  persistent-hint
                                  required
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12>
                                <v-text-field label="Email*" required></v-text-field>
                              </v-flex>
                              <v-flex xs12>
                                <v-text-field label="Password*" type="password" required></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm6>
                                <v-select
                                  :items="['0-17', '18-29', '30-54', '54+']"
                                  label="Age*"
                                  required
                                ></v-select>
                              </v-flex>
                              <v-flex xs12 sm6>
                                <v-autocomplete
                                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                  label="Interests"
                                  multiple
                                ></v-autocomplete>
                              </v-flex>
                            </v-layout>
                          </v-container>
                          
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-layout>
                 
                  

                  <!-- end edit operation  -->

                  <v-btn icon @click="deleteItem(item)">
                    <v-icon>delete</v-icon>
                  </v-btn>
                </v-card-actions>
                <!-- end actions  -->
              </v-card>
            </v-flex>
          </v-layout>
        </template>

        <template v-slot:footer>
          <v-layout mt-2 wrap align-center justify-center>
            <span class="grey--text">Etudiant par page</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn dark text color="primary" class="ml-2" v-on="on">
                  {{ itemsPerPage }}
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <span class="mr-4 grey--text">Page {{ page }} de {{ numberOfPages }}</span>
            <v-btn text fab class="mr-1" @click="formerPage">
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <v-btn text fab class="ml-1" @click="nextPage">
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-layout>
        </template>
      </v-data-iterator>
    </v-container>
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

      //data table
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "nom",
      keys: [
        "Nom",
        "Prenom",
        "CIN",
        "CNE",
        "Email",
        "Adresse",
        "Naissance",
        "Telephone"
      ],
      items: [
        {
          nom: "Handi",
          prenom: "Fouad",
          cin: "HH234567",
          cne: 122456578,
          email: "handi.fouad@gmail.com",
          adresse: "Azib darai rue 24",
          naissance: "12-08-1996",
          telephone: "0976545678"
        },
        {
          nom: "Handi",
          prenom: "Fouad",
          cin: "HH2674567",
          cne: 122456578,
          email: "handi.fouad@gmail.com",
          adresse: "Azib darai rue 24",
          naissance: "12-08-1996",
          telephone: "0976545678"
        },
        {
          nom: "Handi",
          prenom: "Fouad",
          cin: "HH2094567",
          cne: 122456578,
          email: "handi.fouad@gmail.com",
          adresse: "Azib darai rue 24",
          naissance: "12-08-1996",
          telephone: "0976545678"
        },
        {
          nom: "Handi",
          prenom: "Fouad",
          cin: "HH134567",
          cne: 122456578,
          email: "handi.fouad@gmail.com",
          adresse: "Azib darai rue 24",
          naissance: "12-08-1996",
          telephone: "0976545678"
        },
        {
          nom: "Handi",
          prenom: "Fouad",
          cin: "HH6734567",
          cne: 122456578,
          email: "handi.fouad@gmail.com",
          adresse: "Azib darai rue 24",
          naissance: "12-08-1996",
          telephone: "0976545678"
        }
      ],

      //edit operation properties

      dialog: false
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== `Nom`);
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },

    //my own methods

    deleteItem(item) {
      const index = this.items.indexOf(item);
      console.log(index);
    }
  }
};
</script>
