<template>
  <div class="pa-4">
    <v-layout class="pa-3" wrap row>
      <v-select
        label="Selectioner la specification universitaire"
        :items="deps"
        v-model="dep_selected"
        item-text="name"
        item-value="value"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn color="secondary" @click="onAddGrp">Ajouter Un Group</v-btn>
    </v-layout>
    <v-card
      class="pa-2 mb-2 pl-5"
      v-for="(item,index) in jurys"
      :key="index"
      v-ripple="{ class: `indigo--text lighten-2` }"
    >
      <v-layout row wrap class="pa-3">
        <v-flex xs12 sm8 md9>
          <div class="caption grey--text">Numero de Groupe</div>
          <div class="body-2 font-weight-bold">Groupe N : {{ index+1}}</div>
        </v-flex>

        <!-- operations -->
        <v-flex xs6 sm3 md3 lg3>
          <div class="caption grey--text">Operations</div>
          <div>
            <v-btn small icon>
              <v-icon small>edit</v-icon>
            </v-btn>
            <v-btn small icon>
              <v-icon small>delete</v-icon>
            </v-btn>
          </div>
        </v-flex>
        <!-- membres  -->
        <v-flex xs12 sm12 md12 lg12>
          <div class="caption grey--text">Membres de groupe</div>
          <div>
            <v-layout row wrap v-for="member in item.members" :key="member.email">
              <v-flex xs4 sm4 md4 lg4>
                <ul>
                  <li>{{ member.name }}</li>
                </ul>
              </v-flex>
              <v-flex xs4 sm4 md4 lg4>
                <ul style="list-style-type:none;">
                  <li>{{ member.email }}</li>
                </ul>
              </v-flex>
              <v-flex xs4 sm4 md4 lg4>
                <ul style="list-style-type:none;">
                  <li>{{ member.phone }}</li>
                </ul>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-card>

    <div>
      <!-- modals  -->
      <!--  add group  -->
      <v-layout justify-center>
        <v-dialog v-model="addItemDialog" persistent max-width="590">
          <v-card>
            <v-card-title class="headline">Ajouter Un Groupe</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container grid-list-md>
                <v-form ref="addItemForm" v-model="addItemValidForm" lazy-validation>
                  <v-select
                    label="Selectioner le departement"
                    :items="deps"
                    v-model="GroupObject.departement"
                    :rules="GroupObjectRules.requiredField"
                    item-text="name"
                    item-value="value"
                  ></v-select>

                  <!-- ########### -->
                  <v-card class="pa-5 mb-2" v-for="(item,index) in GroupObject.members" :key="index">
                    <div class="caption grey--text">
                      Membre :
                      <span class="body-2 font-weight-bold">{{index+1}}</span>
                    </div>

                    <v-text-field
                      type="text"
                      label="Nom"
                      :rules="GroupObjectRules.textInput"
                      v-model="item.name"
                      required
                    ></v-text-field>
                    <v-text-field
                      type="email"
                      label="Email"
                      :rules="GroupObjectRules.emailInput"
                      v-model="item.email"
                      required
                    ></v-text-field>

                    <v-text-field
                      type="phone"
                      label="Telephone"
                      :rules="GroupObjectRules.phoneInput"
                      v-model="item.phone"
                      required
                    ></v-text-field>
                    <v-layout justify-end>
                      <v-btn fab icon small @click="onRemoveMember(index)">
                        <v-icon>remove</v-icon>
                      </v-btn>
                      <v-btn fab icon small @click="onAddMember">
                        <v-icon>add</v-icon>
                      </v-btn>
                      
                    </v-layout>
                  </v-card>
                  
                </v-form>
              </v-container>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="indigo darken-1" text @click="addGrpreset">Annuler</v-btn>
              <v-btn color="indigo darken-1" text @click="addGrpsubmit">Enregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>
    <!--  
      <v-card class="pa-5 mb-2" v-for="index in  membersArray" :key="index">
                    <div class="caption grey--text">
                      Membre :
                      <span class="body-2 font-weight-bold">{{index+1}}</span>
                    </div>

                    <v-text-field
                      type="text"
                      label="Nom"
                      :rules="GroupObjectRules.textInput"
                      v-model="GroupObject.members.name"
                      required
                    ></v-text-field>
                    <v-text-field
                      type="email"
                      label="Email"
                      :rules="GroupObjectRules.emailInput"
                      v-model="GroupObject.members.email"
                      required
                    ></v-text-field>

                    <v-text-field
                      type="phone"
                      label="Telephone"
                      :rules="GroupObjectRules.phoneInput"
                      v-model="GroupObject.members.phone"
                      required
                    ></v-text-field>
                  </v-card>
                  
     -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      //select departement
      dep_selected: "infoGtr",
      deps: [
        {
          name: "Informatique & Reseaux",
          value: "infoGtr"
        },
        {
          name: "Genie Industriel & Procedes",
          value: "indusGpmc"
        }
      ],
      jurys: [
        {
          members: [
            {
              name: "Atlas Abdelghafour",
              email: "Atlas.abdelghafour@gmail.com",
              phone: "0616234478"
            },
            {
              name: "Bouarifi Walid",
              email: "Bouarifi.walid@gmail.com",
              phone: "0616234478"
            },
            {
              name: "Ech-chadi Said",
              email: "Ech-chadi.said@gmail.com",
              phone: "0616234478"
            }
          ],
          departement: "infoGtr"
        },
        {
          members: [
            {
              name: "Boukhatem Ali",
              email: "boukhtam.ali@gmail.com",
              phone: "0616234478"
            },
            {
              name: "Touriki Roqaya",
              email: "touriki.rokaya@gmail.com",
              phone: "0616234478"
            },
            {
              name: "Atri khadija",
              email: "atri.khadija@gmail.com",
              phone: "0616234478"
            }
          ],
          departement: "indusGpmc"
        }
      ],
      //add group
      addItemValidForm: false,
      addItemDialog: false,
      membresNumber: 1,

      GroupObject: {
        departement: "",
        members: [
          {
            name: "",
            email: "",
            phone: ""
          }
        ]
      },
      GroupObjectRules: {
        textInput: [
          v =>
            (v && v.length >= 3) ||
            "Text field value must be great than 3 characters"
        ],
        emailInput: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"],
        phoneInput: [
          v => (v && v.length >= 9) || "Phone number is not valid !"
        ],
        requiredField: [v => !!v || "Text field is required !"]
      }
    };
  },
  created() {},
  methods: {
    initialize() {},
    onAddGrp() {
      this.addItemDialog = true;
    },
    onAddMember(){
      
      this.GroupObject.members.push({
        name:"",
        email:"",
        phone:""
      });
    },
    onRemoveMember(index){
      if(index>0){
        
        this.GroupObject.members.splice(index, 1);
      }
    },
    addGrpreset() {
      this.$refs.addItemForm.reset();
      this.addItemDialog = false;
    },
    addGrpsubmit() {
      if (this.$refs.addItemForm.validate()) {
        console.log(this.GroupObject);
      }
    }
  },
  computed: {
    membersArray: function() {
      let arr = [];
      for (let i = 0; i < this.membresNumber; i++) {
        arr.push(i);
      }
      return arr;
    }
  }
};
</script>
