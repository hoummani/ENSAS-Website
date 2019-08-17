<template>
  <div>
    <v-layout row wrap class="pa-5" fluid>
      <v-select
        label="Selectioner la specification universitaire"
        :items="deps"
        v-model="dep_selected"
        item-text="name"
        item-value="value"
      ></v-select>
      <v-card
        class="mb-2"
        v-for="(item, index) in planings"
        :key="index"
        style="width:100%;"
      >
        <v-card-title class="indigo lighten-2">
          <h5 class="white--text" text-sm-center>
            Jury :
            <span
              class="mr-1 ml-1"
              v-for="(juryName, index) in item.jurys"
              :key="index"
              >{{ juryName.name }}</span
            >
          </h5>
          <v-layout justify-end>
            <v-btn dark fab icon small>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-layout>
        </v-card-title>
        <v-layout row wrap class="pa-3">
          <v-flex
            xs12
            sm6
            md4
            lg3
            v-for="(item, index) in item.students"
            :key="index"
          >
            <v-card class="ma-1">
              <v-card-title class="body-2 font-weight-bold"
                >{{ item.firstName }} {{ item.lastName }}</v-card-title
              >
              <v-divider></v-divider>
              <v-card-text class="pa-1">
                <div class="caption grey--text">CNE :</div>
                <div class="font-weight-medium">{{ item.cne }}</div>
                <div class="caption grey--text">Filiere :</div>
                <div>{{ item.filiere }}</div>
                <div class="caption grey--text">Encadrant :</div>
                <div>{{ item.coatch }}</div>
                <div class="caption grey--text">Le temps :</div>
                <div>{{ item.time }}</div>
                <div class="caption grey--text">Locale :</div>
                <div>{{ item.location }}</div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-layout justify-end>
                  <v-btn small fab icon @click="onEditStudent(item)">
                    <v-icon small>edit</v-icon>
                  </v-btn>
                  <v-btn small fab icon>
                    <v-icon small>delete</v-icon>
                  </v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
        <v-card-actions>
          <v-layout justify-end>
            <v-btn small icon fab color="secondary" @click="onAddStudent">
              <v-icon>add</v-icon>
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-layout>

    <!-- ##############  -->
    <!-- add & edit form  -->
    <v-layout justify-center>
      <v-dialog v-model="studentDialog" persistent max-width="690">
        <v-card>
          <v-card-title class="headline">{{ formTitle }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container grid-list-md>
              <v-form
                ref="studentForm"
                v-model="studentValidForm"
                lazy-validation
              >
                <!--  date -->
                <!--
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  full-width
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="formatedDate"
                      clearable
                      :rules="calendarRules.requiredField"
                      label="La date"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="calendar.date"
                    locale="fr"
                    @change="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                -->
                <!-- cne  -->
                <v-text-field
                  type="text"
                  :rules="studentObjectRules.textInput"
                  v-model="studentObject.cne"
                  label="CNE"
                  required
                ></v-text-field>
                <!-- first name  -->
                <v-text-field
                  type="text"
                  :rules="studentObjectRules.textInput"
                  v-model="studentObject.firstName"
                  label="Nom"
                  required
                ></v-text-field>
                <!-- last name  -->
                <v-text-field
                  type="text"
                  :rules="studentObjectRules.textInput"
                  v-model="studentObject.lastName"
                  label="Prenom"
                  required
                ></v-text-field>

                <v-select
                  :items="filieres"
                  v-model="studentObject.filiere"
                  item-text="name"
                  item-value="value"
                  :rules="studentObjectRules.requiredField"
                  label="Selectionner la filiere"
                ></v-select>

                <v-text-field
                  type="text"
                  :rules="studentObjectRules.textInput"
                  v-model="studentObject.time"
                  label="Date de soutenance"
                  required
                ></v-text-field>

                <v-select
                  :items="locations"
                  v-model="studentObject.location"
                  item-text="name"
                  item-value="value"
                  :rules="studentObjectRules.requiredField"
                  label="Selectionner la place de soutenance"
                ></v-select>
              </v-form>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-layout justify-end>
              <div>
                <v-btn
                  text
                  color="indigo darken-1"
                  @click="studentDialog = false"
                  >Annuler</v-btn
                >
                <v-btn dark color="primary" @click="onEditSubmit" v-if="edit"
                  >Modifier</v-btn
                >
                <v-btn dark color="primary" @click="onAddSubmit" v-else
                  >Ajouter</v-btn
                >
              </div>
            </v-layout>
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
      //select departement
      dep_selected: "infoGtr",
      deps: [
        {
          name: "Informatique & Reseaux",
          value: "infoGtr"
        },
        {
          name: "Genie Industriel & Procedes",
          value: "indusGpmc"
        }
      ],
      //add student
      edit: false,
      formTitle: "Ajouter un etudiant",
      studentValidForm: false,
      studentDialog: false,
      //selects items
      locations: [
        {
          name: "Sale 4",
          value: "sale4"
        },
        {
          name: "Amphi A",
          value: "amphiA"
        },
        {
          name: "Amphi B",
          value: "amphib"
        },
        {
          name: "Sale 5",
          value: "sale5"
        }
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
          name: "Genie de procede et ceramique",
          value: "gpmc"
        },
        {
          name: "Genie Telecommunication et reseaux",
          value: "gtr"
        }
      ],
      studentObject: {
        cne: "",
        filiere: "",
        firstName: "",
        lastName: "",
        coatch: "",
        time: new Date(),
        location: ""
      },
      studentObjectRules: {
        textInput: [
          v => (v && v.length > 3) || "Text field must be a valid input !"
        ],
        requiredField: [v => !!v || "This Field is required !"]
      },
      planings: []
    };
  },
  created() {
    this.initialize();
  },
  watch: {
    edit: function(v) {
      if (v == true) {
        this.formTitle = "Modifier les informations";
      }
    }
  },
  methods: {
    onAddStudent() {
      if (this.$refs.studentForm) {
        this.$refs.studentForm.reset();
      }
      this.edit = false;
      this.studentDialog = true;
    },
    onEditStudent(item) {
      this.edit = true;
      this.studentDialog = true;
      this.studentObject = { ...item };
    },
    onAddSubmit() {
      if (this.$refs.studentForm.validate()) {
        console.log("valid !");
      }
    },
    onEditSubmit() {
      if (this.$refs.studentForm.validate()) {
        console.log("valid");
      }
    },
    initialize() {
      this.planings = [
        {
          jurys: [
            {
              name: "Bouarifi Walid",
              email: "walid.bouarifi@gmail.com"
            },

            {
              name: "Atlas Abdelghafour",
              email: "abdelghafour.atlas@gmail.com"
            },
            {
              name: "Ech-chadi Said",
              email: "said.chadi@gmail.com"
            }
          ],
          students: [
            {
              cne: "1234678798",
              filiere: "Info",
              firstName: "Handi",
              lastName: "Fouad",
              coatch: "Atlas",
              time: new Date(),
              location: "Sale 4"
            },
            {
              cne: "1234678798",
              filiere: "Info",
              firstName: "Handi",
              lastName: "Fouad",
              coatch: "Atlas",
              time: new Date(),
              location: "Sale 4"
            },
            {
              cne: "1234678798",
              filiere: "Info",
              firstName: "Handi",
              lastName: "Fouad",
              coatch: "Atlas",
              time: new Date(),
              location: "Sale 4"
            },
            {
              cne: "1234678798",
              filiere: "Info",
              firstName: "Handi",
              lastName: "Fouad",
              coatch: "Atlas",
              time: new Date(),
              location: "Sale 4"
            },
            {
              cne: "1234678798",
              filiere: "Info",
              firstName: "Handi",
              lastName: "Fouad",
              coatch: "Atlas",
              time: new Date(),
              location: "Sale 4"
            }
          ]
        },

        {
          jurys: [
            {
              name: "Bouarifi Walid",
              email: "walid.bouarifi@gmail.com"
            },

            {
              name: "Atlas Abdelghafour",
              email: "abdelghafour.atlas@gmail.com"
            },
            {
              name: "Ech-chadi Said",
              email: "said.chadi@gmail.com"
            }
          ],
          students: [
            {
              cne: "1234678798",
              filiere: "Info",
              firstName: "Hoummani",
              lastName: "Yassine",
              coatch: "Bouarifi",
              time: new Date(),
              location: "Sale 8"
            },
            {
              cne: "1234678798",
              filiere: "Info",
              firstName: "Hoummani",
              lastName: "Yassine",
              coatch: "Bouarifi",
              time: new Date(),
              location: "Sale 8"
            },
            {
              cne: "1234678798",
              filiere: "Info",
              firstName: "Hoummani",
              lastName: "Yassine",
              coatch: "Bouarifi",
              time: new Date(),
              location: "Sale 8"
            },
            {
              cne: "1234678798",
              filiere: "Info",
              firstName: "Hoummani",
              lastName: "Yassine",
              coatch: "Bouarifi",
              time: new Date(),
              location: "Sale 8"
            }
          ]
        },

        {
          jurys: [
            {
              name: "Bouarifi Walid",
              email: "walid.bouarifi@gmail.com"
            },

            {
              name: "Atlas Abdelghafour",
              email: "abdelghafour.atlas@gmail.com"
            },
            {
              name: "Ech-chadi Said",
              email: "said.chadi@gmail.com"
            }
          ],
          students: [
            {
              cne: "1234678798",
              filiere: "Info",
              firstName: "Mnini",
              lastName: "Yahya",
              coatch: "Echadi",
              time: new Date(),
              location: "Sale 7"
            }
          ]
        }
      ];
    }
  }
};
</script>
