<template>
  <div class="ma-2">
    <v-expansion-panel v-model="panel" expand>
      <v-expansion-panel-content v-for="item in alerts" :key="item.title">
        <template v-slot:header>
          <div>
            <v-chip small :class="` white--text item ${item.status}`">{{item.status}}</v-chip>
            <strong>Anonce :</strong>
            {{item.title}}
          </div>
        </template>
        <v-card>
          <v-card-text class="grey lighten-3">{{item.content}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: [false, true, true],
      alerts: [
        {
          title: "this is the first title ",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          status: "termine",
          url: "#"
        },
        {
          title: "this is the second title ",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          status: "proche",
          url: "#"
        },
        {
          title: "this is the third title ",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          status: "encours",
          url: "#"
        },
        {
          title: "this is the fourth title ",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          status: "toujour",
          url: "#"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
/*
color e-ENSAS=#c7254e
*/

.item.toujour{
  background:  #3cd1c2;
}

.item.encours{
   background:  orange;
}

.item.termine{
   background:  tomato;
}
.item.proche{
    background: #c7254e;
}


</style>


