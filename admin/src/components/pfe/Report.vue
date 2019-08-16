<template>
  <div class="pa-4">
    <v-layout class="pa-3">
      <v-select
        label="Selectioner la specification universitaire"
        :items="deps"
        v-model="dep_selected"
        item-text="name"
        item-value="value"
      ></v-select>
    </v-layout>
    <v-spacer></v-spacer>
    <v-card v-for="item in reports" :key="item.code" class="mb-2">
      <v-card-title>
        <div class="body-2 font-weight-bold">{{ item.code }}</div>
      </v-card-title>
      <v-divider></v-divider>
      <div :class="`${item.status}`">
        <v-layout row wrap class="pa-2 pl-5">
          <v-flex xs12 sm9 md9 lg9>
            <div class="caption grey--text">Sujet de PFE</div>
            <div class="body-2 font-weight-regular">
              conception and developement web app
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="pa-2 pl-5">
          <!-- student  -->
          <v-flex xs4 sm3 md3 lg3>
            <div class="caption grey--text">Membres</div>
            <ul class="body-2 font-weight-regular">
              <li>Handi Fouad</li>
            </ul>
          </v-flex>
          <!-- entreprise  -->
          <v-flex xs4 sm3 md3 lg3>
            <div class="caption grey--text">Nom d'entreprise</div>
            <div class="body-2 font-weight-regular">Bc Skills</div>
          </v-flex>

          <!-- coach  -->
          <v-flex xs4 sm3 md3 lg3>
            <div class="caption grey--text">Encadrent</div>
            <div class="body-2 font-weight-regular">Walid Bouarifi</div>
          </v-flex>
          <v-flex xs4 sm3 md3 lg3>
            <div class="caption grey--text">Jurys</div>
            <ul class="body-2 font-weight-regular">
              <li>Ech-chadi Said</li>
              <li>Atlas Abdelghafour</li>
              <li>Bouarifi Walid</li>
            </ul>
          </v-flex>
        </v-layout>
      </div>
      <v-divider></v-divider>
      <v-card-actions>
        <v-layout justify-end>
          <div>
            <v-chip
              class="ma-2"
              close
              color="indigo"
              outlined
              v-if="item.status === 'valide'"
              close-icon="mdi-close"
            >
              <v-avatar left> <v-icon>check_circle</v-icon> </v-avatar>Valide
            </v-chip>

            <!-- not valid  -->
            <v-chip
              class="ma-2"
              close
              color="red"
              outlined
              v-else
              close-icon="mdi-close"
            >
              <v-avatar left> <v-icon>cancel</v-icon> </v-avatar>N'est pas
              valide
            </v-chip>
            <v-btn v-if="item.status === 'notvalide'" small icon>
              <v-icon>check_circle</v-icon>
            </v-btn>
            <v-btn small icon>
              <v-icon>description</v-icon>
            </v-btn>
            <v-btn small icon>
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn small icon>
              <v-icon>delete</v-icon>
            </v-btn>
          </div>
        </v-layout>
      </v-card-actions>
    </v-card>
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
      reports: []
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.reports = [
        {
          code: "F-15",
          title: "conception and developement web app",
          entreprise: {
            name: "Bc Skills"
          },
          student: {
            firstName: "Handi",
            lastName: "Fouad"
          },
          jury: [
            {
              name: "Bouarifi"
            },
            {
              name: "Atlas"
            },
            {
              name: "Ech-chadi"
            }
          ],
          coach: "Atlas",
          document: "url to document",
          status: "notvalide"
        },

        {
          code: "F-25",
          title: "conception and developement mobile app",
          entreprise: {
            name: "Bc Skills"
          },
          student: {
            firstName: "Handi",
            lastName: "Fouad"
          },
          jury: [
            {
              name: "Bouarifi"
            },
            {
              name: "Atlas"
            },
            {
              name: "Ech-chadi"
            }
          ],
          coach: "Atlas",
          document: "url to document",
          status: "valide"
        },

        {
          code: "F-35",
          title: "conception and developement web app",
          entreprise: {
            name: "Bc Skills"
          },
          student: {
            firstName: "Handi",
            lastName: "Fouad"
          },
          jury: [
            {
              name: "Bouarifi"
            },
            {
              name: "Atlas"
            },
            {
              name: "Ech-chadi"
            }
          ],
          coach: "Atlas",
          document: "url to document",
          status: "notvalide"
        },

        {
          code: "F-45",
          title: "conception and developement web app",
          entreprise: {
            name: "Bc Skills"
          },
          student: {
            firstName: "Handi",
            lastName: "Fouad"
          },
          jury: [
            {
              name: "Bouarifi"
            },
            {
              name: "Atlas"
            },
            {
              name: "Ech-chadi"
            }
          ],
          coach: "Atlas",
          document: "url to document",
          status: "valide"
        },

        {
          code: "F-55",
          title: "conception and developement web app",
          entreprise: {
            name: "Bc Skills"
          },
          student: {
            firstName: "Handi",
            lastName: "Fouad"
          },
          jury: [
            {
              name: "Bouarifi"
            },
            {
              name: "Atlas"
            },
            {
              name: "Ech-chadi"
            }
          ],
          coach: "Atlas",
          document: "url to document",
          status: "notvalide"
        },

        {
          code: "F-56",
          title: "conception and developement web app",
          entreprise: {
            name: "Bc Skills"
          },
          student: {
            firstName: "Handi",
            lastName: "Fouad"
          },
          jury: [
            {
              name: "Bouarifi"
            },
            {
              name: "Atlas"
            },
            {
              name: "Ech-chadi"
            }
          ],
          coach: "Atlas",
          document: "url to document",
          status: "valide"
        },

        {
          code: "F-80",
          title: "conception and developement web app",
          entreprise: {
            name: "Bc Skills"
          },
          student: {
            firstName: "Handi",
            lastName: "Fouad"
          },
          jury: [
            {
              name: "Bouarifi"
            },
            {
              name: "Atlas"
            },
            {
              name: "Ech-chadi"
            }
          ],
          coach: "Atlas",
          document: "url to document",
          status: "notvalide"
        }
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.valide {
  border-right: 4px solid #3cd1c2;
}
.notvalide {
  border-right: 4px solid lightcoral;
}
</style>
