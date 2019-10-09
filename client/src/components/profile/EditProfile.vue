<template>
  <div class="back pa-2">
    <h3
      class="display-1 text-sm-center grey--text text--darken-2 font-weight-light"
    >
      Les phases d'editer mon profile
    </h3>
    <v-container>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step
              :key="`${n}-step`"
              :editable="editable[n]"
              :complete="e1 > n"
              :step="n"
              >Etape {{ n }}</v-stepper-step
            >

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>
        </v-stepper-header>
        <v-stepper-items>
          <!-- basic info  -->
          <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
            <v-form
              v-model="registerValid"
              lazy-validation
              
            >
              <v-card v-if="n === 1" class="mb-3" flat>
                <v-card-title>
                  <h5 class="subheading text-uppercase grey--text">
                    Information de base
                  </h5>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <p>
                    <v-alert :value="false" type="error"
                      >Lorem ipsum dolor sit</v-alert
                    >
                  </p>
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="CIN(Code d'Identité National)"
                        type="text"
                        v-model="studentObject.cin"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="CNE(Code Nationnal de l'étudiant)"
                        type="text"
                        v-model="studentObject.cne"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
              <!-- 2  -->
              <v-card v-if="n === 2" class="mb-3" flat>
                <v-card-title>
                  <h5 class="subheading text-uppercase grey--text">
                    Information personnelles
                  </h5>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <p>
                    <v-alert :value="false" type="error"
                      >Lorem ipsum dolor sit</v-alert
                    >
                  </p>

                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <!-- firstName  -->

                      <v-text-field
                        type="text"
                        label="الاسم الشخصي"
                        dir="rtl"
                        lang="ar"
                        class="keyboardInput"
                        v-model="studentObject.lastNameAr"
                        pattern=".{3,}"
                        @focus="lastNameArFocus"
                        style="unicode-bidi:bidi-override;
                            direction: RTL; text-align:right;"
                      ></v-text-field>
                      <v-btn
                        small
                        right
                        icon
                        @click="lastKeyboard = !lastKeyboard"
                      >
                        <v-icon>keyboard</v-icon>
                      </v-btn>
                      <div v-if="lastKeyboard">
                        <v-card>
                          <v-layout row wrap>
                            <v-flex>
                              <span class="caption text-uppercase text-md-start"
                                >لوحة المفاتيح العربية</span
                              >
                            </v-flex>
                          </v-layout>
                          <v-divider></v-divider>
                          <v-layout row wrap>
                            <v-flex
                              v-for="(item, index) in keyboardKeys"
                              :key="index"
                            >
                              <v-btn
                                v-if="item.name === 'delete'"
                                style="width:24px; height:24px;"
                                fab
                                icon
                                small
                                @click="
                                  lastNameClick(item.name, item.character)
                                "
                              >
                                <v-icon small>keyboard_backspace</v-icon>
                              </v-btn>
                              <v-btn
                                v-else-if="item.name === 'space'"
                                style="width:55%; margin-left:20%"
                                @click="
                                  lastNameClick(item.name, item.character)
                                "
                                small
                              ></v-btn>
                              <v-btn
                                small
                                v-else
                                fab
                                @click="
                                  lastNameClick(item.name, item.character)
                                "
                                style="width:24px; height:24px;"
                                >{{ item.character }}</v-btn
                              >
                            </v-flex>
                          </v-layout>
                        </v-card>
                      </div>
                    </v-flex>
                    <!-- last name  -->
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        type="text"
                        label="الاسم العائلي"
                        dir="rtl"
                        lang="ar"
                        class="keyboardInput"
                        v-model="studentObject.firstNameAr"
                        pattern=".{3,}"
                        @focus="firstNameArFocus"
                        style="unicode-bidi:bidi-override;
                            direction: RTL; text-align:right;"
                      ></v-text-field>
                      <v-btn
                        right
                        small
                        icon
                        @click="firstKeyboard = !firstKeyboard"
                      >
                        <v-icon>keyboard</v-icon>
                      </v-btn>
                      <div v-if="firstKeyboard">
                        <v-card>
                          <v-layout row wrap>
                            <v-flex>
                              <span class="caption text-uppercase text-md-start"
                                >لوحة المفاتيح العربية</span
                              >
                            </v-flex>
                          </v-layout>
                          <v-divider></v-divider>
                          <v-layout row wrap>
                            <v-flex
                              v-for="(item, index) in keyboardKeys"
                              :key="index"
                            >
                              <v-btn
                                v-if="item.name === 'delete'"
                                style="width:24px; height:24px;"
                                fab
                                icon
                                small
                                @click="
                                  firstNameClick(item.name, item.character)
                                "
                              >
                                <v-icon small>keyboard_backspace</v-icon>
                              </v-btn>
                              <v-btn
                                v-else-if="item.name === 'space'"
                                style="width:55%; margin-left:20%"
                                @click="
                                  firstNameClick(item.name, item.character)
                                "
                                small
                              ></v-btn>
                              <v-btn
                                small
                                v-else
                                fab
                                @click="
                                  firstNameClick(item.name, item.character)
                                "
                                style="width:24px; height:24px;"
                                >{{ item.character }}</v-btn
                              >
                            </v-flex>
                          </v-layout>
                        </v-card>
                      </div>
                    </v-flex>
                  </v-layout>

                  <!-- date naissance + lieu de maissance  -->
                  <v-layout row wrap justify-space-around class="mt-2">
                    <v-flex xs12 sm5 md4 lg4>
                      <!-- firstName  -->
                      <v-text-field
                        type="date"
                        label="Date de naissance"
                        v-model="studentObject.birthDay"
                      ></v-text-field>
                    </v-flex>
                    <!-- last name  -->
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        type="text"
                        label="Lieu de naissance"
                        v-model="studentObject.birthPlace"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <!-- nationality +phone  -->
                  <v-layout row wrap justify-space-around class="mt-2">
                    <v-flex xs12 sm5 md4 lg4>
                      <v-select
                        v-model="studentObject.nationality"
                        :items="nationalities"
                        label="Nationalitee"
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="Telephone"
                        v-model="studentObject.phone"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm10 md8 lg8>
                      <v-textarea
                        v-model="studentObject.address"
                        label="Adresse"
                        clearable
                        hint="Exemple: 00, Residence XX Quartier YY ville-pays"
                        persistent-hint
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </v-card-text>
                <v-divider></v-divider>
              </v-card>
              <!-- 3  -->
              <!-- parents  -->
              <v-card v-if="n === 3" class="mb-3" flat>
                <v-card-title>
                  <h5 class="subheading text-uppercase grey--text">
                    Information parentales
                  </h5>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <p>
                    <v-alert :value="false" type="error"
                      >Lorem ipsum dolor sit</v-alert
                    >
                  </p>
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        type="text"
                        label="Nom et Prenom du pere"
                        v-model="studentObject.fatherFullName"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-select
                        v-model="studentObject.fatherJob"
                        :items="jobs"
                        label="Profession du pere"
                      ></v-select>
                    </v-flex>
                  </v-layout>

                  <!-- mere  -->
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        type="text"
                        label="Nom et Prenom du mere"
                        v-model="studentObject.motherFullName"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-select
                        v-model="studentObject.motherJob"
                        :items="jobs"
                        label="Profession du mere"
                      ></v-select>
                    </v-flex>
                  </v-layout>
                  <!-- address du parent  -->
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        type="text"
                        label="Adresse du parents"
                        v-model="studentObject.parentAddress"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        v-model="studentObject.parentPhone"
                        type="phone"
                        label="Telephone des parents"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
              <!-- 4  -->
              <!-- scolaire/universitaire  -->
              <v-card v-if="n === 4" class="mb-3" flat>
                <v-card-title>
                  <h5 class="subheading text-uppercase grey--text">
                    Information scolaires/universitaires
                  </h5>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <p>
                    <v-alert :value="false" type="error"
                      >Lorem ipsum dolor sit</v-alert
                    >
                  </p>
                  <!-- filiere  -->
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-select
                        v-model="studentObject.filiere"
                        :items="filieres"
                        label="Filiere"
                        hint="Les etudiants de cycle prepa doivent choisir STI comme filiere"
                        persistent-hint
                        item-text="name"
                        item-value="value"
                        clearable
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-select
                        label="Selectioner le niveau universitaire"
                        :items="levels"
                        v-model="studentObject.level"
                        item-text="name"
                        item-value="value"
                        clearable
                      ></v-select>
                    </v-flex>
                  </v-layout>
                  <!-- bac  -->
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-select
                        :items="bacs"
                        v-model="studentObject.bacType"
                        clearable
                        label="Type de Bac"
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-select
                        :items="bacGetYearArea"
                        v-model="studentObject.bacGetYear"
                        clearable
                        label="Annee d'obtention"
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-select
                        :items="mentions"
                        v-model="studentObject.mention"
                        clearable
                        label="Mention"
                      ></v-select>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-text-field
                        type="text"
                        v-model="studentObject.bacLycee"
                        label="Lycee"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-text-field
                        type="text"
                        v-model="studentObject.bacDirection"
                        label="La Direction"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-text-field
                        type="text"
                        v-model="studentObject.bacAccademie"
                        label="Accademie"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap justify-space-around class="pl-5 ml-3">
                    <v-flex>
                      <v-checkbox
                        v-model="newStudent"
                        label="Vous etes nouveau ?"
                      ></v-checkbox>
                    </v-flex>
                  </v-layout>
                  <!-- if new  -->
                  <div>
                    <div v-if="newStudent">
                      <h5 class="subheading text-uppercase grey--text">
                        Cursus avant ENSA
                        <span class="text--primary">
                          !! Attention remplis seulement par les nouveaux !!
                        </span>
                      </h5>
                      <br />
                      <v-divider></v-divider>
                      <v-layout row wrap justify-space-around>
                        <v-flex xs12 sm3 md2 lg2>
                          <v-select
                            v-model="studentObject.degre"
                            :items="degres"
                            label="Diplome precedent"
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 sm3 md2 lg2>
                          <v-text-field
                            type="text"
                            v-model="studentObject.etablissement"
                            label="Etablissement"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm3 md2 lg2>
                          <v-text-field
                            type="text"
                            v-model="studentObject.city"
                            label="Ville"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
              <!-- 5  -->
              <!-- avatar  -->
              <v-card v-if="n === 5" class="mb-3" flat>
                <v-card-title>
                  <h5 class="subheading text-uppercase grey--text">
                    Photo d'identite
                  </h5>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <p>
                    <v-alert :value="true" type="warning">
                      <ul>
                        <li>La taille maximale de photo est 4 Mo.</li>
                        <li>Votre photo doit etre bien claire.</li>
                        <li>Les extension autorises: JPG, JPEG et PNG.</li>
                      </ul>
                    </v-alert>
                  </p>
                  <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg12>
                      <v-btn color="secondary" @click="toggleShow"
                        >Ajouter votre photo</v-btn
                      >
                      <my-upload
                        field="img"
                        @crop-success="cropSuccess"
                        @crop-upload-success="cropUploadSuccess"
                        @crop-upload-fail="cropUploadFail"
                        v-model="show"
                        :width="300"
                        :height="300"
                        langType="fr"
                      ></my-upload>
                    </v-flex>
                    <v-flex xs12 sm6 md4 lg4 offset-lg4 offset-md4 offset-sm3>
                      <div v-if="studentObject.photo != ''">
                        <img
                          :src="studentObject.photo"
                          max-width="500"
                          max-height="500"
                          alt="John"
                        />
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
              <!-- actions buttons  -->
              <v-divider></v-divider>
              <v-layout row wrap justify-end class="mt-2">
                <v-btn color="secondary" v-if="n === 5" @click="reset"
                  >Initialiser</v-btn
                >
                <v-btn @click="handleSubmit" color="primary" v-if="n === 5"
                  >Editer</v-btn
                >

                <v-btn color="primary" v-else @click="nextStep(n)"
                  >Suivant</v-btn
                >
              </v-layout>
            </v-form>
          </v-stepper-content>
          <!--  basic info  end  -->
        </v-stepper-items>
      </v-stepper>
    </v-container>

    <!--  snackbar  -->
    <v-snackbar v-model="snackbar" left>
      {{ snackbarContent }}
      <v-btn color="primary" flat @click="snackbar = false">
        Fermer
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload";

