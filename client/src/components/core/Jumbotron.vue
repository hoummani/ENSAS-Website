<template>
  <v-jumbotron
    :gradient="gradient"
    src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
    dark
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Gradient over Image</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            deserunt praesentium animi sint harum perspiciatis repellendus, ad
            excepturi minima inventore error dolor aperiam ducimus aspernatur.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  data() {
    return {
      gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)"
    };
  }
};
</script>
