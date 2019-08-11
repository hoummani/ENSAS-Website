<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Choix de filieres</h5>
    <div>
      
        <v-card class="mx-auto" >
          <v-toolbar flat dense>
            <v-toolbar-title>
              <span class="body-2 grey--text">SELECTIONNER LE SCORE DESERE</span>
            </v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-layout  mb-4>
              <v-flex text-left>
                <span class="display-1 font-weight-light" v-text="bpm"></span>
                <span class="subheading font-weight-light mr-1">Points</span>
                <v-fade-transition>
                  <v-avatar
                    v-if="isPlaying"
                    :color="color"
                    :style="{
                animationDuration: animationDuration
              }"
                    class="mb-1 v-avatar--metronome"
                    size="12"
                  ></v-avatar>
                </v-fade-transition>
              </v-flex>
              <!--
              <v-flex text-right>
                <v-btn :color="color" texts @click="toggle">
                  <v-icon >{{ isPlaying ? 'mdi-pause' : 'mdi-play' }}</v-icon>
                </v-btn>
              </v-flex>
              -->
            </v-layout>

            <v-slider
              v-model="bpm"
              :color="color"
              track-color="grey"
              always-dirty
              min="20"
              max="220"
            >
              <template v-slot:prepend>
                <v-icon :color="color" @click="decrement">mdi-minus</v-icon>
              </template>

              <template v-slot:append>
                <v-icon :color="color" @click="increment">mdi-plus</v-icon>
              </template>
            </v-slider>
          </v-card-text>
        </v-card>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //slider
      bpm: 20,
      interval: null,
      isPlaying: false
    };
  },
  computed: {
    color() {
      if (this.bpm < 100) return "indigo";
      if (this.bpm < 125) return "teal";
      if (this.bpm < 140) return "green";
      if (this.bpm < 175) return "orange";
      return "red";
    },
    animationDuration() {
      return `${60 / this.bpm}s`;
    }
  },
  methods: {
    decrement() {
      this.bpm--;
    },
    increment() {
      this.bpm++;
    },
    toggle() {
      this.isPlaying = !this.isPlaying;
    }
  }
};
</script>


<style lang="scss" scoped>
@keyframes metronome-example {
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
}

.v-avatar--metronome {
  animation-name: metronome-example;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>


