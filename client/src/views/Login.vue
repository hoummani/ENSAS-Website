<template>
  <div class="back pa-5">
    <v-container>
      <v-card style="opacity:0.8">
        <h3
          class="display-1 text-sm-center grey--text text--darken-2 font-weight-light pt-3 pb-3"
        >
          Connexion
        </h3>
        <v-divider></v-divider>
        <v-container>
          <v-form ref="form" v-model="valid" class="form" lazy-validation>
            <!-- email  -->
            <v-text-field
              v-model="email"
              type="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <!-- password -->
            <v-text-field
              v-model="password"
              type="password"
              :rules="passwordRules"
              label="Password"
              required
            ></v-text-field>

            <v-checkbox v-model="checkbox" label="Souviens-moi ?"></v-checkbox>
            <v-divider></v-divider>
            <v-layout row wrap justify-end class="mt-3">
              <!-- epic-spinners-3-k.gif -->
              <v-btn color="secondary" @click="reset" dark>Réinitialiser</v-btn>
              <v-btn color="primary" @click="validate" :loading="submitLoading">Connexion</v-btn>
            </v-layout>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
    <!--  snackbar  -->
    <v-snackbar v-model="snackbar" left>
      {{ snackbarContent }}
      <v-btn color="primary" flat @click="snackbar = false">Fermer</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      valid: false,
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be great than 6 characters",
        v =>
          /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/g.test(v) || "Password not valid !"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],

      checkbox: false,
      //snackbar
      snackbar: false,
      
      snackbarContent: ""
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.onLogin();
      } else {
        this.snackbar = true;
        this.snackbarContent = "Il faut valider toutes les champs !";
      }
    },
    onLogin() {
      const user={
        email:this.email,
        password:this.password
      };
      this.$store.dispatch("login", user).then(() => {
          
          this.$router.push("/profile");
        })
        .catch(error => {
          const message = error.response.data.message;

          this.snackbar = true;
          this.snackbarContent = message;
        });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  computed: {
    isLoggedIn:function(){
      return this.$store.getters.isLoggedIn;
    },
    submitLoading:function(){
      if(this.$store.getters.authStatus=="loading"){
        return true;
      }else{
        return false;
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.back {
  background-attachment: fixed;
  background-image: url("/img/bg_oc_things_grey.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
.form {
  padding: 10px;
  border-radius: 10px;
}
</style>
