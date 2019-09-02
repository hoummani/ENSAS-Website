<template>
  <div>
    <v-container>
      <h4
        class="display-2 font-weight-thin grey--text text-xs-center text-sm-center"
      >
        Nouveau Compte
      </h4>
      <form @submit.prevent="handleSubmit">
        <!--  Name -->
        <v-text-field
          v-model="formResponse.name"
          label="Name"
          @input="$v.formResponse.name.$touch()"
          @blur="$v.formResponse.name.$touch()"
          :error-messages="nameErrors"
          type="text"
          required
        ></v-text-field>
        <!-- email -->

        <v-text-field
          v-model="formResponse.email"
          label="E-mail"
          required
          type="email"
          @input="$v.formResponse.email.$touch()"
          @blur="$v.formResponse.email.$touch()"
          :error-messages="emailErrors"
        ></v-text-field>
        <!-- password -->
        <v-text-field
          v-model="formResponse.password"
          label="Password"
          type="password"
          @input="$v.formResponse.password.$touch()"
          @blur="$v.formResponse.password.$touch()"
          :error-messages="passwordErrors"
          required
        ></v-text-field>

        <!-- confirm password -->
        <v-text-field
          v-model="formResponse.confirmPassword"
          label="Confirm Password"
          type="password"
          @input="$v.formResponse.confirmPassword.$touch()"
          @blur="$v.formResponse.confirmPassword.$touch()"
          :error-messages="confirmPasswordErrors"
          required
        ></v-text-field>

        <div class="font-weight-bold mb-4">
          <router-link to="/login" tag="a">Connexion ?</router-link>
        </div>
        <div class="mt-3">
          <v-btn
            class="mr-4"
            color="primary"
            :disabled="$v.$invalid"
            type="submit"
            >Enregistrer</v-btn
          >
          <v-btn class="indigo lighten-1" dark type="reset">Reinitialiser</v-btn>
        </div>
      </form>
    </v-container>
  </div>
</template>
<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  validations: {
    formResponse: {
      name: {
        required,
        minLength: minLength(4)
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
  data() {
    return {
      formResponse: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      submitted: false
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.formResponse.name.$dirty) return errors;
      !this.$v.formResponse.name.minLength &&
        errors.push("Name must be great then 4 characters long");
      !this.$v.formResponse.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.formResponse.email.$dirty) return errors;
      !this.$v.formResponse.email.email && errors.push("Must be valid e-mail");
      !this.$v.formResponse.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.formResponse.password.$dirty) return errors;
      !this.$v.formResponse.password.minLength &&
        errors.push("Password must be great then 6 characters !");
      !this.$v.formResponse.password.required &&
        errors.push("Password is required");
      !this.$v.formResponse.password.strongPassword &&
        errors.push("Password must be strong !");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.formResponse.confirmPassword.$dirty) return errors;
      !this.$v.formResponse.confirmPassword.sameAsPassword &&
        errors.push("Confirm Password must be the same as password!");
      !this.$v.formResponse.password.required &&
        errors.push("Confirm Password is required");

      return errors;
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      console.log(this.formResponse);
    }
  }
};
</script>

<style></style>
