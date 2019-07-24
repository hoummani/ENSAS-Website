<template>
  <div id="reinscription" class="mb-5">
    <h5
      class="headline font-weight-light"
    >Pour la première inscription à l'ENSA Safi, Les candidats admis au(Concours commun des ENSA Maroc, CNC, Concours cycle Ingénieur) doivent obligatoirement déposer :</h5>
    <ul class="mt-2" v-for="item in reinscriptionObjects" :key="item.name">
      <li class="body-2 font-weight-bold">{{item.name}}</li>
    </ul>
    <ul v-for="item in fiches" :key="item.name">
      <li class="body-2 font-weight-bold">
        {{item.name}}
        <router-link v-if="item.externel==false" class="e-ensas"  :to="item.url" tag="a">ICI</router-link>
        <a v-else class="e-ensas" target="_blank" :href="item.url"> ICI</a>
      </li>
    </ul>
    <div class="subheading font-weight-bold mt-3 red--text">
        Les étudiants issus du CNC doivent en plus fournir :
    </div>
    <ul v-for="item in etudiants_CNC_objects" :key="item.name">
        <li class="body-2 font-weight-bold red--text">{{item.name}}</li>
    </ul>
    <div>
        <v-btn  class="mt-3" right>Inscivez-vous maintenant</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reinscriptionObjects: [
        { name: "L’original du baccalauréat" },
        { name: "01 photocopie de la CIN" },
        { name: "02 photocopies certifiées conformes de la CIN" },

        { name: "02 photocopies certifiées conformes du baccalauréat" },
        { name: "06 Photos d'identité" },
        { name: "03 enveloppes timbrées portant l'adresse des parents" },
        { name: "02 Extraits d'acte de naissance" },
        { name: "Dossier medical" },
        {
          name:
            "Assurance; (95dh) à payer à l'agence ASSURANCES BABBOUH SARL, 06.AVENUE LA LIBERTÉ. VILLE NOUVELLE. SAFI"
        },
        
      ],
      fiches: [
        {
          name: "Fiche de renseignement téléchargée",
          url: "/reinscription",
          externel: false
        },
        {
          name: "Reçu de préinscription au site ucanet à télécharger",
          url: "http://www.preinscription.uca.ma/",
          externel: true
        }
      ],
      etudiants_CNC_objects:[
          {name:"L'Attestation d'admissibilité"},
          {name:"L'Attestation d'affectation"},
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.e-ensas {
  color: #c7254e;
  cursor: pointer;
}
</style>


