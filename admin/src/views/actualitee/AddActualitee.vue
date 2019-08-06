<template>
  <div id="addActualite">
    <h4
      class="display-2 font-weight-thin grey--text text-xs-center text-sm-center"
    >
      Ajouter une actualitee
    </h4>
    <v-btn text class="grey--text" to="/actualitees">
      <v-icon left>arrow_back</v-icon>
      <span>Retour</span>
    </v-btn>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- title  -->

        <v-text-field
          v-model="actualitee.title"
          type="text"
          :rules="aclualiteeRules.titleRules"
          label="Titre d'actualitee"
          required
        ></v-text-field>
        <!--  date -->
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          full-width
          max-width="290"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              :value="formatedDate"
              clearable
              label="Date limite"
              :rules="aclualiteeRules.ended_atRules"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="actualitee.ended_at"
            locale="fr"
            @change="menu2 = false"
          ></v-date-picker>
        </v-menu>

        <!-- select content -->
        <!--   -->
        <v-select
          :items="items"
          label="Selectioner le type de votre contenu"
          :rules="aclualiteeRules.select_type_content"
          v-on:change="optionChoose"
          required
        ></v-select>
        <v-layout row wrap>
          <!-- urls content -->
          <v-flex
            xs12
            sm12
            md12
            lg12
            v-for="(row, index) in actualitee.urls"
            :key="index"
          >
            <v-card class="mb-3 pa-5">
              <v-text-field
                v-model="row.link_title"
                :rules="link_titleRules"
                type="text"
                label="Titre de lien"
                required
              ></v-text-field>

              <v-text-field
                v-model="row.link"
                type="url"
                :rules="linkRules"
                label="Le lien"
                required
              ></v-text-field>
              <div>
                <v-btn class="mx-2" fab @click="removeUrlRow(index)" small text>
                  <v-icon>remove</v-icon>
                </v-btn>
                <v-btn fab @click="addUrlRow" small text>
                  <v-icon>add</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-flex>

          <!-- content as list of text -->

          <v-flex
            xs12
            sm12
            md12
            lg12
            v-for="(row, index) in actualitee.contents"
            :key="index"
          >
            <v-card class="mb-3 pa-5">
              <v-textarea
                v-model="row.message"
                :rules="messageRules"
                label="Message"
                required
              ></v-textarea>
              <div>
                <v-btn
                  class="mx-2"
                  fab
                  @click="removeContentRow(index)"
                  small
                  text
                >
                  <v-icon>remove</v-icon>
                </v-btn>
                <v-btn fab small @click="addContentRow" text>
                  <v-icon>add</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
        <!-- buttons  -->
        <div class="mt-4">
          <v-btn color="primary" @click="submit" class="mr-4"
            >Enregistrer</v-btn
          >

          <v-btn @click="reset()">Réinitialiser</v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import format from "date-fns/format";
export default {
  data() {
    return {
      valid: false,
      menu2: false,
      items: ["Liste de texte", "Liste de liens", "Liste de texte + liens"],
      actualitee: {
        title: "",
        ended_at: new Date().toISOString().substr(0, 10),

        contents: [],
        urls: []
      },
      message: "",
      link: "",
      link_title: "",

      //------  Validation Rules  ------>
      aclualiteeRules: {
        titleRules: [
          v => !!v || "Title is required",
          v => (v && v.length >= 4) || "Title must be great than 4 characters"
        ],
        ended_atRules: [v => !!v || "Limit date is required"],
        select_type_content: [v => !!v || "One option is required"]
      },
      messageRules: [
        v => !!v || "Text message is required",
        v =>
          (v && v.length >= 4) || "Text message must be great than 4 characters"
      ],
      link_titleRules: [
        v => !!v || "Link title is required",
        v => (v && v.length >= 6) || "Link title  must be valid"
      ],
      linkRules: [
        v => !!v || "Link field is required !",
        v =>
          /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi.test(
            v
          ) || "Link field must bes valid !"
      ]
      //------- End of Validation Rules -------->
    };
  },
  computed: {
    formatedDate() {
      return this.actualitee.ended_at
        ? format(this.actualitee.ended_at, "Do MM YYYY")
        : "";
    }
  },
  methods: {
    //------- select methods  ----->
    optionChoose(e) {
      if (e == "Liste de texte") {
        this.actualitee.contents = [];
        this.addContentRow();
      } else if (e == "Liste de liens") {
        this.actualitee.urls = [];
        this.addUrlRow();
      } else {
        console.log("other choose !");
      }
    },
    addContentRow() {
      this.actualitee.urls = [];
      this.actualitee.contents.push({
        message: ""
      });
    },

    removeContentRow(index) {
      this.actualitee.contents.splice(index, 1);
    },

    addUrlRow() {
      this.actualitee.contents = [];
      this.actualitee.urls.push({
        link_title: "",
        link: ""
      });
    },
    removeUrlRow(index) {
      this.actualitee.urls.splice(index, 1);
    },
    //------------ end select methods  ---->

    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.actualitee.title);
        console.log(this.actualitee.ended_at);
        console.log(this.actualitee.contents);
        console.log(this.actualitee.urls);
      } else {
        console.log("Not valid !");
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
