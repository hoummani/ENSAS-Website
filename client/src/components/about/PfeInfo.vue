<template>
  <div>
    <h5 class="headline font-weight-light text-sm-center">
      Calendrier de PFE pour Département Informatique, Réseaux et
      Télécommunications
    </h5>
    <v-container class="my-5">
      <v-card v-for="item in pfe_calendars" :key="item.calendar_date">
        <v-layout row wrap class="pa-3 calendarBorder">
          <v-flex xs12 sm4 md4>
            <div class="caption grey--text">La date</div>
            <div>{{ item.calendar_date }}</div>
          </v-flex>

          <v-flex xs12 sm8 md8>
            <div class="caption grey--text">Information</div>
            <div>
              <p>
                <span class="font-weight-bold"
                  >{{ item.pfe_info.title }} :</span
                >
                {{ item.pfe_info.description }}
              </p>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pfe_calendars: [
        {
          calendar_date: "04 Février",
          pfe_info: {
            title: "Ouverture de l'enregistrement en ligne des groupes PFE ",
            description:
              "Les étudiants de la 5ème année doivent s'enregistrer soit en monôme ou en binôme (selon les PFE)"
          }
        },

        {
          calendar_date: "28 Février",
          pfe_info: {
            title: "Dernier délai pour l'enregistrement des groupes PFE",
            description: "Tout retard sera pénalisé lors de l'évaluation"
          }
        },

        {
          calendar_date: "03 Mars",
          pfe_info: {
            title: "Attribution des encadrants pédagogiques ",
            description:
              "Chaque groupe PFE doit contacter son encadrant pédagogique afin de bénéficier d'un suivi pédagogique de son PFE en collaboration avec l'encadrant industriel au sein de l'entreprise. Des rapports d'avancement du projet doivent être régulièrement enregistrés sur cette plateforme."
          }
        },

        {
          calendar_date: "10 Mars",
          pfe_info: {
            title: "Dernier délai pour l'insertion du sujet ",
            description:
              "Tous les groupes PFE doivent compléter leur formulaire PFE en y insérant les données concernant le PFE et l'entreprise. Tout retard sera pénalisé lors de l'évaluation."
          }
        },

        {
          calendar_date: "01 Mai",
          pfe_info: {
            title:
              "Dernier délai pour l'enregistrement du 1er rapport d'avancement Chaque groupe PFE doit enregistrer son 1er rapport d'avancement en format pdf sur cette plateforme.",
            description: null
          }
        },

        {
          calendar_date: "15 Juin",
          pfe_info: {
            title: "Affichage du planning des soutenances des PFE.",
            description: null
          }
        },

        {
          calendar_date: "18 Juin",
          pfe_info: {
            title: "Dernier délai pour l'enregistrement du rapport final",
            description:
              " Chaque groupe PFE doit enregistrer son rapport final en format pdf sur cette plateforme."
          }
        },

        {
          calendar_date: "20 Juin",
          pfe_info: {
            title: "Dernier délai pour le dépôt du rapport final",
            description:
              " Chaque groupe doit déposer 3 exemplaires du rapports final imprimé au secrétariat du département IRT. Tout retard sera pénalisé lors de l'évaluation."
          }
        },

        {
          calendar_date: "27, 28, 29 Jui",
          pfe_info: {
            title: "Planning des soutenances PFE.",
            description: null
          }
        },

        {
          calendar_date: "02/07/2019",
          pfe_info: {
            title:
              "Dernier delai pour le dépot du rapport final corrigé + CDROM",
            description:
              "Afin de valider le PFE, chaque groupe doit déposer, au secrétariat du département IRT, la version papier finale du rapport corrigé selon les instructions du jury, muni d'un CDROM contenant tous les éléments du projet (Rapport, Présentation et Fichiers de démonstration...etc) et ce dans un délai de deux jours après la soutenance."
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.calendarBorder {
  border-left: 4px solid #c7254e;
}
</style>
