<template>
  <div class>
    <h5 class="subheading font-weight-bold">Conditions d’admission :</h5>
    <br>
    <div class="body-2">
      <p >
        Dans la limite des places disponibles, l’ENSA Safi organise le
        <span class="e-ensas">{{dateConcour3a}}</span> , le concours d'accès en deuxième année du Cycle Ingénieur, dans les quatre filières accréditées à l'ENSA :
      </p>
      <ul>
        <li>Génie Informatique</li>
        <li>Génie Télécoms et Réseaux</li>
        <li>Génie Industriel</li>
        <li>Génie des Procédés et Matériaux Céramiques</li>
      </ul>
      <p>L'inscription au concours de la deuxième année cycle d'ingénieur (4ème année) est ouverte aux titulaires d'un diplôme BAC+3 ou plus (promotion  2019 ou plus):</p>
      <ul>
        <li>Master ou Master spécialisé</li>
        <li>Maitrise ST ou equivalent</li>
        <li>Licence professionnelle</li>
        <li>Licence Sciences et Techniques</li>
        <li>Licence fondamentale ou Licence Es-sciences spécialisé</li>
      </ul>
      
      <p><span class="e-ensas">sous réserve de ne pas être pré-inscrit au concours d’accès en première année du cycle ingénieur. </span> </p>
      <br>
      <h5 class="subheading font-weight-bold">Modalités du concours :</h5>
      <br>
      <p>Le concours consiste en 2 étapes :</p>
      <ul>
          <li><strong>Etape 1:</strong> Une présélection sur la base des données communiquées par les candidats sur la plateforme de préinscription au concours d’accès;</li>
          <li><strong>Etape 2:</strong> Un entretien avec le jury, à l'issue des résultats de l'entretien sont proclamés les candidats admis par ordre de mérite, pour une inscription en deuxième année du cycle ingénieur de l'école.</li>
      </ul>
      <br>
      <h5 class="subheading font-weight-bold">Consulter le calendrier de concour pour plus de details <br> <v-btn to="/about">Maintenant</v-btn></h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateConcour3a: "16 Juillet 2019"
    };
  }
};
</script>
<style lang="scss" scoped>
.e-ensas {
  color: #c7254e;
}
</style>