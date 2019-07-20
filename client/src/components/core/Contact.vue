<template>
  <div>
    <h2 class="display-2 font-weight-thin text-sm-center font-weight-light">Contactez-nous!</h2>
    <p class="caption text-sm-center">
      Si vous rencontrez des problèmes dans l'une des applications du site, prière de nous contacter par email sur
      <span
        class="emailEnsas"
      >ensas.concours@gmail.com</span>
    </p>
    <v-divider></v-divider>
    <!-- form contact -->
    <v-layout class="my-5">
      <v-flex xs10 sm10 md8 lg6 offset-lg3 offset-md2 offset-sm1>
        <v-card class="pa-5">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-textarea name="input-7-1" label="Message"></v-textarea>

            <v-btn :disabled="!valid" class="white--text" color="#c7254e" @click="validate">Envoyer</v-btn>

            <v-btn @click="reset">Reset</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- end forme contact -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,

      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.emailEnsas {
  color: #c7254e;
}
</style>

