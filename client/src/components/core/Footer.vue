<template>
  <!-- 
     &copy;2019 —
        <strong>
          Design & developement :
          <span style="color:#c7254e;">ENSA Safi</span>
        </strong>
  -->
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="indigo lighten-1">
        <ul class="footer-coordonnees">
          <li>
            <v-icon left>home</v-icon>
            <span>{{ coordonnees.address }}</span>
          </li>
          <li>
            <v-icon left>phone</v-icon>
            <span>{{ coordonnees.phone }}</span>
          </li>
          <li>
            <v-icon left>ring_volume</v-icon>
            <span>{{ coordonnees.fax }}</span>
          </li>
          <li>
            <v-icon left>email</v-icon>
            <span>{{ coordonnees.email }}</span>
          </li>
        </ul>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey lighten-2 grey--text justify-center">
        &copy;2019 —
        <strong>
          Design & developement :
          <span style="color:#c7254e;">ENSA Safi</span>
        </strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ],
    coordonnees: {
      address: " Route Sidi Bouzid BP 63, 46000 - Safi, Maroc",
      phone: "+212 524 66 91 55",
      fax: "+212 524 66 80 12",
      email: " ensas.concours@gmail.com"
    }
  })
};
</script>
<style lang="scss" scoped>
.footer-coordonnees {
  list-style-type: none;
}
</style>
