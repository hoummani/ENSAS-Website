<template>
  <div>
    <v-layout class="mb-3">
      <v-tooltip top>
        <v-btn
          small
          flat
          color="grey"
          @click="sortedBy('title')"
          slot="activator"
        >
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">Filtre par le titre</span>
        </v-btn>
        <span>Sorter les anonces par le titre</span>
      </v-tooltip>
      <v-tooltip top>
        <v-btn
          small
          flat
          color="grey"
          @click="sortedBy('date')"
          slot="activator"
        >
          <v-icon left small>date_range</v-icon>
          <span class="caption text-lowercase">Filtrer par la date</span>
        </v-btn>
        <span>Filtrer les anonces par la date</span>
      </v-tooltip>
    </v-layout>
    <v-card flat v-for="item in actualities" :key="item.title">
      <v-layout row wrap :class="`pa-3 actualite ${item.status}`">
        <v-flex xs12 sm6 md8>
          <div class="caption grey--text">Titre d'anonce</div>
          <div class="body-2">{{ item.title }}</div>
        </v-flex>

        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Date</div>
          <div>{{ item.date }}</div>
        </v-flex>

        <v-flex xs12 sm6 md12>
          <div class="caption grey--text">Description</div>
          <!-- ref description -->
          <div v-if="item.ref == true">
            <ul v-for="itemDesc in item.description" :key="itemDesc.content">
              <router-link :to="itemDesc.url" tag="li" exact>
                <a>{{ itemDesc.content }}</a>
              </router-link>
            </ul>
          </div>
          <div v-else>
            <ul v-for="itemDesc in item.description" :key="itemDesc.content">
              <li>{{ itemDesc.content }}</li>
            </ul>
          </div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actualities: [
        {
          title: "Affichage des Places vacantes",
          date: "17/07/2019",
          status: "encour",
          ref: true,
          description: [
            {
              content: "Genie informatique",
              url: "#"
            },
            {
              content: "Genie industrielle",
              url: "#"
            }
          ]
        },
        {
          title: "Résultats du concours de la 3ème année :",
          date: "19/07/2019",
          ref: true,
          status: "termine",
          description: [
            {
              content: "Genie informatique",
              url: "#"
            },
            {
              content: "Genie industrielle",
              url: "#"
            }
          ]
        },
        {
          title: "Concours d'accès	",
          date: "10/06/2019",
          ref: false,
          status: "proche",
          description: [
            {
              content:
                "Aucun document papier ne doit être envoyé à l'ENSA Safi.",
              url: null
            },
            {
              content:
                "La présélection est basée sur les notes candidats de leurs parcours universitaires.",
              url: null
            },
            {
              content:
                "Les candidats admis en présélection doivent justifier les jours des concours toutes les informations fournies par des documents authentifiés.",
              url: null
            }
          ]
        }
      ]
    };
  },
  methods: {
    sortedBy(prop) {
      this.actualities.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style lang="scss" scoped>
.actualite.termine {
  border-right: 4px solid #3cd1c2;
}

.actualite.encour {
  border-right: 4px solid orange;
}

.actualite.proche {
  border-right: 4px solid tomato;
}

ul li a {
  text-decoration: none;
}
</style>
