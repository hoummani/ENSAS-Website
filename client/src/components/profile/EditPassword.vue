<template>
  <div>
    <h3
      class="display-1 text-sm-center grey--text text--darken-2 font-weight-light"
    >Changer votre mot de passe</h3>
    <v-container>
      <v-form v-model="valid" lazy-validation @submit.prevent="handleSubmit">
        <!-- password -->
        <v-layout row wrap justify-space-between class="mb-4">
          <v-flex xs12 sm5 md5 lg5>
            <v-text-field
              :type="show1 ? 'text' : 'password'"
              v-model="password"
              counter
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
              :error-messages="passwordErrors"
              label="Password"
              @click:append="show1 = !show1"
              required
            ></v-text-field>
          </v-flex>
          <!-- confirm password  -->
          <v-flex xs12 sm5 md5 lg5>
            <v-text-field
              :type="show2 ? 'text' : 'password'"
              v-model="confirmPassword"
              counter
              :append-icon="show2 ? 'visibility' : 'visibility_off'"
              @input="$v.confirmPassword.$touch()"
              @blur="$v.confirmPassword.$touch()"
              :error-messages="confirmPasswordErrors"
              label="Confirmer Password"
              @click:append="show2 = !show2"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
        <v-layout row justify-end class="mt-2">
          <!-- epic-spinners-3-k.gif -->
          <v-btn color="secondary" @click="reset" dark>Réinitialiser</v-btn>
          <v-btn color="primary" type="submit" class="mr-4">Modifier</v-btn>
        </v-layout>
      </v-form>
    </v-container>
    <!--  snackbar  -->
    <v-snackbar v-model="snackbar" left>
      {{ snackbarContent }}
      <v-btn color="primary" flat @click="snackbar = false">Fermer</v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      valid:false,
      show1: false,
      show2: false,
      password: "",
      confirmPassword: "",
      //snackbar
      snackbar: false,
      snackbarContent: ""
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(6),
      strongPassword(password) {
        return (
          /[a-z]/.test(password) && // checks for a-z
          /[0-9]/.test(password) && // checks for 0-9
          /\W|_/.test(password) && // checks for special char
          password.length >= 6
        );
      }
    },
    confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
  },
  methods: {
    reset() {
      this.$v.$reset();
      this.password = "";
      this.confirmPassword = "";
    },
    handleSubmit() {
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.snackbar = true;
        this.snackbarContent = "Veuillez verifiez toutes les champs !";
      } else {
        this.valid=true;
        this.snackbar = true;
        this.snackbarContent = "Votre mot de passe a ete modifie avec succes !";
      }
    }
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("Le min est 6 characters !");
      !this.$v.password.required && errors.push("Password est obligatoire");
      !this.$v.password.strongPassword &&
        errors.push("Password doit etre fort !");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAsPassword &&
        errors.push("Confirm Password doit etre edentique a Password!");
      !this.$v.password.required &&
        errors.push("Confirm Password est obligatoire !");

      return errors;
    }
  }
};
</script>

