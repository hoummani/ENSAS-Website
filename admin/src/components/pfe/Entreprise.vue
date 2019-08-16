<template>
  <div>
    <v-container fluid>
      <v-data-iterator
        :items="entreprises"
        :items-per-page.sync="itemsPerPage"
        :page="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
        class="pa-1"
      >
        <template v-slot:header>
          <v-toolbar dark color="indigo lighten-1" class="mb-1">
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="search"
              label="Recherche..."
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.smAndUp">
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                hide-details
                :items="keys"
                prepend-inner-icon="search"
                label="Trier par.."
              ></v-select>
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="sortDesc" mandatory>
                <v-btn large depressed color="indigo" :value="false">
                  <v-icon>arrow_upward</v-icon>
                </v-btn>
                <v-btn large depressed color="indigo" :value="true">
                  <v-icon>arrow_downward</v-icon>
                </v-btn>
              </v-btn-toggle>
              <!-- add item  -->

              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    color="white"
                    class="ml-1"
                    @click="onAddItem()"
                    fab
                    icon
                    v-on="on"
                  >
                    <v-icon dark>add</v-icon>
                  </v-btn>
                </template>
                <span class="caption text-lowercase">Ajouter Entreprise</span>
              </v-tooltip>

              <!-- end add item  -->
            </template>
          </v-toolbar>
        </template>

        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.email"
              cols="12"
              sm="6"
              md="4"
              lg="4"
            >
              <v-card>
                <v-card-title class="subheading font-weight-thin">
                  {{ item.nom }}
                </v-card-title>

                <v-divider></v-divider>

                <v-list dense allow-overflow>
                  <v-list-item
                    v-for="(key, index) in filteredKeys"
                    :key="index"
                    :color="sortBy === key ? `blue lighten-4` : `white`"
                  >
                    <v-list-item-content>{{ key }}:</v-list-item-content>
                    <v-list-item-content class="caption align-start">
                      {{ item[key.toLowerCase()] }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-layout justify-end>
                    <!-- message  -->
                    <v-btn icon small @click="sendEmail(item)">
                      <v-icon small>email</v-icon>
                    </v-btn>
                    <!-- edit  -->
                    <v-btn icon small @click="editItem(item)">
                      <v-icon small>edit</v-icon>
                    </v-btn>
                    <!-- delete -->
                    <v-btn icon small @click="deleteItem(item)">
                      <v-icon small>delete</v-icon>
                    </v-btn>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </template>

        <template v-slot:footer>
          <v-row class="mt-2" align="center" justify="center">
            <span class="grey--text">Element par page</span>
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

            <span class="mr-4 grey--text"
              >Page {{ page }} de {{ numberOfPages }}</span
            >
            <v-btn fab text class="mr-1" @click="formerPage">
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <v-btn fab text class="ml-1" @click="nextPage">
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
    <!--   ################ -->
    <!-- add entreprise  -->
    <v-layout justify-center>
      <v-dialog v-model="itemDialog" persistent max-width="590">
        <v-card>
          <v-card-title class="headline">{{ itemFormTitle }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container grid-list-md>
              <v-form ref="itemForm" v-model="itemValidForm" lazy-validation>
                <v-layout wrap>
                  <v-text-field
                    type="text"
                    class="mr-1"
                    :rules="ItemObjectRules.textInput"
                    label="Nom"
                    v-model="ItemObject.nom"
                    required
                  ></v-text-field>

                  <v-text-field
                    type="email"
                    label="Email"
                    :rules="ItemObjectRules.emailInput"
                    v-model="ItemObject.email"
                    required
                  ></v-text-field>

                  <v-select
                    v-model="ItemObject.type"
                    :items="['Privee', 'Public', 'Semi-Public']"
                    :rules="ItemObjectRules.requiredField"
                    label="Type"
                    class="mr-1"
                    :value="ItemObject.type"
                  ></v-select>

                  <v-text-field
                    class="mr-1"
                    type="phone"
                    :rules="ItemObjectRules.phoneInput"
                    v-model="ItemObject.telephone"
                    label="Telephone"
                    required
                  ></v-text-field>

                  <v-text-field
                    type="text"
                    class="mr-1"
                    label="Specialitee"
                    :rules="ItemObjectRules.textInput"
                    v-model="ItemObject.specialitee"
                    required
                  ></v-text-field>

                  <v-text-field
                    type="text"
                    class="mr-1"
                    label="Adresse"
                    :rules="ItemObjectRules.adresseInput"
                    v-model="ItemObject.adresse"
                    required
                  ></v-text-field>

                  <v-text-field
                    type="number"
                    class="mr-1"
                    label="ZIPCode"
                    :rules="ItemObjectRules.requiredField"
                    v-model="ItemObject.zipcode"
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
            <v-btn color="indigo darken-1" text @click="submit"
              >Enregistrer</v-btn
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
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 3,
      sortBy: "nom",
      keys: [
        "Nom",
        "Email",
        "Telephone",
        "Type",
        "Specialitee",
        "ZipCode",
        "Adresse"
      ],
      //add item
      itemFormTitle: "Ajouter Une Entreprise",
      onEdit: false,
      itemDialog: false,
      itemValidForm: false,
      ItemObject: {
        nom: "",

        email: "",

        telephone: "",
        adresse: "",
        zipcode: 0,

        specialitee: "",
        type: ""
      },
      ItemObjectRules: {
        textInput: [
          v =>
            (v && v.length >= 3) ||
            "Text field value must be great than 3 characters"
        ],
        emailInput: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"],
        phoneInput: [
          v => (v && v.length >= 9) || "Phone number is not valid !"
        ],
        requiredField: [v => !!v || "Text field is required !"],
        adresseInput: [v => (v && v.length >= 6) || "Address is not valid !"]
      },
      //end add item

      entreprises: [
        {
          nom: "BC Skills",
          email: "bcskill.safi@gmail.com",

          telephone: "0514357890",

          zipcode: 46000,
          adresse: "Sidi Bouzid",
          specialitee: "Informatique",
          type: "Privee"
        },
        {
          nom: "OCP",
          email: "ocp.safi@gmail.com",

          telephone: "0516857890",

          zipcode: 46000,
          adresse: "Sidi Bouzid",

          specialitee: "Industrielle",
          type: "Half-public"
        },
        {
          nom: "SOMACA",
          email: "somaca.casablanca@gmail.com",

          telephone: "0516852390",

          zipcode: 46000,
          adresse: "Sidi Bouzid",
          specialitee: "Industrielle",
          type: "Half-public"
        },
        {
          nom: "Renaut Tanger",
          email: "renaut.tanger@gmail.com",

          telephone: "05111122390",

          zipcode: 46000,
          adresse: "Sidi Bouzid",

          specialitee: "Industrielle",
          type: "public"
        }
      ]
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.entreprises.length / this.itemsPerPage);
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

    //add item form
    onAddItem() {
      this.onEdit = false;
      this.itemDialog = true;
    },
    submit() {
      if (this.$refs.itemForm.validate()) {
        console.log("Valid !");
      } else {
        return;
      }
    },
    reset() {
      this.$refs.itemForm.reset();
      this.itemDialog = false;
    },
    //card actions

    sendEmail(item) {
      console.log(item);
    },
    editItem(item) {
      this.itemDialog = true;
      this.onEdit = true;
      //assign object
      this.ItemObject.nom = item.nom;
      this.ItemObject.email = item.email;
      this.ItemObject.telephone = item.telephone;
      this.ItemObject.adresse = item.adresse;
      this.ItemObject.zipcode = item.zipcode;
      this.ItemObject.specialitee = item.specialitee;
      this.ItemObject.type = item.type;
    },
    deleteItem(item) {
      console.log(item);
    }
  },
  watch: {
    onEdit: function(v) {
      if (v == true) {
        this.itemFormTitle = "Editer des informations";
      } else {
        this.itemFormTitle = "Ajouter Une Entreprise";
      }
    }
  }
};
</script>
