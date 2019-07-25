<template>
  <div>
    <h5 class="headline font-weight-light text-sm-center">
      Pre-inscription au concours bac+3
      <br />(2 annee cycle d'ingenieur)
    </h5>

    <v-container class="my-5">
      <v-card class="mt-3 mb-2 pa-2">
        <h2 class="headline font-weight-light text-sm-center">Important</h2>

        <v-divider></v-divider>
        <ul class="mt-3 mb-3">
          <li class="red--text">
            Tout candidat admis en liste principale n’ayant pas inscrit
            administrativement dans les dates limites sera remplacé par un
            candidat de la liste d’attente en respectant l’ordre de mérite.
          </li>
          <li>
            Consulter
            <router-link class="e-ensas" to="/" tag="a"
              >l'espace d'actualite</router-link
            >vous allez trouver les information a propos de chaque nouveautee !
          </li>
        </ul>
      </v-card>
      <v-card v-for="item in concour_alerts" :key="item.calendar_date">
        <v-layout row wrap class="pa-3 calendarBorder">
          <v-flex xs6 sm4 md4>
            <div class="caption grey--text">La date</div>
            <div>{{ item.calendar_date }}</div>
          </v-flex>

          <v-flex xs6 sm8 md8>
            <div class="caption grey--text">Operation effectuee</div>
            <div>
              <p>{{ item.operations.title_operation }}</p>
              <ul
                v-for="item in item.operations.list_operation"
                :key="item.field_operation"
              >
                <li>{{ item.field_operation }}</li>
              </ul>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      <v-card class="mt-3 pa-2">
        <h2 class="headline font-weight-light text-sm-center">
          A propos de concour
        </h2>
        <h5 class="subheading">
          Le concours est sous forme d'une présélection sur dossier suivie d'un
          entretien pour des places limitées aux filières suivantes:
        </h5>
        <v-divider></v-divider>
        <ul class="mt-3 mb-3">
          <li>Génie Informatique</li>
          <li>Génie Télécommunications et Réseaux</li>
          <li>Génie Industriel</li>
          <li>Génie des Procèdes et Matériaux céramiques</li>
        </ul>
        <div>
          <v-btn>Inscrivez-vous maintenant</v-btn>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      concour_alerts: [
        {
          calendar_date: "17 Juillet au 19 Juillet à 15h:30",
          operations: {
            title_operation:
              "Inscription des candidats admis en liste principale. Les admis doivent déposer l'original du baccalauréat, de la carte díidentité nationale et le dossier d'inscription ",
            list_operation: [
              {
                field_operation:
                  "La fiche de prÈinscription imprimée depuis le compte en ligne (avec photo obligatoire!)"
              },
              {
                field_operation: "Attestation originale du baccalauréat"
              },
              {
                field_operation:
                  "02 photocopies certifiées conforme du baccalauréat"
              },
              {
                field_operation:
                  "02 photocopies certifiées conforme du dernier diplÙme obtenu ou attestation de réussite"
              },
              {
                field_operation: "02 photocopies certifiÈes conforme de la CIN"
              },
              {
                field_operation: "02 extraits d'acte de naissance"
              },
              {
                field_operation:
                  "03 enveloppes timbrées portant l'adresse de l'étudiant(e)"
              },
              {
                field_operation: "06 photos d'identité"
              },
              {
                field_operation: "Dossier médical"
              },
              {
                field_operation:
                  "Equivalence du diplôme (dans le cas d'un diplôme autre que Master ou Licence)"
              },
              {
                field_operation:
                  "Assurance; (95dh) à payer à l'agence ASSURANCES BABBOUH SARL, Adresse: 06.AVENUE LA LIBERTÉ. VILLE NOUVELLE. SAFI"
              }
            ]
          }
        },
        {
          calendar_date: "20 Juillet",
          operations: {
            title_operation:
              "Affichage du nombre des places vacantes pour les listes d'attente",
            list_operation: [
              {
                field_operation:
                  "L'appel à la liste d'attente est toujours possible si un étudiant dèjà inscrit retire son baccalauréat."
              }
            ]
          }
        },
        {
          calendar_date: "24 au 25 Juillet",
          operations: {
            title_operation:
              "Inscription des étudiants classés de la liste d’attente   (Présence obligatoire!)",
            list_operation: null
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
.e-ensas {
  color: #c7254e;
  cursor: pointer;
}
</style>
