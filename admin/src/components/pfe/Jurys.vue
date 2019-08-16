<template>
  <div class="pa-4">
    <v-layout class="pa-3" wrap row>
      <v-select
        label="Selectioner la specification universitaire"
        :items="deps"
        v-model="dep_selected"
        item-text="name"
        item-value="value"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn color="secondary">Ajouter Un Group</v-btn>
    </v-layout>
    <v-card
      class="pa-2 mb-2 pl-5"
      v-for="item in jurys"
      :key="item.number"
      v-ripple="{ class: `indigo--text lighten-2` }"
    >
      <v-layout row wrap class="pa-3">
        <v-flex xs12 sm8 md9>
          <div class="caption grey--text">Numero de group</div>
          <div class="body-2 font-weight-bold">
            Groupe N : {{ item.number }}
          </div>
        </v-flex>

        <!-- operations -->
        <v-flex xs6 sm3 md3 lg3>
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
        <!-- membres  -->
        <v-flex xs12 sm12 md12 lg12>
          <div class="caption grey--text">Membres de groupe</div>
          <div>
            <v-layout
              row
              wrap
              v-for="member in item.members"
              :key="member.email"
            >
              <v-flex xs4 sm4 md4 lg4>
                <ul>
                  <li>{{ member.name }}</li>
                </ul>
              </v-flex>
              <v-flex xs4 sm4 md4 lg4>
                <ul style="list-style-type:none;">
                  <li>{{ member.email }}</li>
                </ul>
              </v-flex>
              <v-flex xs4 sm4 md4 lg4>
                <ul style="list-style-type:none;">
                  <li>{{ member.phone }}</li>
                </ul>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
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
      //jurys data
      jurys: [
        {
          number: 1,
          members: [
            {
              name: "Atlas Abdelghafour",
              email: "Atlas.abdelghafour@gmail.com",
              phone: "0616234478"
            },
            {
              name: "Bouarifi Walid",
              email: "Bouarifi.walid@gmail.com",
              phone: "0616234478"
            },
            {
              name: "Ech-chadi Said",
              email: "Ech-chadi.said@gmail.com",
              phone: "0616234478"
            }
          ],
          departement: "infoGtr"
        },
        {
          number: 2,
          members: [
            {
              name: "Boukhatem Ali",
              email: "boukhtam.ali@gmail.com",
              phone: "0616234478"
            },
            {
              name: "Touriki Roqaya",
              email: "touriki.rokaya@gmail.com",
              phone: "0616234478"
            },
            {
              name: "Atri khadija",
              email: "atri.khadija@gmail.com",
              phone: "0616234478"
            }
          ],
          departement: "indusGpmc"
        }
      ]
    };
  }
};
</script>
