<template>
  <div>
    <v-layout>
      <h3
        class="display-1 text-sm-center grey--text text--darken-2 font-weight-light"
      >Telecharger votre recu d'inscription</h3>
    </v-layout>
    <v-divider></v-divider>
        <div class="pt-1 pb-1">
          <v-alert :value="true" color="warning" icon="priority_high" outline>
            <p class="body-2 pt-3">
              Priere de remplir et verifier vos informations avant d'essayer de telecharger le recu
              <span class="red--text"
                >La modofication se fait dans le block "Editer Mon
                Profile"</span
              >
            </p>
          </v-alert>
        </div>
        <v-container>
          <v-layout>
            <v-btn color="primary" block>Telecharger</v-btn>
          </v-layout>
        </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

