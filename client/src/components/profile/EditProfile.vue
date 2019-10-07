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
              @submit.prevent="handleSubmit"
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
                        @input="$v.studentObject.cin.$touch()"
                        @blur="$v.studentObject.cin.$touch()"
                        :error-messages="cinErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="CNE(Code Nationnal de l'étudiant)"
                        type="text"
                        v-model="studentObject.cne"
                        @input="$v.studentObject.cne.$touch()"
                        @blur="$v.studentObject.cne.$touch()"
                        :error-messages="cneErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <!-- email  -->
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="E-mail"
                        v-model="studentObject.email"
                        type="email"
                        @input="$v.studentObject.email.$touch()"
                        @blur="$v.studentObject.email.$touch()"
                        :error-messages="emailErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="E-mail(Confirmer l'E-mail)"
                        type="email"
                        v-model="studentObject.confirmEnail"
                        @input="$v.studentObject.confirmEnail.$touch()"
                        @blur="$v.studentObject.confirmEnail.$touch()"
                        :error-messages="confirmEnailErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <!-- password -->
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="Mot de passe"
                        v-model="studentObject.password"
                        type="password"
                        @input="$v.studentObject.password.$touch()"
                        @blur="$v.studentObject.password.$touch()"
                        :error-messages="passwordErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="Confirmer le mot de passe"
                        type="password"
                        v-model="studentObject.confirmPassword"
                        @input="$v.studentObject.confirmPassword.$touch()"
                        @blur="$v.studentObject.confirmPassword.$touch()"
                        :error-messages="confirmPasswordErrors"
                        required
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
                        label="Nom"
                        v-model="studentObject.firstName"
                        @input="$v.studentObject.firstName.$touch()"
                        @blur="$v.studentObject.firstName.$touch()"
                        :error-messages="firstNameErrors"
                      ></v-text-field>
                    </v-flex>
                    <!-- last name  -->
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        type="text"
                        label="Prenom"
                        v-model="studentObject.lastName"
                        @input="$v.studentObject.lastName.$touch()"
                        @blur="$v.studentObject.lastName.$touch()"
                        :error-messages="lastNameErrors"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

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
                        required
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
                        required
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
                        @input="$v.studentObject.birthDay.$touch()"
                        @blur="$v.studentObject.birthDay.$touch()"
                        :error-messages="birthDayErrors"
                      ></v-text-field>
                    </v-flex>
                    <!-- last name  -->
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        type="text"
                        label="Lieu de naissance"
                        v-model="studentObject.birthPlace"
                        @input="$v.studentObject.birthPlace.$touch()"
                        @blur="$v.studentObject.birthPlace.$touch()"
                        :error-messages="birthPlaceErrors"
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
                        @input="$v.studentObject.nationality.$touch()"
                        @blur="$v.studentObject.nationality.$touch()"
                        :error-messages="nationalityErrors"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="Telephone"
                        v-model="studentObject.phone"
                        @input="$v.studentObject.phone.$touch()"
                        @blur="$v.studentObject.phone.$touch()"
                        :error-messages="phoneErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm10 md8 lg8>
                      <v-textarea
                        v-model="studentObject.address"
                        @input="$v.studentObject.address.$touch()"
                        @blur="$v.studentObject.address.$touch()"
                        label="Adresse"
                        clearable
                        hint="Exemple: 00, Residence XX Quartier YY ville-pays"
                        persistent-hint
                        :error-messages="addressErrors"
                        required
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
                        @input="$v.studentObject.fatherFullName.$touch()"
                        @blur="$v.studentObject.fatherFullName.$touch()"
                        :error-messages="fatherFullNameErrors"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-select
                        v-model="studentObject.fatherJob"
                        :items="jobs"
                        label="Profession du pere"
                        @input="$v.studentObject.fatherJob.$touch()"
                        @blur="$v.studentObject.fatherJob.$touch()"
                        :error-messages="fatherJobErrors"
                        required
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
                        @input="$v.studentObject.motherFullName.$touch()"
                        @blur="$v.studentObject.motherFullName.$touch()"
                        :error-messages="motherFullNameErrors"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-select
                        v-model="studentObject.motherJob"
                        :items="jobs"
                        label="Profession du mere"
                        @input="$v.studentObject.motherJob.$touch()"
                        @blur="$v.studentObject.motherJob.$touch()"
                        :error-messages="motherJobErrors"
                        required
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
                        @input="$v.studentObject.parentAddress.$touch()"
                        @blur="$v.studentObject.parentAddress.$touch()"
                        :error-messages="parentAddressErrors"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        v-model="studentObject.parentPhone"
                        type="phone"
                        label="Telephone des parents"
                        @input="$v.studentObject.parentPhone.$touch()"
                        @blur="$v.studentObject.parentPhone.$touch()"
                        :error-messages="parentPhoneErrors"
                        required
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
                        @input="$v.studentObject.filiere.$touch()"
                        item-text="name"
                        item-value="value"
                        clearable
                        @blur="$v.studentObject.filiere.$touch()"
                        :error-messages="filiereErrors"
                        required
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
                        @blur="$v.studentObject.level.$touch()"
                        :error-messages="levelErrors"
                        required
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
                        @input="$v.studentObject.bacType.$touch()"
                        @blur="$v.studentObject.bacType.$touch()"
                        :error-messages="bacTypeErrors"
                        label="Type de Bac"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-select
                        :items="bacGetYearArea"
                        v-model="studentObject.bacGetYear"
                        @input="$v.studentObject.bacGetYear.$touch()"
                        @blur="$v.studentObject.bacGetYear.$touch()"
                        :error-messages="bacGetYearErrors"
                        clearable
                        label="Annee d'obtention"
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-select
                        :items="mentions"
                        v-model="studentObject.mention"
                        @input="$v.studentObject.mention.$touch()"
                        @blur="$v.studentObject.mention.$touch()"
                        :error-messages="mentionErrors"
                        clearable
                        label="Mention"
                        required
                      ></v-select>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-text-field
                        type="text"
                        v-model="studentObject.bacLycee"
                        label="Lycee"
                        @input="$v.studentObject.bacLycee.$touch()"
                        @blur="$v.studentObject.bacLycee.$touch()"
                        :error-messages="bacLyceeErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-text-field
                        type="text"
                        v-model="studentObject.bacDirection"
                        label="La Direction"
                        @input="$v.studentObject.bacDirection.$touch()"
                        @blur="$v.studentObject.bacDirection.$touch()"
                        :error-messages="bacDirectionErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm3 md2 lg2>
                      <v-text-field
                        type="text"
                        v-model="studentObject.bacAccademie"
                        label="Accademie"
                        @input="$v.studentObject.bacAccademie.$touch()"
                        @blur="$v.studentObject.bacAccademie.$touch()"
                        :error-messages="bacAccademieErrors"
                        required
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
                            required
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 sm3 md2 lg2>
                          <v-text-field
                            type="text"
                            v-model="studentObject.etablissement"
                            label="Etablissement"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm3 md2 lg2>
                          <v-text-field
                            type="text"
                            v-model="studentObject.city"
                            label="Ville"
                            required
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
                <v-btn type="submit" color="primary" v-if="n === 5"
                  >Enregistrer</v-btn
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
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
        email: "",
        confirmEnail: "",
        photo: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
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
  validations: {
    studentObject: {
      cin: {
        required,
        minLength: minLength(6)
      },
      cne: {
        required,
        minLength: minLength(6)
      },

      email: {
        required,
        email
      },
      confirmEnail: {
        required,
        email,
        sameAsEmail: sameAs("email")
      },
      password: {
        required,
        minLength: minLength(6),
        strongPassword(password) {
          return (
            /[a-z]/.test(password) && // checks for a-z
            /[0-9]/.test(password) && // checks for 0-9
            /\W|_/.test(password) && // checks for special char
            password.length >= 6
          );
        }
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      firstNameAr: {
        required,
        minLength: minLength(3)
      },
      lastNameAr: {
        required,
        minLength: minLength(3)
      },
      birthDay: {
        required
      },
      birthPlace: {
        required,
        minLength: minLength(3)
      },
      nationality: {
        required
      },
      phone: {
        required,
        minLength: minLength(9)
      },
      address: {
        required,
        minLength: minLength(6)
      },
      fatherFullName: {
        required,
        minLength: minLength(6)
      },
      fatherJob: {
        required
      },
      motherFullName: {
        required,
        minLength: minLength(6)
      },
      motherJob: {
        required
      },
      parentAddress: {
        required,
        minLength: minLength(6)
      },
      parentPhone: {
        required,

        minLength: minLength(9)
      },
      filiere: {
        required
      },
      level: {
        required
      },
      bacType: {
        required
      },
      bacGetYear: { required },
      mention: {
        required
      },
      bacLycee: {
        required,
        minLength: minLength(3)
      },
      bacDirection: {
        required,
        minLength: minLength(3)
      },
      bacAccademie: {
        required,
        minLength: minLength(3)
      }
    }
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
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl) {
      console.log("-------- crop success --------");
      this.studentObject.photo = imgDataUrl;
      //console.log(this.studentObject.photo);
    },
    /**
     * upload success
     *
     * [param] jsonData  server api return data, already json encode
     * [param] field
     */
    cropUploadSuccess(jsonData) {
      console.log("-------- upload success --------");
      console.log(jsonData);
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
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
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.snackbar = true;
        this.snackbarContent = "Veuillez verifiez toutes les champs !";
      } else {
        this.submitted = true;
        this.dialog = true;
        this.studentObjectExemple = this.studentObject;
        //console.log(this.studentObject);
      }
    },
    reset() {
      this.$v.$reset();

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
    }
  },
  created() {
    this.initializeKeyboard();
    this.initializeJobs();
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
    },
    //validations computed

    cinErrors() {
      const errors = [];
      if (!this.$v.studentObject.cin.$dirty) return errors;
      !this.$v.studentObject.cin.minLength &&
        errors.push("Must be valid Field CIN");
      !this.$v.studentObject.cne.required && errors.push("CIN is required");
      return errors;
    },
    cneErrors() {
      const errors = [];
      if (!this.$v.studentObject.cne.$dirty) return errors;
      !this.$v.studentObject.cne.minLength &&
        errors.push("Must be valid Field CNE");
      !this.$v.studentObject.cne.required && errors.push("CNE is required");
      return errors;
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.studentObject.email.$dirty) return errors;
      !this.$v.studentObject.email.email && errors.push("Must be valid e-mail");
      !this.$v.studentObject.email.required &&
        errors.push("E-mail is required");
      return errors;
    },
    confirmEnailErrors() {
      const errors = [];
      if (!this.$v.studentObject.confirmEnail.$dirty) return errors;
      !this.$v.studentObject.confirmEnail.email &&
        errors.push("Must be valid e-mail");
      !this.$v.studentObject.confirmEnail.required &&
        errors.push("E-mail is required");
      !this.$v.studentObject.confirmEnail.sameAsEmail &&
        errors.push("Confirm E-mail must be the same as E-mail");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.studentObject.password.$dirty) return errors;
      !this.$v.studentObject.password.minLength &&
        errors.push("Password must be great then 6 characters !");
      !this.$v.studentObject.password.required &&
        errors.push("Password is required");
      !this.$v.studentObject.password.strongPassword &&
        errors.push("Password must be strong !");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.studentObject.confirmPassword.$dirty) return errors;
      !this.$v.studentObject.confirmPassword.sameAsPassword &&
        errors.push("Confirm Password must be the same as password!");
      !this.$v.studentObject.password.required &&
        errors.push("Confirm Password is required");

      return errors;
    },
    firstNameErrors() {
      const errors = [];
      if (!this.$v.studentObject.firstName.$dirty) return errors;
      !this.$v.studentObject.firstName.minLength &&
        errors.push("Must be valid Field Nom");
      !this.$v.studentObject.firstName.required &&
        errors.push("Nom is required");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.studentObject.lastName.$dirty) return errors;
      !this.$v.studentObject.lastName.minLength &&
        errors.push("Must be valid Field Prenom");
      !this.$v.studentObject.lastName.required &&
        errors.push("Prenom is required");
      return errors;
    },

    firstNameArErrors() {
      const errors = [];
      if (!this.$v.studentObject.firstNameAr.$dirty) return errors;
      !this.$v.studentObject.firstNameAr.minLength &&
        errors.push("الاسم العائلي يجب ان يكون مستوفيا");
      !this.$v.studentObject.firstNameAr.required &&
        errors.push("الاسم العائلي ضروريا");
      return errors;
    },
    lastNameArErrors() {
      const errors = [];
      if (!this.$v.studentObject.lastNameAr.$dirty) return errors;
      !this.$v.studentObject.lastNameAr.minLength &&
        errors.push("الاسم الشخصي يجب ان يكون مستوفيا");
      !this.$v.studentObject.firstNameAr.required &&
        errors.push("الاسم الشخصي ضروريا");
      return errors;
    },
    birthDayErrors() {
      const errors = [];
      if (!this.$v.studentObject.birthDay.$dirty) return errors;
      !this.$v.studentObject.birthDay.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    birthPlaceErrors() {
      const errors = [];
      if (!this.$v.studentObject.birthPlace.$dirty) return errors;
      !this.$v.studentObject.birthPlace.minLength &&
        errors.push("M'a pas de sense !");
      !this.$v.studentObject.birthPlace.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    nationalityErrors() {
      const errors = [];
      if (!this.$v.studentObject.nationality.$dirty) return errors;
      !this.$v.studentObject.nationality.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.studentObject.phone.$dirty) return errors;
      !this.$v.studentObject.phone.minLength &&
        errors.push("Telephone non valide !");
      !this.$v.studentObject.phone.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    addressErrors() {
      const errors = [];
      if (!this.$v.studentObject.address.$dirty) return errors;
      !this.$v.studentObject.address.minLength &&
        errors.push("Adresse non valide !");
      !this.$v.studentObject.address.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    fatherFullNameErrors() {
      const errors = [];
      if (!this.$v.studentObject.fatherFullName.$dirty) return errors;
      !this.$v.studentObject.fatherFullName.minLength &&
        errors.push("Les informations ne sont pas completes !");
      !this.$v.studentObject.fatherFullName.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    fatherJobErrors() {
      const errors = [];
      if (!this.$v.studentObject.fatherJob.$dirty) return errors;

      !this.$v.studentObject.fatherJob.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    motherFullNameErrors() {
      const errors = [];
      if (!this.$v.studentObject.motherFullName.$dirty) return errors;
      !this.$v.studentObject.motherFullName.minLength &&
        errors.push("Les informations ne sont pas completes !");
      !this.$v.studentObject.motherFullName.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    motherJobErrors() {
      const errors = [];
      if (!this.$v.studentObject.motherJob.$dirty) return errors;

      !this.$v.studentObject.motherJob.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    parentAddressErrors() {
      const errors = [];
      if (!this.$v.studentObject.parentAddress.$dirty) return errors;
      !this.$v.studentObject.parentAddress.minLength &&
        errors.push("Adresse non valide !");
      !this.$v.studentObject.parentAddress.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    parentPhoneErrors() {
      const errors = [];
      if (!this.$v.studentObject.parentPhone.$dirty) return errors;
      !this.$v.studentObject.parentPhone.minLength &&
        errors.push("Telephone non valide !");

      !this.$v.studentObject.parentPhone.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    filiereErrors() {
      const errors = [];
      if (!this.$v.studentObject.filiere.$dirty) return errors;
      !this.$v.studentObject.filiere.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    levelErrors() {
      const errors = [];
      if (!this.$v.studentObject.level.$dirty) return errors;
      !this.$v.studentObject.level.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    bacTypeErrors() {
      const errors = [];
      if (!this.$v.studentObject.bacType.$dirty) return errors;
      !this.$v.studentObject.bacType.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    bacGetYearErrors() {
      const errors = [];
      if (!this.$v.studentObject.bacGetYear.$dirty) return errors;
      !this.$v.studentObject.bacGetYear.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    mentionErrors() {
      const errors = [];
      if (!this.$v.studentObject.mention.$dirty) return errors;
      !this.$v.studentObject.mention.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    bacLyceeErrors() {
      const errors = [];
      if (!this.$v.studentObject.bacLycee.$dirty) return errors;
      !this.$v.studentObject.bacLycee.minLength &&
        errors.push("N'a pas de sense !");
      !this.$v.studentObject.bacLycee.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    bacDirectionErrors() {
      const errors = [];
      if (!this.$v.studentObject.bacDirection.$dirty) return errors;
      !this.$v.studentObject.bacDirection.minLength &&
        errors.push("N'a pas de sense !");
      !this.$v.studentObject.bacDirection.required &&
        errors.push("Champ obligatoire !");
      return errors;
    },
    bacAccademieErrors() {
      const errors = [];
      if (!this.$v.studentObject.bacAccademie.$dirty) return errors;
      !this.$v.studentObject.bacAccademie.minLength &&
        errors.push("N'a pas de sense !");
      !this.$v.studentObject.bacAccademie.required &&
        errors.push("Champ obligatoire !");
      return errors;
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


