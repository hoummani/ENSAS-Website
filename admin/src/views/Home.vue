<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Dashboard</h5>
    <div>
      <Charts />
    </div>

    <div>
      <v-btn class="mx-2" fab dark fixed bottom right color="primary">
        <v-menu offset-x>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">add</v-icon>
          </template>

          <v-list v-for="item in items_settings" :key="item.content">
            <v-list-item>
              <v-list-item-title>{{ item.content }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </div>
  </div>
</template>

<script>
import Charts from "../components/core/Charts";

export default {
  data() {
    return {
      items_settings: [
        {
          content: "Arial"
        },
        {
          content: "Calibri"
        },
        {
          content: "Courier"
        },
        {
          content: "Verdana"
        }
      ]
    };
  },
  components: {
    Charts
  }
};
</script>
