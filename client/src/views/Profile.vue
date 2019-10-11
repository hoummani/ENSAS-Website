<template>
  <div>
    <v-card class="pa-3 ma-3">
      <v-tabs vertical>
        <v-tab> <v-icon left>mdi-account</v-icon>Mes informations </v-tab>
        <v-tab> <v-icon left>mdi-lock</v-icon> Changer password </v-tab>
        <v-tab> <v-icon left>edit</v-icon>Editer Mon Profile </v-tab>
        <v-tab> <v-icon left>cloud_download</v-icon>Recu d'inscription </v-tab>
        <v-tab-item>
          <v-card flat>
            <!-- student info  -->
            <ProfileInfo />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <!-- student change password  -->
            <EditPassword/>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <!--  student edit profile  -->
            <EditProfile />
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <!--  Recu   -->
            <RecuProfile/>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import ProfileInfo from "../components/profile/ProfileInfo";
import EditProfile from "../components/profile/EditProfile";
import EditPassword from "../components/profile/EditPassword";
import RecuProfile from "../components/profile/RecuProfile";
export default {
  data() {
    return {};
  },
  mounted() {},
  destroyed() {
    this.$store.dispatch('logOut').then(()=>{
      console.log("Destroyed !");
    });
  },
  methods: {},

  components: {
    ProfileInfo,
    EditProfile,
    EditPassword,
    RecuProfile
  }
};
</script>
<style lang="scss" scoped></style>
