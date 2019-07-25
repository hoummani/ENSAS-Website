<template>
  <v-container>
    <h2 class="display-2 text-sm-center font-weight-light">
      Calendrier des dates importants
    </h2>
    <p class="subheading font-weight-bold text-sm-center">
      Prière de respecter et en tenir compte des dates indiquées!
    </p>
    <v-divider></v-divider>
    <v-card class="pa-1">
      <v-data-table :headers="headers" :items="evenements" class="elevation-1">
        <template v-slot:items="props">
          <td class="">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.begin_at }}</td>
          <td class="text-xs-left">{{ props.item.end_at }}</td>
          <td class="text-xs-left">{{ props.item.status }}</td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Operation",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Date de debut", value: "begin_at" },
        { text: "Date de fin", value: "end_at" },
        { text: "Etat", value: "status" }
      ],
      evenements: [
        {
          name: " Inscription des listes d’attente.",
          begin_at: "24/07/2019",
          end_at: "26/07/2019",
          status: "Prochainement"
        },
        {
          name: " Inscription des listes d’attente.",
          begin_at: "24/07/2019",
          end_at: "26/07/2019",
          status: "Prochainement"
        },
        {
          name: " Inscription des listes d’attente.",
          begin_at: "24/07/2019",
          end_at: "26/07/2019",
          status: "Prochainement"
        },
        {
          name: " Inscription des listes d’attente.",
          begin_at: "24/07/2019",
          end_at: "26/07/2019",
          status: "Prochainement"
        },
        {
          name: " Inscription des listes d’attente.",
          begin_at: "24/07/2019",
          end_at: "26/07/2019",
          status: "Prochainement"
        },
        {
          name: " Inscription des listes d’attente.",
          begin_at: "24/07/2019",
          end_at: "26/07/2019",
          status: "Prochainement"
        },
        {
          name: " Inscription des listes d’attente.",
          begin_at: "24/07/2019",
          end_at: "26/07/2019",
          status: "Prochainement"
        },
        {
          name: " Inscription des listes d’attente.",
          begin_at: "24/07/2019",
          end_at: "26/07/2019",
          status: "Prochainement"
        },
        {
          name: " Inscription des listes d’attente.",
          begin_at: "24/07/2019",
          end_at: "26/07/2019",
          status: "Prochainement"
        },
        {
          name: " Inscription des listes d’attente.",
          begin_at: "24/07/2019",
          end_at: "26/07/2019",
          status: "Prochainement"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
