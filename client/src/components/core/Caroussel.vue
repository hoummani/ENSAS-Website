<template>
  <div id="header-carousel">
    <v-carousel style="height: 100%">
      <v-carousel-item v-for="(slide, i) in slides" :src="slide.src" :key="i">
        <v-jumbotron dark :gradient="gradient" style="height: 100%">
          <v-container fill-height>
            <v-layout align-center>
              <v-flex>
                <h3 class="display-3">{{ slide.title }}</h3>

                <p
                  class="subheading"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ratione soluta tenetur nobis atque sit pariatur eius inventore optio, modi explicabo magnam corrupti doloremque. Numquam?</p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
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
          src: "/img/island.png",
          title: "Reinscription en ligne"
        },
        {
          src: "/img/nodejs",
          title: "Concours d'acces au cycle d'ingenieur"
        },
        {
          src: "/img/sunset.jpg",
          title: "Gestion de votre projet de fin d'etude"
        },
        {
          src: "/img/121.jpg",
          title: "Choix de filieres"
        }
    ],
    gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)"
    };
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped>
</style>


