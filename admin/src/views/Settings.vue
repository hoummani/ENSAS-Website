<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">
      Parametres d'application
    </h5>
    <div>
      <v-card>
        <v-tabs background-color="white" show-arrows color="indigo" left>
          <v-tab href="#tab-1">Parametres Globals</v-tab>
          <v-tab href="#tab-2">Securite</v-tab>

          <v-tab-item value="tab-1" class="pa-5">
            <v-layout row wrap>
              <v-flex xs12 sm12 md6 lg6>
                <v-card class="mr-1">
                  <v-card-title>
                    <div>
                      <v-icon left class="pb-1" color="secondary"
                        >lock_open</v-icon
                      >
                      <span>Activer/Desactiver</span>
                    </div>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-layout row wrap class="pa-2">
                      <div>
                        <!--  desactiver l'inscription  -->
                        <v-switch
                          v-model="inscriptionForm"
                          :label="
                            `Formulaire d'inscription: ${inscriptionFormString}`
                          "
                          inset
                          color="indigo"
                          :loading="inscriptionFormLoading"
                        ></v-switch>
                        <!-- descativer l'acces au concour  -->
                        <v-switch
                          v-model="inscriptionConcourForm"
                          inset
                          :label="
                            `Formulaire d'access au concours: ${inscriptionConcourFormString}`
                          "
                          color="indigo"
                          :loading="inscriptionConcourFormLoading"
                        ></v-switch>
                        <!--  descativer choix de filieres  -->

                        <v-switch
                          v-model="choixFiliere"
                          inset
                          :label="
                            `Choix de filiere en ligne: ${choixFiliereString}`
                          "
                          color="indigo"
                          :loading="choixFiliereLoading"
                        ></v-switch>
                      </div>
                    </v-layout>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-layout justify-end>
                      <v-btn color="primary">Confirmer</v-btn>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6>
                <v-card class="ml-1">
                  <v-card-title>
                    <div>
                      <v-icon left class="pb-1" color="secondary"
                        >calendar_today</v-icon
                      >
                      <span>Annonces/Actualitees</span>
                    </div>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-layout row wrap class="pa-2">
                      <div>
                        <!-- Annonces  -->
                        <v-switch
                          v-model="annonceSwitch"
                          :label="`Affichage d'annonces: ${annoncesString}`"
                          inset
                          color="indigo"
                          :loading="annoncesLoading"
                        ></v-switch>
                        <!-- Actualite  -->
                        <v-switch
                          v-model="actualiteSwitch"
                          :label="`Affichage d'actualite: ${actualiteString}`"
                          inset
                          color="indigo"
                          :loading="actualiteLoading"
                        ></v-switch>
                        <!-- calendar  -->
                        <v-switch
                          v-model="calendarSwitch"
                          :label="`Affichage de calendrier: ${calendarString}`"
                          inset
                          color="indigo"
                          :loading="calendarLoading"
                        ></v-switch>
                      </div>
                    </v-layout>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-layout justify-end>
                      <v-btn color="primary">Confirmer</v-btn>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-tab-item>
          <v-tab-item value="tab-2" class="pa-5">
            <v-layout row wrap>
              <v-flex xs12 sm12 md6 lg6>
                <v-card>
                  <v-card-title>
                    <div>
                      <v-icon left class="pb-1" color="secondary"
                        >security</v-icon
                      >
                      <span>Securite</span>
                    </div>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-layout row wrap full-width>
                      <!-- security rules  -->
                      <!--
                        <v-checkbox v-model="emailPassword" :label="`Email et Password: ${emailPassword.toString()}`" color="primary"></v-checkbox>-->

                      <div>
                        <v-list flat subheader three-line>
                          <v-list-item-group
                            v-model="settings"
                            multiple
                            active-class
                          >
                            <v-list-item>
                              <template v-slot:default="{ active }">
                                <v-list-item-action>
                                  <v-checkbox
                                    v-model="active"
                                    color="primary"
                                  ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                  <v-list-item-title
                                    >Email et Password</v-list-item-title
                                  >
                                  <v-list-item-subtitle
                                    >Notify me about updates to apps or games
                                    that I downloaded</v-list-item-subtitle
                                  >
                                </v-list-item-content>
                              </template>
                            </v-list-item>

                            <v-list-item>
                              <template v-slot:default="{ active }">
                                <v-list-item-action>
                                  <v-checkbox
                                    v-model="active"
                                    color="primary"
                                  ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                  <v-list-item-title
                                    >Compte Google</v-list-item-title
                                  >
                                  <v-list-item-subtitle
                                    >Auto-update apps at any time. Data charges
                                    may apply</v-list-item-subtitle
                                  >
                                </v-list-item-content>
                              </template>
                            </v-list-item>

                            <v-list-item>
                              <template v-slot:default="{ active }">
                                <v-list-item-action>
                                  <v-checkbox
                                    v-model="active"
                                    color="primary"
                                  ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                  <v-list-item-title
                                    >Compte Facebook</v-list-item-title
                                  >
                                  <v-list-item-subtitle
                                    >Automatically add home screen widgets when
                                    downloads complete</v-list-item-subtitle
                                  >
                                </v-list-item-content>
                              </template>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </div>
                    </v-layout>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-layout justify-end>
                      <v-btn color="primary">Confirmer</v-btn>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //activer/descativer
      inscriptionForm: false,
      inscriptionFormString: "Desactive",
      inscriptionFormLoading: false,
      //-------
      inscriptionConcourForm: false,
      inscriptionConcourFormString: "Desactive",
      inscriptionConcourFormLoading: false,
      //----
      choixFiliere: false,
      choixFiliereString: "Desactive",
      choixFiliereLoading: false,
      //---------------------
      //   Annonces
      annonceSwitch: true,
      annoncesString: "Active",
      annoncesLoading: false,
      //   Actualite
      actualiteSwitch: true,
      actualiteString: "Active",
      actualiteLoading: false,
      //-----------------
      //    Calendrier
      calendarSwitch: true,
      calendarString: "Active",
      calendarLoading: false,
      //-- security rules
      emailPassword: true,
      settings: []
    };
  },
  watch: {
    inscriptionForm: function(v) {
      this.inscriptionFormLoading = true;
      setTimeout(() => {
        this.inscriptionFormLoading = false;
      }, 2000);
      if (v == true) {
        this.inscriptionFormString = "Active";
      } else {
        this.inscriptionFormString = "Desactive";
      }
    },

    inscriptionConcourForm: function(v) {
      this.inscriptionConcourFormLoading = true;
      setTimeout(() => {
        this.inscriptionConcourFormLoading = false;
      }, 2000);
      if (v == true) {
        this.inscriptionConcourFormString = "Active";
      } else {
        this.inscriptionConcourFormString = "Desactive";
      }
    },
    choixFiliere: function(v) {
      this.choixFiliereLoading = true;
      setTimeout(() => {
        this.choixFiliereLoading = false;
      }, 2000);
      if (v == true) {
        this.choixFiliereString = "Active";
      } else {
        this.choixFiliereString = "Desactive";
      }
    },
    annonceSwitch: function(v) {
      this.annoncesLoading = true;
      setTimeout(() => {
        this.annoncesLoading = false;
      }, 2000);
      if (v == true) {
        this.annoncesString = "Active";
      } else {
        this.annoncesString = "Desactive";
      }
    },
    actualiteSwitch: function(v) {
      this.actualiteLoading = true;
      setTimeout(() => {
        this.actualiteLoading = false;
      }, 2000);
      if (v == true) {
        this.actualiteString = "Active";
      } else {
        this.actualiteString = "Desactive";
      }
    },
    calendarSwitch: function(v) {
      this.calendarLoading = true;
      setTimeout(() => {
        this.calendarLoading = false;
      }, 2000);
      if (v == true) {
        this.calendarString = "Active";
      } else {
        this.calendarString = "Desactive";
      }
    }
  }
};
</script>
