<template>
  <div class="back pa-2">
    <h3
      class="display-1 text-sm-center font-weight-light"
    >Inscription et Reinscription en ligne ENSA Safi</h3>
    <v-container>
      <v-stepper v-model="e1">
        <v-stepper-header>
          
          <template v-for="n in steps">
            <v-stepper-step :key="`${n}-step`"
              :complete="e1 > n"
              editable
              :step="n">Etape {{ n }}</v-stepper-step>

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>

        </v-stepper-header>
        <v-stepper-items>
          <!-- basic info  -->
          <v-stepper-content  v-for="n in steps"
            :key="`${n}-content`" :step="n">
            <v-card v-if="n===1">
              <v-card-title>
                <h5 class="subheading text-uppercase grey--text">Information de base</h5>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-form
                  v-model="registerValid"
                  ref="registerForm"
                  lazy-validation
                  @submit.prevent="handleSubmit"
                >
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="CIN(Code d'Identité National)"
                        type="text"
                        v-model="studentObject.cin"
                        @input="$v.studentObject.cin.$touch()"
                        @blur="$v.studentObject.cin.$touch()"
                        :error-messages="cinErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="CNE(Code Nationnal de l'étudiant)"
                        type="text"
                        v-model="studentObject.cne"
                        @input="$v.studentObject.cne.$touch()"
                        @blur="$v.studentObject.cne.$touch()"
                        :error-messages="cneErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <!-- email  -->
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="E-mail"
                        v-model="studentObject.email"
                        type="email"
                        @input="$v.studentObject.email.$touch()"
                        @blur="$v.studentObject.email.$touch()"
                        :error-messages="emailErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="E-mail(Confirmer l'E-mail)"
                        type="email"
                        v-model="studentObject.confirmEnail"
                        @input="$v.studentObject.confirmEnail.$touch()"
                        @blur="$v.studentObject.confirmEnail.$touch()"
                        :error-messages="confirmEnailErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <!-- password -->
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="Mot de passe"
                        v-model="studentObject.password"
                        type="password"
                        @input="$v.studentObject.password.$touch()"
                        @blur="$v.studentObject.password.$touch()"
                        :error-messages="passwordErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        label="Confirmer le mot de passe"
                        type="password"
                        v-model="studentObject.confirmPassword"
                        @input="$v.studentObject.confirmPassword.$touch()"
                        @blur="$v.studentObject.confirmPassword.$touch()"
                        :error-messages="confirmPasswordErrors"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-card-text>
            </v-card>

            <v-layout row wrap justify-end class="mt-2">
              <v-btn color="primary">Continue</v-btn>
            </v-layout>
          </v-stepper-content>
          <!--  basic info  end  -->
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      //stepper data
      e1: 1,
      step: 1,
      steps: 5,
      stepsObject:[
        {
          number:1,
          editable:true,
          complete:false
        },
        {
          number:2,
          editable:false,
          complete:false
        },
        {
          number:3,
          editable:false,
          complete:false
        },
        {
          number:4,
          editable:false,
          complete:false
        },
        {
          number:5,
          editable:false,
          complete:false
        }
      ],
      //register form
      registerValid: false,
      submitted: false,
      studentObject: {
        cin: "",
        cne: "",
        email: "",
        confirmEnail: "",
        photo: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        firstNameAr: "",
        lastNameAr: "",
        birthDay: new Date(),
        birthPlace: "",
        address: "",
        phone: "",
        nationality: "",
        filiere: "",
        level: "",
        bacType: "",
        bacGetYear: "",
        mention: "",
        fatherFullName: "",
        fatherJob: "",
        motherFullName: "",
        motherJob: "",
        parentAddress: "",
        parentPhone: ""
      }
      /*
      studentObjectBasicRules:{
        //cne /cin/addresses/
        textInput:[
          v => !!v || "This Field is required !",
          v => (v && v.length>=6) || "This Field not valid !"
        ], 
      }*/
    };
  },
  validations: {
    studentObject: {
      cin: {
        required,
        minLength: minLength(6)
      },
      cne: {
        required,
        minLength: minLength(6)
      },
      email: {
        required,
        email
      },
      confirmEnail: {
        required,
        email,
        sameAsEmail: sameAs("email")
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
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
    
  },

  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
    //submit the form
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      console.log(this.studentObject);
    }
  },
  computed: {
    //validations computed
    cinErrors() {
      const errors = [];
      if (!this.$v.studentObject.cin.$dirty) return errors;
      !this.$v.studentObject.cin.minLength && errors.push("Must be valid CIN");
      !this.$v.studentObject.cin.required && errors.push("CIN is required");
      return errors;
    },
    cneErrors() {
      const errors = [];
      if (!this.$v.studentObject.cne.$dirty) return errors;
      !this.$v.studentObject.cne.minLength &&
        errors.push("Must be valid Field CNE");
      !this.$v.studentObject.cne.required && errors.push("CNE is required");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.studentObject.email.$dirty) return errors;
      !this.$v.studentObject.email.email && errors.push("Must be valid e-mail");
      !this.$v.studentObject.email.required &&
        errors.push("E-mail is required");
      return errors;
    },
    confirmEnailErrors() {
      const errors = [];
      if (!this.$v.studentObject.confirmEnail.$dirty) return errors;
      !this.$v.studentObject.confirmEnail.email &&
        errors.push("Must be valid e-mail");
      !this.$v.studentObject.confirmEnail.required &&
        errors.push("E-mail is required");
      !this.$v.studentObject.confirmEnail.sameAsEmail &&
        errors.push("Confirm E-mail must be the same as E-mail");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.studentObject.password.$dirty) return errors;
      !this.$v.studentObject.password.minLength &&
        errors.push("Password must be great then 6 characters !");
      !this.$v.studentObject.password.required &&
        errors.push("Password is required");
      !this.$v.studentObject.password.strongPassword &&
        errors.push("Password must be strong !");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.studentObject.confirmPassword.$dirty) return errors;
      !this.$v.studentObject.confirmPassword.sameAsPassword &&
        errors.push("Confirm Password must be the same as password!");
      !this.$v.studentObject.password.required &&
        errors.push("Confirm Password is required");

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
