<template>
  <div>
    <v-container>
        <h4 class="display-2 font-weight-thin grey--text text-xs-center text-sm-center">Connexion</h4>
      <v-form ref="form" v-model="valid" lazy-validation>

          <v-text-field v-model="email" type="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="password" type="password" :counter="6" :rules="passwordRules" label="Password" required></v-text-field>


        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Remember me ?"
          required
        ></v-checkbox>
        <div class="font-weight-bold mb-4">
            <router-link to="/register" tag="a">Nouveau Compte ?</router-link>
        </div>

        <v-btn :disabled="!valid" color="primary" class="mr-4" @click="validate">Connexion</v-btn>

        <v-btn class="mr-4 indigo lighten-1" @click="reset" dark>Réinitialiser</v-btn>

      </v-form>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 6) || "Password must be great than 6 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    
    
    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

