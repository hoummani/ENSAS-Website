<template>
  <div>
    <v-layout row wrap class="white pa-3">
      <v-flex xs12 sm12 md12 lg12>
        <h3
          class="display-1 text-sm-center grey--text text--darken-2 font-weight-light"
        >
          Resume de vos informations
        </h3>
        <v-divider></v-divider>
        <div class="pt-1 pb-1">
          <v-alert :value="true" color="warning" icon="priority_high" outline>
            <p class="body-2">
              Priere de remplir et verifier vos informations
              <span class="red--text"
                >La modofication se fait dans le block "Editer Mon Profile"</span
              >
            </p>
          </v-alert>
        </div>

        <v-divider></v-divider>
        <v-btn
          :loading="loader"
          :disabled="loader"
          color="secondary"
          block
          @click="onValidate"
        >
          Verifier
          <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </template>
        </v-btn>
      </v-flex>
      <div v-if="openVerifier" style="width:100%;">
        <v-card style="width:100%;">
          <v-card-title>
            <h4
              class="body-4 center grey--text text--darken-2 font-weight-bold"
            >
              Vos Informations Personnels
            </h4>
          </v-card-title>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12 sm4 md4 lg4>
              <div class="pa-1">
                <h5 class="caption grey--text">Photo d'identite :</h5>
                <img :src="studentObjectExemple.photo" />
              </div>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
              <v-flex xs12 sm12 md12 lg12>
                <h5 class="caption grey--text">CIN :</h5>
                <div class="font-weight-bold">
                  {{ studentObjectExemple.cin }}
                </div>
              </v-flex>
              <v-divider></v-divider>
              <v-flex xs12 sm12 md12 lg12>
                <h5 class="caption grey--text">CNE :</h5>
                <div class="font-weight-bold">
                  {{ studentObjectExemple.cne }}
                </div>
              </v-flex>
              <v-divider></v-divider>
              <v-flex xs12 sm12 md12 lg12>
                <h5 class="caption grey--text">Nom :</h5>
                <div class="font-weight-bold">
                  {{ studentObjectExemple.firstName }}
                </div>
              </v-flex>
              <v-divider></v-divider>
              <v-flex xs12 sm12 md12 lg12>
                <h5 class="caption grey--text">Prenom :</h5>
                <div class="font-weight-bold">
                  {{ studentObjectExemple.lastName }}
                </div>
              </v-flex>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap full-width>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg12>
                <v-layout class="pa-2" row wrap justify-space-around>
                  <v-flex xs12 sm5 md5 lg5>
                    <h5 class="caption grey--text">:النسب</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.firstNameAr }}
                    </div>
                  </v-flex>
                  <v-flex xs12 sm5 md5 lg5>
                    <h5 class="caption grey--text">:الاسم</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.lastNameAr }}
                    </div>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-2">
                  <v-flex xs12 sm4 md3 lg3>
                    <h5 class="caption grey--text">Naissance :</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.birthDay }}
                    </div>
                  </v-flex>
                  <v-flex xs12 sm4 md3 lg3>
                    <h5 class="caption grey--text">Lieu :</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.birthPlace }}
                    </div>
                  </v-flex>
                  <v-flex xs12 sm4 md3 lg3>
                    <h5 class="caption grey--text">GSM :</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.phone }}
                    </div>
                  </v-flex>
                  <v-flex xs12 sm4 md3 lg3>
                    <h5 class="caption grey--text">Nationalite :</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.nationality }}
                    </div>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-2">
                  <v-flex xs12 sm12 md12 lg12>
                    <h5 class="caption grey--text">Adresse :</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.address }}
                    </div>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-2">
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">
                      Nom et Prenom de le pere :
                    </h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.fatherFullName }}
                    </div>
                  </v-flex>
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">Profession de le pere :</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.fatherJob }}
                    </div>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-2">
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">
                      Nom et Prenom de la mere :
                    </h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.motherFullName }}
                    </div>
                  </v-flex>
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">Profession de la mere :</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.motherJob }}
                    </div>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-2">
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">Adresse parentale :</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.parentAddress }}
                    </div>
                  </v-flex>
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">Telephone du parents :</h5>
                    <div class="font-weight-bold">
                      {{ studentObjectExemple.parentPhone }}
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-card>
        <v-card class="mt-2" style="width:100%;">
          <v-card-title>
            <h4
              class="body-4 center grey--text text--darken-2 font-weight-bold"
            >
              Votre Cursus Scolaire
            </h4>
          </v-card-title>
          <v-divider></v-divider>
          <div>
            <v-layout row wrap class="pa-2">
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Annee :</h5>
                <div class="font-weight-bold">
                  {{ studentObjectExemple.level }}
                </div>
              </v-flex>
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Filiere :</h5>
                <div class="font-weight-bold">
                  {{ studentObjectExemple.filiere }}
                </div>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap class="pa-2">
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Type de Bac :</h5>
                <div class="font-weight-bold">
                  {{ studentObjectExemple.bacType }}
                </div>
              </v-flex>
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Mention / Annee :</h5>
                <div class="font-weight-bold">
                  {{ studentObjectExemple.mention }} /
                  {{ studentObjectExemple.bacGetYear }}
                </div>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap class="pa-2">
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Lycee :</h5>
                <div class="font-weight-bold">
                  {{ studentObjectExemple.bacLycee }}
                </div>
              </v-flex>
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Direction / Accademie :</h5>
                <div class="font-weight-bold">
                  {{ studentObjectExemple.bacDirection }} /
                  {{ studentObjectExemple.bacAccademie }}
                </div>
              </v-flex>
            </v-layout>
          </div>
        </v-card>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openVerifier: false,
      loader: false,
      studentObjectExemple: {
        photo: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        cin: "HH234567",
        cne: "1224567898",
        firstName: "Handi",
        lastName: "Fouad",
        firstNameAr: "هندي",
        lastNameAr: "فؤاد",

        birthDay: "08/07/2019",
        birthPlace: "Safi",
        address: "24, tarik Jraifat, safi",
        nationality: "Marocaine",
        phone: "09876567",
        fatherFullName: "hassan brayk",
        fatherJob: "engenieur",
        motherFullName: "Hnia hafssa",
        motherJob: "Sans",
        parentAddress: "24, tarik Jraifat, safi",
        parentPhone: "0656789854",
        level: "5 eme anne",
        filiere: "Genie informatique",
        bacType: "STM",
        mention: "Tres bien",
        bacGetYear: "2015",
        bacLycee: "Alkhawarismy",
        bacDirection: "safi",
        bacAccademie: "Safi-Marrakech"
      }
    }
  },
  computed: {
    currentUser:function() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    onValidate() {
      if (this.openVerifier == true) {
        this.openVerifier = false;
      } else {
        this.loader = true;
        setTimeout(() => {
          this.loader = false;
          this.openVerifier = !this.openVerifier;
        }, 2000);
      }
    }
  },
}
</script>

