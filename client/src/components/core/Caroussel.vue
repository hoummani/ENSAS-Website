<template>
  <div id="header-carousel">
    <v-carousel style="height: 100%">
      <v-carousel-item v-for="(slide, i) in slides" :src="slide.src" :key="i">
        <!--
        <v-jumbotron dark :gradient="gradient" style="height: 100%">
          -->
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3
                class="display-2 font-weight-light indigo lighten-1  text-sm-center white--text"
              >
                {{ slide.title }}
              </h3>

              <p class="subheading black white--text text-sm-center">
                {{ slide.text }}
              </p>

              <v-flex xs4 sm2 md2 lg2 offset-md5 offset-sm5 offset-lg5>
                <v-btn class="mx-0" color="#c7254e" to="/about" large
                  >Plus de Detailes</v-btn
                >
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
        <!-- </v-jumbotron> -->
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          src: "/img/background1.jpeg",
          title: "Bienvenu sur e-ENSAS",
          text:
            "e-ENSAS est une plate-forme de l'ENSA Safi qui regrouper l'accès à toutes les applications d'inscription, réinscription, choix de filière et bien d'autres prochaines applications. Pour plus d'informations visiter la page."
        },
        {
          src: "/img/island.png",
          title: "Reinscription en ligne",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ratione soluta tenetur nobis atque sit pariatur eius inventore optio."
        },
        {
          src: "/img/nodejs",
          title: "Concours d'acces au cycle d'ingenieur",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ratione soluta tenetur nobis atque sit pariatur eius inventore optio."
        },
        {
          src: "/img/sunset.jpg",
          title: "Gestion de votre projet de fin d'etude",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ratione soluta tenetur nobis atque sit pariatur eius inventore optio."
        },
        {
          src: "/img/121.jpg",
          title: "Choix de filieres",
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ratione soluta tenetur nobis atque sit pariatur eius inventore optio."
        }
      ],
      gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)"
    };
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.e-ensas {
  color: #c7254e;
}
</style>
