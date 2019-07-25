<template>
  <div>
    <h5 class="headline font-weight-light text-sm-center">
      Choix des Filières du cycle Ingénieur
    </h5>
    <p class="caption text-sm-center">
      Platforme résérvée aux étudiants ayant validé le Cycle Préparatoire
    </p>
    <v-container class="my-5">
      <v-card>
        <v-layout row wrap class="pa-3 calendarBorder">
          <v-flex xs12 sm4 md4>
            <div class="caption grey--text">La date</div>
            <div>18 Juillet 2019</div>
          </v-flex>

          <v-flex xs12 sm8 md8>
            <div class="caption grey--text">Information</div>
            <div>
              <p>
                Lancement des Choix des filières
                <span class="e-ensas font-weight-bold">en ligne</span> sur le
                site web de l'ENSAS.
              </p>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-card>
        <v-layout row wrap class="pa-3 calendarBorder">
          <v-flex xs12 sm4 md4>
            <div class="caption grey--text">La date</div>
            <div>22 Juillet 2019</div>
          </v-flex>

          <v-flex xs12 sm8 md8>
            <div class="caption grey--text">Information</div>
            <div>
              <p>Date limite des choix de filière.</p>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-card>
        <v-layout row wrap class="pa-3 calendarBorder">
          <v-flex xs12 sm4 md4>
            <div class="caption grey--text">La date</div>
            <div>23 Juillet 2019</div>
          </v-flex>

          <v-flex xs12 sm8 md8>
            <div class="caption grey--text">Information</div>
            <div>
              <p>
                Affichages des affectations définitives des filières sur le site
                web de l'ENSAS. (Les filières seront attribuées par le système
                selon
                <span class="e-ensas font-weight-bold">l'ordre du mérite</span>
                et
                <span class="e-ensas font-weight-bold"
                  >les choix des étudiants</span
                >
              </p>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-card>
        <v-layout row wrap class="pa-3 calendarBorder">
          <v-flex xs12 sm4 md4>
            <div class="caption grey--text">La date</div>
            <div>Du 03 au 04 Septembre</div>
          </v-flex>

          <v-flex xs12 sm8 md8>
            <div class="caption grey--text">Information</div>
            <div>
              <p class="font-weight-bold">
                Inscription en service de scolarité.
              </p>
              <p>Le dossier d'inscription en 3ème année est composé de :</p>
              <ul>
                <li>
                  La
                  <span class="font-weight-bold"
                    >Fiche de choix filière imprimée depuis le compte</span
                  >(avec
                  <span class="e-ensas font-weight-bold"
                    >photo numérique obligatoire</span
                  >).
                </li>
                <li>
                  Assurance; (95dh) à payer à l'agence ASSURANCES BABBOUH SARL,
                  Adresse: 06.AVENUE LA LIBERTÉ. VILLE NOUVELLE. SAFI;
                </li>
              </ul>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-card>
        <v-layout row wrap class="pa-3 calendarBorder">
          <v-flex xs12 sm4 md4>
            <div class="caption grey--text">La date</div>
            <div>03-04 Septembre</div>
          </v-flex>

          <v-flex xs12 sm8 md8>
            <div class="caption grey--text">Information</div>
            <div>
              <p class="font-weight-bold">Demande de changement de filières.</p>
              <p>
                La date limite pour déposer des demandes de changement de
                filière est
                <span class="e-ensas font-weight-bold">04 Septembre 2019.</span>
              </p>
              <p>
                Télécharger et remplir la fiche ci-dessous à déposer au
                secrétariat de la direction adjointe :
              </p>
              <ul>
                <li>
                  <a
                    class="e-ensas font-weight-bold"
                    href="http://www.ensas.uca.ma/eEnsas/file/Demande_de_Changement_de_Filière.doc"
                    target="_blank"
                    >Fiche de demande de changement de filière.</a
                  >
                </li>
              </ul>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-card class="mt-3 pa-2">
        <h2 class="headline font-weight-light text-sm-center">
          Filières accréditées à l'ENSAS
        </h2>
        <v-divider></v-divider>
        <ul class="mt-3 mb-3">
          <li>Génie Informatique</li>
          <li>Génie Télécomunications et Réseaux</li>
          <li>Génie Industriel</li>
          <li>Génie des Procédés et Matériaux céramiques</li>
        </ul>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.calendarBorder {
  border-left: 4px solid #c7254e;
}
.e-ensas {
  color: #c7254e;
  cursor: pointer;
}
</style>
