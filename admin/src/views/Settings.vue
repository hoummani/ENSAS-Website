<template>
  <div>
    <h5 class="subheading text-uppercase grey--text">Parametres d'application</h5>
    <div>
      <v-card>
        <v-tabs background-color="white" show-arrows color="indigo" left>
          <v-tab href="#tab-1">Parametres Globals</v-tab>
          <v-tab href="#tab-2">Parametres particulieres</v-tab>

          <v-tab-item value="tab-1" class="pa-5">
            <v-layout row wrap>
              
              <v-flex xs12 sm12 md6 lg6>
                <v-card>
                  <v-card-title>
                    <div>
                      <v-icon left>lock_open</v-icon>
                      <span>Activer/Desactiver</span>
                    </div>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-layout row wrap>
                      <div>
                        <!--  desactiver l'inscription  -->
                        <v-switch v-model="inscriptionForm" :label="`Formulaire d'inscription: ${inscriptionFormString}`" color="success" :loading="inscriptionFormLoading"></v-switch>
                        <!-- descativer l'acces au concour  -->
                        <v-switch v-model="inscriptionConcourForm" :label="`Formulaire d'access au concours: ${inscriptionConcourFormString}`" color="success" :loading="inscriptionConcourFormLoading"></v-switch>
                        <!--  descativer choix de filieres  -->

                        <v-switch v-model="choixFiliere" :label="`Formulaire d'access au concours: ${choixFiliereString}`" color="success" :loading="choixFiliereLoading"></v-switch>
                      </div>
                    </v-layout>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-layout justify-end>
                      <v-btn color="primary">Confirmer</v-btn>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <!-- descativer l'acces au concour  -->
              <v-flex xs12 sm12 md6 lg6></v-flex>
              
              
            </v-layout>
          </v-tab-item>
          <v-tab-item value="tab-2" class="pa-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              voluptates laudantium. Corrupti, officia? Pariatur mollitia
              aliquid quos molestiae corrupti temporibus iste dolorum
              perspiciatis corporis voluptas.
            </p>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //activer/descativer
      inscriptionForm:false,
      inscriptionFormString:"Desactive",
      inscriptionFormLoading:false,
      //-------
      inscriptionConcourForm:false,
      inscriptionConcourFormString:"Desactive",
      inscriptionConcourFormLoading:false,
      //----
      choixFiliere:false,
      choixFiliereString:"Desactive",
      choixFiliereLoading:false,
    };
  },
  watch: {
    inscriptionForm:function(v){
      this.inscriptionFormLoading=true
      setTimeout(()=>{this.inscriptionFormLoading=false},2000);
      if(v==true){
        this.inscriptionFormString="Active";
        
      }else{
        this.inscriptionFormString="Desactive";
      }
    },

    inscriptionConcourForm:function(v){
      this.inscriptionConcourFormLoading=true
        setTimeout(()=>{this.inscriptionConcourFormLoading=false},2000);
      if(v==true){
        this.inscriptionConcourFormString="Active";
        
      }else{
        this.inscriptionConcourFormString="Desactive";
      }
    },
    choixFiliere:function(v){
      this.choixFiliereLoading=true
      setTimeout(()=>{this.choixFiliereLoading=false},2000);
      if(v==true){
        this.choixFiliereString="Active";

      }else{
        this.choixFiliereString="Desactive";
      }
    }
  },
};
</script>
