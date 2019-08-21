<template>
  <div class="back pa-2">
    <h3
      class="display-1 text-sm-center grey--text font-weight-light"
    >Inscription et Reinscription en ligne ENSA Safi</h3>
    <v-container>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step
              :key="`${n}-step`"
              :editable="editable[n]"
              :complete="e1 > n"
              :step="n"
            >Etape {{ n }}</v-stepper-step>

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>
        </v-stepper-header>
        <v-stepper-items>
          <!-- basic info  -->
          <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
            <v-form v-model="registerValid" lazy-validation @submit.prevent="handleSubmit">
              <v-card v-if="n === 1" class="mb-3" flat>
                <v-card-title>
                  <h5 class="subheading text-uppercase grey--text">Information de base</h5>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <p>
                    <v-alert :value="false" type="error">Lorem ipsum dolor sit</v-alert>
                  </p>
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
                </v-card-text>
              </v-card>
              <!-- 2  -->
              <v-card v-if="n === 2" class="mb-3" flat>
                <v-card-title>
                  <h5 class="subheading text-uppercase grey--text">Information personnelles</h5>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <p>
                    <v-alert :value="false" type="error">Lorem ipsum dolor sit</v-alert>
                  </p>
                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <!-- firstName  -->
                      <v-text-field
                        type="text"
                        label="Nom"
                        v-model="studentObject.firstName"
                        @input="$v.studentObject.firstName.$touch()"
                        @blur="$v.studentObject.firstName.$touch()"
                        :error-messages="firstNameErrors"
                      ></v-text-field>
                    </v-flex>
                    <!-- last name  -->
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        type="text"
                        label="Prenom"
                        v-model="studentObject.lastName"
                        @input="$v.studentObject.lastName.$touch()"
                        @blur="$v.studentObject.lastName.$touch()"
                        :error-messages="lastNameErrors"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm5 md4 lg4>
                      <!-- firstName  -->

                      <v-text-field
                        type="text"
                        label="الاسم الشخصي"
                        dir="rtl"
                        lang="ar"
                        id="lastNameInput"
                        class="keyboardInput"
                        v-model="studentObject.firstNameAr"
                        @input="$v.studentObject.firstNameAr.$touch()"
                        @blur="$v.studentObject.firstNameAr.$touch()"
                        :error-messages="firstNameArErrors"
                        style="unicode-bidi:bidi-override;
                            direction: RTL; text-align:right;"
                      ></v-text-field>
                      <v-btn small right icon @click="lastKeyboard=!lastKeyboard">
                        <v-icon>keyboard</v-icon>
                      </v-btn>
                      <div v-if="lastKeyboard">
                        <v-card>
                          <v-layout row wrap>
                            <v-flex>
                              
                              
                              <span  class="caption text-uppercase text-md-start">لوحة المفاتيح العربية</span>
                            </v-flex>
                          </v-layout>
                          <v-divider></v-divider>
                          <v-layout row wrap>
                            <v-flex v-for="(item,index) in keyboardKeys" :key="index">
                              <v-btn v-if="item.name==='delete'" style="width:24px; height:24px;" fab icon small>
                                <v-icon small>keyboard_backspace</v-icon>
                              </v-btn>
                              <v-btn v-else-if="item.name==='space'" style="width:95%" small></v-btn>
                              <v-btn
                                small
                                v-else
                                fab
                                @click="lastNameClick(item.character)"
                                style="width:24px; height:24px;"
                              >{{item.character}}</v-btn>
                              
                            </v-flex>
                          </v-layout>
                        </v-card>
                      </div>
                    </v-flex>
                    <!-- last name  -->
                    <v-flex xs12 sm5 md4 lg4>
                      <v-text-field
                        type="text"
                        label="الاسم العائلي"
                        dir="rtl"
                        lang="ar"
                        class="keyboardInput"
                        v-model="studentObject.lastNameAr"
                        @input="$v.studentObject.lastNameAr.$touch()"
                        @blur="$v.studentObject.lastNameAr.$touch()"
                        :error-messages="lastNameArErrors"
                        style="unicode-bidi:bidi-override;
                            direction: RTL; text-align:right;"
                      ></v-text-field>
                      <v-btn right small icon @click="firstKeyboard=!firstKeyboard">
                        <v-icon>keyboard</v-icon>
                      </v-btn>
                      <v-card id="firstNameKeyboard" v-if="firstKeyboard"></v-card>
                    </v-flex>
                  </v-layout>
                </v-card-text>
                <v-divider></v-divider>
              </v-card>
              <!-- 3  -->
              <v-divider></v-divider>
              <v-layout row wrap justify-end class="mt-2">
                <v-btn color="secondary" v-if="n === 5" @click="reset">Initialiser</v-btn>
                <v-btn type="submit" color="primary" v-if="n === 5">Enregistrer</v-btn>

                <v-btn color="primary" v-else @click="nextStep(n)">Suivant</v-btn>
              </v-layout>
            </v-form>
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
      editable: [false, true, false, false, false, false],
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
      },

      //arabic keyboard
      lastKeyboard: false,
      firstKeyboard: false,
      keyboardKeys: [
        {
          name: "ذ",
          character: "ذ"
        },
        {
          name: "ض",
          character: "ض"
        },
        {
          name: "ص",
          character: "ص"
        },
        {
          name: "ث",
          character: "ث"
        },
        {
          name: "ق",
          character:"ق"
        },
        {
          name:"delete",
          character:""
        },
        {
          name: "ف",
          character:"ف"
        },
        
        {
          name: "غ",
          character:"غ"
        },
        {
          name: "ع",
          character:"ع"
        },
        {
          name: "ه",
          character:"ه"
        },
        {
          name: "خ",
          character:"خ"
        },
        {
          name: "ح",
          character:"ح"
        },
        {
          name: "ج",
          character:"ج"
        },
        {
          name: "د",
          character:"د"
        },
        {
          name: "ش",
          character:"ش"
        },
        {
          name: "س",
          character:"س"
        },
        {
          name: "ي",
          character:"ي"
        },
        {
          name: "ب",
          character:"ب"
        },
        {
          name: "ل",
          character:"ل"
        },
        {
          name: "ا",
          character:"ا"
        },
        {
          name: "ت",
          character:"ت"
        },
        {
          name: "ن",
          character:"ن"
        },
        {
          name:"م",
          character:"م"
        },
        {
          name:"ك",
          character:"ك"
        },
        {
          name:"ط",
          character:"ط"
        },
        {
          name:"ئ",
          character:"ئ"
        },
        {
          name:"ء",
          character:"ء"
        },
        {
          name:"ؤ",
          character:"ؤ"
        },
        {
          name:"ر",
          character:"ر"
        },
        {
          name:"لا",
          character:"لا"
        },
        {
          name:"ى",
          character:"ى"
        },
        {
          name:"ة",
          character:"ة"
        },
        {
          name:"و",
          character:"و"
        },
        {
          name:"ز",
          character:"ز"
        },
        {
          name:"ظ",
          character:"ظ"
        },
        
        {
          name:"space",
          character:" "
        }
      ]
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
      },
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      firstNameAr: {
        required,
        minLength: minLength(3)
      },
      lastNameAr: {
        required,
        minLength: minLength(3)
      }
    }
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    }
  },

  methods: {
    nextStep(n) {
      if (n == 5) {
        this.e1 = 1;
      }
      this.e1 = n + 1;
      this.editable[n + 1] = true;
    },

    lastNameClick(character) {
      this.studentObject.lastNameAr += character;
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
    },
    reset() {
      this.$v.$reset();

      this.e1 = 1;
      this.editable = [false, true, false, false, false, false];
    }

    //comons validations
    /*
    textInputErrors(fieldName) {
      const errors = [];
      switch (fieldName) {
        case "cin":
          if (this.$v.studentObject.cin.$dirty) return errors;
          !this.$v.studentObject.cin.minLength &&
            errors.push("Must be valid CIN");
          !this.$v.studentObject.cin.required && errors.push("CIN is required");
          break;
        case "cne":
          if (this.$v.studentObject.cne.$dirty) return errors;
          !this.$v.studentObject.cne.minLength &&
            errors.push("Must be valid Field CNE");
          !this.$v.studentObject.cne.required && errors.push("CNE is required");
          break;
      }
      return errors;
    }*/
  },
  created() {
    /*
    google
      .load("elements", "1", {
        packages: "keyboard"
      })
      .then(() => {
        let firstKeyboard = new google.elements.keyboard.Keyboard(
          [google.elements.keyboard.LayoutCode.RUSSIAN],
          ["firstNameKeyboard"]
        );

        let lastKeyboard = new google.elements.keyboard.Keyboard(
          [google.elements.keyboard.LayoutCode.RUSSIAN],
          ["lastNameKeyboard"]
        );
      });
      */
  },
  computed: {
    //validations computed

    cinErrors() {
      const errors = [];
      if (!this.$v.studentObject.cin.$dirty) return errors;
      !this.$v.studentObject.cin.minLength &&
        errors.push("Must be valid Field CIN");
      !this.$v.studentObject.cne.required && errors.push("CIN is required");
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
    },
    firstNameErrors() {
      const errors = [];
      if (!this.$v.studentObject.firstName.$dirty) return errors;
      !this.$v.studentObject.firstName.minLength &&
        errors.push("Must be valid Field Nom");
      !this.$v.studentObject.firstName.required &&
        errors.push("Nom is required");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.studentObject.lastName.$dirty) return errors;
      !this.$v.studentObject.lastName.minLength &&
        errors.push("Must be valid Field Prenom");
      !this.$v.studentObject.lastName.required &&
        errors.push("Prenom is required");
      return errors;
    },

    firstNameArErrors() {
      const errors = [];
      if (!this.$v.studentObject.firstNameAr.$dirty) return errors;
      !this.$v.studentObject.firstNameAr.minLength &&
        errors.push("الاسم العائلي يجب ان يكون مستوفيا");
      !this.$v.studentObject.firstNameAr.required &&
        errors.push("الاسم العائلي ضروريا");
      return errors;
    },
    lastNameArErrors() {
      const errors = [];
      if (!this.$v.studentObject.lastNameAr.$dirty) return errors;
      !this.$v.studentObject.lastNameAr.minLength &&
        errors.push("الاسم الشخصي يجب ان يكون مستوفيا");
      !this.$v.studentObject.firstNameAr.required &&
        errors.push("الاسم الشخصي ضروريا");
      return errors;
    }
  },
  components: {}
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
