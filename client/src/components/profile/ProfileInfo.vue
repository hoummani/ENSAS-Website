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
            <p class="body-2 pt-3">
              Priere de remplir et verifier vos informations
              <span class="red--text"
                >La modofication se fait dans le block "Editer Mon
                Profile"</span
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
                <img v-if="studentObject.photo" :src="studentObject.photo" />
                <img v-else width="140px" height="120px" src="/img/01-Straight-A-students.jpg" />
              </div>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
              <v-flex xs12 sm12 md12 lg12>
                <h5 class="caption grey--text">CIN :</h5>
                <div v-if="studentObject.cin" class="font-weight-bold">
                  {{ studentObject.cin }}
                </div>
                <div v-else class="font-weight-bold red--text">Nulle</div>
              </v-flex>
              <v-divider></v-divider>
              <v-flex xs12 sm12 md12 lg12>
                <h5 class="caption grey--text">CNE :</h5>
                <div v-if="studentObject.cne" class="font-weight-bold">
                  {{ studentObject.cne }}
                </div>
                <div v-else class="font-weight-bold red--text">Nulle</div>
              </v-flex>
              <v-divider></v-divider>
              <v-flex xs12 sm12 md12 lg12>
                <h5 class="caption grey--text">Nom :</h5>
                <div v-if="studentObject.firstName" class="font-weight-bold">
                  {{ studentObject.firstName }}
                </div>
                <div v-else class="font-weight-bold red--text">Nulle</div>
              </v-flex>
              <v-divider></v-divider>
              <v-flex xs12 sm12 md12 lg12>
                <h5 class="caption grey--text">Prenom :</h5>
                <div v-if="studentObject.lastName" class="font-weight-bold">
                  {{ studentObject.lastName }}
                </div>
                <div v-else class="font-weight-bold red--text">Nulle</div>
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
                    <div v-if="studentObject.firstNameAr" class="font-weight-bold">
                      {{ studentObject.firstNameAr }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                  <v-flex xs12 sm5 md5 lg5>
                    <h5 class="caption grey--text">:الاسم</h5>
                    <div v-if="studentObject.lastNameAr" class="font-weight-bold">
                      {{ studentObject.lastNameAr }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-2">
                  <v-flex xs12 sm4 md3 lg3>
                    <h5 class="caption grey--text">Naissance :</h5>
                    <div v-if="studentObject.birthDay" class="font-weight-bold">
                      {{ studentObject.birthDay }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                  <v-flex xs12 sm4 md3 lg3>
                    <h5 class="caption grey--text">Lieu :</h5>
                    <div v-if="studentObject.birthPlace" class="font-weight-bold">
                      {{ studentObject.birthPlace }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                  <v-flex xs12 sm4 md3 lg3>
                    <h5 class="caption grey--text">GSM :</h5>
                    <div v-if="studentObject.phone" class="font-weight-bold">
                      {{ studentObject.phone }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                  <v-flex xs12 sm4 md3 lg3>
                    <h5 class="caption grey--text">Nationalite :</h5>
                    <div v-if="studentObject.nationality" class="font-weight-bold">
                      {{ studentObject.nationality }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-2">
                  <v-flex xs12 sm12 md12 lg12>
                    <h5 class="caption grey--text">Adresse :</h5>
                    <div v-if="studentObject.address" class="font-weight-bold">
                      {{ studentObject.address }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-2">
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">
                      Nom et Prenom de le pere :
                    </h5>
                    <div v-if="studentObject.fatherFullName" class="font-weight-bold">
                      {{ studentObject.fatherFullName }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">Profession de le pere :</h5>
                    <div v-if="studentObject.fatherJob" class="font-weight-bold">
                      {{ studentObject.fatherJob }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-2">
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">
                      Nom et Prenom de la mere :
                    </h5>
                    <div v-if="studentObject.motherFullName" class="font-weight-bold">
                      {{ studentObject.motherFullName }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">Profession de la mere :</h5>
                    <div v-if="studentObject.motherJob" class="font-weight-bold">
                      {{ studentObject.motherJob }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-2">
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">Adresse parentale :</h5>
                    <div v-if="studentObject.parentAddress" class="font-weight-bold">
                      {{ studentObject.parentAddress }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
                  </v-flex>
                  <v-flex xs12 sm6 md6 lg6>
                    <h5 class="caption grey--text">Telephone du parents :</h5>
                    <div v-if="studentObject.parentPhone" class="font-weight-bold">
                      {{ studentObject.parentPhone }}
                    </div>
                    <div v-else class="font-weight-bold red--text">Nulle</div>
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
                <div v-if="studentObject.level" class="font-weight-bold">
                  {{ studentObject.level }}
                </div>
                <div v-else class="font-weight-bold red--text">Nulle</div>
              </v-flex>
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Filiere :</h5>
                <div v-if="studentObject.filiere" class="font-weight-bold">
                  {{ studentObject.filiere }}
                </div>
                <div v-else class="font-weight-bold red--text">Nulle</div>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap class="pa-2">
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Type de Bac :</h5>
                <div v-if="studentObject.bacType" class="font-weight-bold">
                  {{ studentObject.bacType }}
                </div>
                <div v-else class="font-weight-bold red--text">Nulle</div>
              </v-flex>
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Mention / Annee :</h5>
                <div v-if="studentObject.mention && studentObject.bacGetYear" class="font-weight-bold">
                  {{ studentObject.mention }} /
                  {{ studentObject.bacGetYear }}
                </div>
                <div v-else class="font-weight-bold red--text">Nulle</div>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap class="pa-2">
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Lycee :</h5>
                <div v-if="studentObject.bacLycee" class="font-weight-bold">
                  {{ studentObject.bacLycee }}
                </div>
                <div v-else class="font-weight-bold red--text">Nulle</div>
              </v-flex>
              <v-flex xs12 sm6 md6 lg6>
                <h5 class="caption grey--text">Direction / Accademie :</h5>
                <div class="font-weight-bold" v-if="studentObject.bacDirection && studentObject.bacAccademie">
                  {{ studentObject.bacDirection }} /
                  {{ studentObject.bacAccademie }}
                </div>
                <div v-else class="font-weight-bold red--text">Nulle</div>
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
      studentObject: {},
      
    };
  },
  computed: {
    
  },
  created() {
    this.getCurrentStudent();
  },
  methods: {
    getCurrentStudent() {
      this.studentObject = this.$store.getters.currentUser;
    },
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
  }
};
</script>
