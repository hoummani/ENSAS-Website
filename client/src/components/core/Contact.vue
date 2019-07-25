<template>
  <div>
    <h2 class="display-2 font-weight-thin text-sm-center font-weight-light">
      Contactez-nous!
    </h2>
    <p class="subheading font-weight-bold text-sm-center">
      Si vous rencontrez des problèmes dans l'une des applications du site,
      prière de nous contacter par email sur
      <span class="emailEnsas">ensas.concours@gmail.com</span>
    </p>
    <v-divider></v-divider>
    <!-- form contact -->
    <v-layout class="my-5" row wrap>
      <v-flex xs12 sm12 md12 lg6 class="mb-2">
        <v-card class="pa-5">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea name="input-7-1" label="Message"></v-textarea>

            <v-btn :disabled="!valid" class="white--text" color="#c7254e"
              >Envoyer</v-btn
            >

            <v-btn>Reset</v-btn>
          </v-form>
        </v-card>
      </v-flex>
      <!-- map -->
      <v-flex xs12 sm12 md12 lg6>
        <v-card class="pa-1">
          <div class="display-1 mb-2 font-weight-thin text-sm-center">
            Nos coordonnées
          </div>

          <GmapMap
            :center="{ lat: 32.326132, lng: -9.26366 }"
            :zoom="15"
            map-type-id="terrain"
            style="width: 100%;height:295px"
            :options="{
              zoomControl: true,
              mapTypeControl: true,
              scaleControl: true,
              streetViewControl: false,
              rotateControl: false,
              fullscreenControl: true,
              disableDefaultUi: false
            }"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center = m.position"
            />
          </GmapMap>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- end forme contact -->
    <!-- ENSA Coordonnees -->
    <!-- {lat:32.326132, lng:-9.263660} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,

      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],

      center: {
        lat: 32.326132,
        lng: -9.26366
      },
      markers: [
        {
          position: {
            lat: 32.326132,
            lng: -9.26366
          }
        },
        {
          position: {
            lat: 32.326131,
            lng: -9.263661
          }
        },
        {
          position: {
            lat: 32.326133,
            lng: -9.263659
          }
        },
        {
          position: {
            lat: 32.326134,
            lng: -9.263658
          }
        },
        {
          position: {
            lat: 32.326135,
            lng: -9.263657
          }
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.emailEnsas {
  color: #c7254e;
}
</style>
