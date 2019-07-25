<template>
  <div class>
    <h5 class="subheading font-weight-bold">Conditions d’admission :</h5>
    <br />
    <div class="body-2">
      <p>
        Dans la limite des places disponibles, l’ENSA Safi organise le
        <span class="e-ensas">{{ dateConcour3a }}</span> , le concours d'accès
        en première année du Cycle Ingénieur pour les étudiants récemment
        diplômés (promotion 2019 ou plus) , le concours est ouvert pour les deux
        filières suivantes :
      </p>
      <ul>
        <li>Génie Informatique</li>
        <li>Génie Télécoms et Réseaux</li>
      </ul>
      <p>
        L'inscription au concours de la première année cycle d'ingénieur (3ème
        année) est ouverte aux titulaires d'un diplôme BAC+2 ou plus:
      </p>
      <ul>
        <li>DEUG, DEUST, DEUP, DUT</li>
      </ul>
      <p>Les étudiants titulaires d’une :</p>
      <ul>
        <li>Licence professionnelle, Licence Sciences et Techniques</li>
        <li>Licence fondamentale ou Licence Es-sciences</li>
      </ul>
      <p>
        Peuvent également déposer leurs candidatures,
        <span class="e-ensas"
          >sous réserve de ne pas être pré-inscrit au concours d’accès en
          deuxième année du cycle ingénieur.</span
        >
      </p>
      <br />
      <h5 class="subheading font-weight-bold">Modalités du concours :</h5>
      <br />
      <p>Le concours consiste en 2 étapes :</p>
      <ul>
        <li>
          <strong>Etape 1:</strong>Une présélection sur la base des données
          communiquées par les candidats sur la plateforme de préinscription au
          concours d’accès;
        </li>
        <li>
          <strong>Etape 2:</strong>Un test écrit auquel sont convoqués les
          candidats présélectionnés, à l'issue des résultats du concours sont
          proclamés les candidats admis par ordre de mérite, pour une
          inscription en première année du cycle ingénieur de l'école. Le test
          écrit consiste en une épreuve de Mathématiques commune pour toute les
          filières, et des épreuves de spécialité.
        </li>
      </ul>
      <br />
      <h5 class="subheading font-weight-bold">
        Consulter le calendrier de concour pour plus de details <br />
        <v-btn to="/about">Maintenant</v-btn>
      </h5>
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