export default {
  data() {
    return {
      //stepper data
      e1: 1,
      step: 1,
      steps: 5,
      editable: [false, true, false, false, false, false],
      //register form
      registerValid: false,
      submitted: false,
      studentObject: {
        cin: "",
        cne: "",
        photo: "",
        firstNameAr: "",
        lastNameAr: "",
        birthDay: "",
        birthPlace: "",
        address: "",
        phone: "",
        nationality: "",
        filiere: "",
        level: "",
        bacType: "",
        bacGetYear: "",
        mention: "",
        bacLycee: "",
        bacDirection: "",
        bacAccademie: "",
        fatherFullName: "",
        fatherJob: "",
        motherFullName: "",
        motherJob: "",
        parentAddress: "",
        parentPhone: ""
      },

      dialog: false,
      studentObjectExemple: {},

      //some select fields data
      jobs: [],
      nationalities: ["Marocaine", "Etragere"],
      filieres: [
        {
          name: "Sciences et Technologies pour l'Ingenieur - STI",
          value: "sti"
        },
        {
          name: "Genie Informtique - GINF",
          value: "info"
        },
        {
          name: "Genie Industriel - GIND",
          value: "indus"
        },
        {
          name: "Genie Telecom et Reseaux - GTR",
          value: "gtr"
        },
        {
          name: "Genie Procedes et Materiaux Ceramiques - GPMC",
          value: "gpmc"
        }
      ],
      levels: [
        { name: "Premiere Annee", value: "1" },

        { name: "Deuxieme Annee", value: "2" },

        { name: "3eme Annee", value: "3" },

        { name: "4eme Annee", value: "4" },

        { name: "5eme Annee", value: "5" }
      ],
      bacs: [
        "Sciences maths A",
        "Sciences maths B",
        "Sciences Physiques Chimie",
        "Sciences de la Vie et Terre",
        "Sciences et Technologies electriques",
        "Sciences et Technologies mecaniques"
      ],
      bacsYears: ["2018", "2019", "2020"],
      mentions: ["Assez Bien", "Bien", "Tres Bien"],
      newStudent: false,
      degres: [
        "Concour National Commun (CNC)",
        "Diplome Universitaire de technologie (DUT)",
        "Diplome d'Etudes Universitaire General (DEUG)",
        "Diplome d'Etudes Universitaire Scientifiques et Technologiques (DEUST)",
        "Licence (Bac+3)",
        "Master (Bac +5)",
        "Cycle Preparatoire Integre"
      ],
      //user image
      show: false,

      //snackbar informations
      snackbar: false,
      snackbarContent: "",

      //arabic keyboard
      lastKeyboard: false,
      firstKeyboard: false,
      keyboardKeys: []
    };
  },

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
    newStudent(val) {
      if (val == true) {
        if (this.studentObject != undefined) {
          this.studentObject.degre = "";
          this.studentObject.etablissement = "";
          this.studentObject.city = "";
        }
      } else {
        if (this.studentObject != undefined) {
          delete this.studentObject.degre;
          delete this.studentObject.etablissement;
          delete this.studentObject.city;
        }
      }
    }
  },

  methods: {
    nextStep(n) {
      if (n == 5) {
        this.e1 = 1;
      }
      this.e1 = n + 1;
      this.editable[n + 1] = true;
    },

    lastNameClick(name, character) {
      if (name == "space") {
        this.studentObject.lastNameAr += " ";
      } else if (name == "delete") {
        this.studentObject.lastNameAr = this.studentObject.lastNameAr.substr(
          0,
          this.studentObject.lastNameAr.length - 1
        );
      }
      this.studentObject.lastNameAr += character;
    },

    firstNameClick(name, character) {
      if (name == "space") {
        this.studentObject.firstNameAr += " ";
      } else if (name == "delete") {
        this.studentObject.firstNameAr = this.studentObject.firstNameAr.substr(
          0,
          this.studentObject.firstNameAr.length - 1
        );
      }
      this.studentObject.firstNameAr += character;
    },
    lastNameArFocus() {
      this.lastKeyboard = true;
      this.firstKeyboard = false;
    },

    firstNameArFocus() {
      this.lastKeyboard = false;
      this.firstKeyboard = true;
    },

    toggleShow() {
      this.show = !this.show;
    },

    cropSuccess(imgDataUrl) {
      console.log("-------- crop success --------");
      this.studentObject.photo = imgDataUrl;
    },

    cropUploadSuccess(jsonData) {
      console.log("-------- upload success --------");
      console.log(jsonData);
    },

    cropUploadFail(status) {
      console.log("-------- upload fail --------");
      console.log(status);
    },

    //update profile
    onUpdate() {
      this.dialog = !this.dialog;
      this.e1 = 1;
    },

    //submit the form
    handleSubmit() {
      // stop here if form is invalid
      this.$store
        .dispatch("updateProfile", this.studentObject)
        .then(() => {
          this.snackbar = true;
          this.snackbarContent = "Le profile a ete mis a jourer aves succes !";
          this.getCurrentUser();
            
        })
        .catch(err => {
          console.log(err);
          this.snackbar = true;
          this.snackbarContent =
            "Un probleme se produit a niveau d'edition !";
        });
      
    },
    reset() {
      

      this.e1 = 1;
      this.editable = [false, true, false, false, false, false];
    },

    initializeKeyboard() {
      this.keyboardKeys = [
        {
          name: "ذ",
          character: "ذ"
        },
        {
          name: "ض",
          character: "ض"
        },
        {
          name: "ص",
          character: "ص"
        },
        {
          name: "ث",
          character: "ث"
        },
        {
          name: "ق",
          character: "ق"
        },
        {
          name: "delete",
          character: ""
        },
        {
          name: "ف",
          character: "ف"
        },

        {
          name: "غ",
          character: "غ"
        },
        {
          name: "ع",
          character: "ع"
        },
        {
          name: "ه",
          character: "ه"
        },
        {
          name: "خ",
          character: "خ"
        },
        {
          name: "ح",
          character: "ح"
        },
        {
          name: "ج",
          character: "ج"
        },
        {
          name: "د",
          character: "د"
        },
        {
          name: "ش",
          character: "ش"
        },
        {
          name: "س",
          character: "س"
        },
        {
          name: "ي",
          character: "ي"
        },
        {
          name: "ب",
          character: "ب"
        },
        {
          name: "ل",
          character: "ل"
        },
        {
          name: "ا",
          character: "ا"
        },
        {
          name: "ت",
          character: "ت"
        },
        {
          name: "ن",
          character: "ن"
        },
        {
          name: "م",
          character: "م"
        },
        {
          name: "ك",
          character: "ك"
        },
        {
          name: "ط",
          character: "ط"
        },
        {
          name: "ئ",
          character: "ئ"
        },
        {
          name: "ء",
          character: "ء"
        },
        {
          name: "ؤ",
          character: "ؤ"
        },
        {
          name: "ر",
          character: "ر"
        },
        {
          name: "لا",
          character: "لا"
        },
        {
          name: "ى",
          character: "ى"
        },
        {
          name: "ة",
          character: "ة"
        },
        {
          name: "و",
          character: "و"
        },
        {
          name: "ز",
          character: "ز"
        },
        {
          name: "ظ",
          character: "ظ"
        },

        {
          name: "space",
          character: " "
        }
      ];
    },
    initializeJobs() {
      this.jobs = [
        "Agriculteur exploitant",
        "rtisan, Décorateur, Peintre",
        "Autre métier non Renseigné",
        "Cadre d'Entreprise, Société (Gérant....)",
        "Cadre Fonction Publique",
        "Chef entreprise, Patron de socité",
        "Commerçant et assimilé",
        "Contremaître, Agent de maîtrise BTP",
        "Décédé",
        "Eleve,Etudiant",
        "Employé d'Entreprise, Société, Associat.",
        "Employé Fonction Public, Agent Civil",
        "Employé Métier de Commerce",
        "Ingénieur, Cadre Technique d'Entreprise",
        "Ouvrier Non Qualifié type artisanat",
        "Ouvrier  Non Qualifié type  Industrie",
        "Ouvrier Qualifié Industrie",
        "Ouvrier Qualifié Transport, Manutention",
        "Personne sans activité professionnelle",
        "Policier et militaire",
        "Professeur, Chercheur, Expert",
        "Profession Education (Instituteur, Prof.)",
        "Profession Information, Arts, Spectacles",
        "Profession interm adm et commerc. entreprise",
        "Profession Juridique (Juge, Avocat, ..)",
        "Profession libérale",
        "Profession lié à l'agriculture (Fellah,.)",
        "Profession lié à la religion Imam, Fquih",
        "Profession Lié à l'Artisanat",
        "Profession lié au Transport (Chauffeur...)",
        "Profession Militaires, Policiers ...",
        "Profession Publicité, Cinéma, Théatre...",
        "Profession Santé (Docteur, Infermier, AS",
        "Retraité de la Fonction Public",
        "Retraité metier de Commerce",
        "Retraité secteur Agricole",
        "Sans activité professionnelle",
        "Technicien, Electricien, Mécanique",
        "Sans",
        "Autre"
      ];
    },
    //get current user
    getCurrentUser() {
      this.studentObject=this.$store.getters.currentUser;
    }
  },
  created() {
    this.initializeKeyboard();
    this.initializeJobs();
    this.getCurrentUser();
  },
  computed: {
    //date select area
    //new Date().getFullYear().toString()

    
    bacGetYearArea() {
      const years = [];

      const rangeDate = [
        new Date().getFullYear() - 5,
        new Date().getFullYear() - 4,
        new Date().getFullYear() - 3,
        new Date().getFullYear() - 2,
        new Date().getFullYear() - 1,
        new Date().getFullYear()
      ];
      for (let i of rangeDate) {
        years.push(i.toString());
      }
      return years;
    }
  },
  components: {
    "my-upload": myUpload
  }
};
</script>
<style lang="scss" scoped>
.back {
  background-attachment: fixed;
  background-image: url("/img/bg_oc_things_grey.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
