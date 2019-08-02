<template>
  <div fill-height fluid grid-list-xl>
    <v-layout row wrap class="mt-3">
      <v-flex xs12 sm12 md6 lg6>
        <v-card class="mb-5 mx-auto" max-width="500">
          <ChoixFiliereChart />

          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">User Registrations</div>
            <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small>mdi-clock</v-icon>
            <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
          </v-card-text>
        </v-card>
      </v-flex>

      <!-- 2  -->
      <v-flex xs12 sm12 md6 lg6>
        <v-card class="mx-auto" max-width="500">
          <ConcourChart />

          <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">User Registrations</div>
            <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small>mdi-clock</v-icon>
            <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12>
        <v-container>
          <v-card class="mt-8 mx-auto">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="cyan"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                show-labels
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">User Registrations</div>
              <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small>mdi-clock</v-icon>
              <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex md12 lg6>
        
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ConcourChart from "../../components/core/ConcourChart";
import ChoixFiliereChart from "../../components/core/ChoixFiliereChart";
export default {
  data() {
    return {
      labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
      value: [200, 675, 410, 390, 310, 460, 250, 240],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    };
  },
  components: {
    ConcourChart,
    ChoixFiliereChart
  },
  methods: {
      complete (index) {
      this.list[index] = !this.list[index]
    }
  },
};
</script>
<style lang="scss" scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
