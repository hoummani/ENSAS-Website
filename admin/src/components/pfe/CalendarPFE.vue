<template>
  <div class="pa-4">
    <v-layout class="pa-3 pl-5 pr-5" wrap row>
      <v-text-field type="text" append-icon="search" label="Recherche..." single-line hide-details></v-text-field>
      <v-spacer></v-spacer>
      <v-btn color="secondary" @click="onAddDate">Ajouter Une date</v-btn>
    </v-layout>
    <v-card
      class="ma-2 pl-4"
      v-for="(item,index) in calendars"
      :key="index"
      v-ripple="{ class: `indigo--text lighten-2` }"
    >
      <v-layout row wrap class="pa-3 pl-4">
        <v-flex xs6 sm7 md8 lg8>
          <div class="caption grey--text">La date</div>
          <div class="body-2 font-weight-bold">{{item.date}}</div>
        </v-flex>
        <!-- operations -->
        <v-flex xs6 sm5 md4 lg4>
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
      </v-layout>

      <v-layout row wrap class="pa-3 pl-4">
        <v-flex>
          <div class="caption grey--text">Descriptions</div>
          <div>{{item.description}}</div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>

    <!-- add & edit form  -->
    <v-layout justify-center>
      <v-dialog v-model="ItemDialog" persistent max-width="590">
        <v-card>
          <v-card-title class="headline">Ajouter Une Date</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container grid-list-md>
              <v-form ref="ItemForm" v-model="ItemValidForm" lazy-validation>
                <!--  date -->
                <v-menu v-model="menu2" :close-on-content-click="false" full-width max-width="290">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="formatedDate"
                      clearable
                      :rules="calendarRules.requiredField" label="La date"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="calendar.date" locale="fr" @change="menu2 = false"></v-date-picker>
                </v-menu>
                

                <v-textarea
                  v-model="calendar.description"
                  label="Description"
                  :rules="calendarRules.textInput"
                  required
                ></v-textarea>
              </v-form>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-layout row justify-end>
              <div>
                <v-btn text color="indigo darken-1" @click="ItemDialog=false">Annuler</v-btn>
                <v-btn text color="indigo darken-1" @click="onAddSubmit">Ajouter</v-btn>
              </div>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>

import format from "date-fns/format";
export default {
  data() {
    return {
      headers: [],
      calendars: [],

      ////modal
      ItemDialog: false,
      ItemValidForm: false,
      menu2: false,
      calendar: {
        date: "",
        description: ""
      },
      calendarRules: {
        textInput: [
          v => (v && v.length >= 6) || "The test field must be valid !"
        ],
        requiredField: [v => !!v || "The input field is required !"]
      }
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    formatedDate() {
      return this.calendar.date
        ? format(this.calendar.date, "Do MM YYYY")
        : "";
    }
  },
  methods: {
    onAddDate() {
      this.ItemDialog = true;
    },
    onAddSubmit() {
      if (this.$refs.ItemForm.validate()) {
        console.log(this.calendar);
      }
    },
    //initialize
    initialize() {
      this.headers = [
        {
          text: "La date",
          align: "left",
          sortable: false,
          value: "date"
        },
        { text: "Description", value: "description" }
      ];
      this.calendars = [
        {
          date: "04 Février",
          description:
            "Ouverture de l'enregistrement en ligne des groupes PFE : Les étudiants de la 5ème année doivent s'enregistrer soit en monôme ou en binôme (selon les PFE)"
        },
        {
          date: "28 Février",
          description:
            "Dernier délai pour l'enregistrement des groupes PFE. Tout retard sera pénalisé lors de l'évaluation"
        },
        {
          date: "03 Mars	",
          description:
            "Attribution des encadrants pédagogiques : Chaque groupe PFE doit contacter son encadrant pédagogique afin de bénéficier d'un suivi pédagogique de son PFE en collaboration avec l'encadrant industriel au sein de l'entreprise. Des rapports d'avancement du projet doivent être régulièrement enregistrés sur cette plateforme"
        },
        {
          date: "06 Mai	",
          description:
            "Attribution des encadrants pédagogiques : Chaque groupe PFE doit contacter son encadrant pédagogique afin de bénéficier d'un suivi pédagogique de son PFE en collaboration avec l'encadrant industriel au sein de l'entreprise. Des rapports d'avancement du projet doivent être régulièrement enregistrés sur cette plateforme"
        },
        {
          date: "12 Juin	",
          description:
            "Attribution des encadrants pédagogiques : Chaque groupe PFE doit contacter son encadrant pédagogique afin de bénéficier d'un suivi pédagogique de son PFE en collaboration avec l'encadrant industriel au sein de l'entreprise. Des rapports d'avancement du projet doivent être régulièrement enregistrés sur cette plateforme"
        },
        {
          date: "17 Juillet	",
          description:
            "Attribution des encadrants pédagogiques : Chaque groupe PFE doit contacter son encadrant pédagogique afin de bénéficier d'un suivi pédagogique de son PFE en collaboration avec l'encadrant industriel au sein de l'entreprise. Des rapports d'avancement du projet doivent être régulièrement enregistrés sur cette plateforme"
        }
      ];
    }
  }
};
</script>

