<template>
  <div class="back pa-2">
    <v-container>
      <v-card style="opacity:0.8">
        <h3
          class="display-1 text-sm-center grey--text text--darken-2 font-weight-light pt-3 pb-3"
        >
          Inscription en ligne ENSA Safi
        </h3>
        <v-divider></v-divider>
        <v-container v-if="newUser">
          <v-form
            v-model="valid"
            class="form"
            lazy-validation
            @submit.prevent="handleSubmit"
          >
            <v-layout row wrap justify-space-between>
              <!-- nom  -->
              <v-flex xs12 sm5 md5 lg5>
                <v-text-field
                  type="text"
                  v-model="newUser.firstName"
                  label="Nom"
                  @input="$v.newUser.firstName.$touch()"
                  @blur="$v.newUser.firstName.$touch()"
                  :error-messages="firstNameErrors"
                  required
                ></v-text-field>
              </v-flex>
              <!-- prenom  -->
              <v-flex xs12 sm5 md5 lg5>
                <v-text-field
                  type="text"
                  v-model="newUser.lastName"
                  @input="$v.newUser.lastName.$touch()"
                  @blur="$v.newUser.lastName.$touch()"
                  :error-messages="lastNameErrors"
                  label="Prenom"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <!-- email  -->
            <v-layout row wrap>
              <v-flex>
                <v-text-field
                  type="email"
                  v-model="newUser.email"
                  @input="$v.newUser.email.$touch()"
                  @blur="$v.newUser.email.$touch()"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <!-- password -->
            <v-layout row wrap justify-space-between class="mb-4">
              <v-flex xs12 sm5 md5 lg5>
                <v-text-field
                  :type="show1 ? 'text' : 'password'"
                  v-model="newUser.password"
                  counter
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  @input="$v.newUser.password.$touch()"
                  @blur="$v.newUser.password.$touch()"
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
                  v-model="newUser.confirmPassword"
                  counter
                  :append-icon="show2 ? 'visibility' : 'visibility_off'"
                  @input="$v.newUser.confirmPassword.$touch()"
                  @blur="$v.newUser.confirmPassword.$touch()"
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
              <v-btn color="primary" type="submit" class="mr-4"
                >Enregistrer</v-btn
              >
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import axios from 'axios';

export default {
  data() {
    return {
      valid: false,
      show1: false,
      show2: false,
      
      newUser: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      
      //snackbar
      snackbar: false,
      snackbarContent: ""
    };
  },

  validations: {
    newUser: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
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
    }
  },
  methods: {
    reset() {
      this.$v.$reset();
      this.newUser = {};
    },
    handleSubmit() {
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.snackbar = true;
        this.snackbarContent = "Veuillez verifiez toutes les champs !";
      } else {
        //console.log(this.newUser);
        this.onRegister();
        
      }
    },
    //store jobs
    onRegister(){
      //this.$store.dispatch("register/onRegister",this.newUser);
      return axios({
        method:'post',
        data:{
          firstName:this.newUser.firstName,
          lastName:this.newUser.lastName,
          email:this.newUser.email,
          password:this.newUser.password
        },
        url:'http://localhost:4000/users/register',
        headers:{
          'Content-Type': 'application/json',
        }
      }).then((user)=>{
        console.log(user);
      })
      .catch((error)=>{
        const message = error.response.data.message;
        
        this.snackbar=true;
        this.snackbarContent=message;
      })
    },
  },
  created() {},
  computed: {
    //store jobs
    currentUser(){
      return this.$store.getters.getCurrentUser;
    },
    firstNameErrors() {
      const errors = [];
      if (!this.$v.newUser.firstName.$dirty) return errors;
      !this.$v.newUser.firstName.minLength &&
        errors.push("Nom n'est pas valide !");
      !this.$v.newUser.firstName.required &&
        errors.push("Nom est obligatoire !");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.newUser.lastName.$dirty) return errors;
      !this.$v.newUser.lastName.minLength &&
        errors.push("Prenom n'est pas valide !");
      !this.$v.newUser.lastName.required &&
        errors.push("Prenom est obligatoire !");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.newUser.email.$dirty) return errors;
      !this.$v.newUser.email.email && errors.push("E-mail n'est pas valide !");
      !this.$v.newUser.email.required &&
        errors.push("Le champ est obligatoire");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.newUser.password.$dirty) return errors;
      !this.$v.newUser.password.minLength &&
        errors.push("Le min est 6 characters !");
      !this.$v.newUser.password.required &&
        errors.push("Password est obligatoire");
      !this.$v.newUser.password.strongPassword &&
        errors.push("Password doit etre fort !");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.newUser.confirmPassword.$dirty) return errors;
      !this.$v.newUser.confirmPassword.sameAsPassword &&
        errors.push("Confirm Password doit etre edentique a Password!");
      !this.$v.newUser.password.required &&
        errors.push("Confirm Password est obligatoire !");

      return errors;
    }
  }
};
</script>
<style lang="scss" scoped>
.back {
  background-attachment: fixed;
  background-image: url("/img/bg_oc_things_grey.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
