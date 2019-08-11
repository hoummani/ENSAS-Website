<template>
  <nav>
    <v-app-bar dense app elevate-on-scroll>
      <v-app-bar-nav-icon @click="onDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title>e-ENSAS Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="hidden-xs-only">
        <v-text-field
          label="Recherche..."
          single-line
          class="mt-4"
        ></v-text-field>
      </div>
      <v-btn icon class="hidden-xs-only">
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-badge class="align-self-center" color="#c7254e" right overlap>
              <template v-slot:badge>
                <span>3</span>
              </template>
              <v-icon v-bind="attrs" v-on="on">mdi-bell</v-icon>
            </v-badge>
          </template>

          <v-list
            v-for="notification in notifications"
            :key="notification.content"
          >
            <v-list-item @click="method">
              <v-list-item-title>{{ notification.content }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <v-btn icon class="hidden-xs-only">
        <v-icon>person</v-icon>
      </v-btn>
      <v-btn icon class="hidden-xs-only">
        <v-icon>mdi-settings</v-icon>
      </v-btn>

      <v-btn icon class="hidden-xs-only">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="indigo lighten-2" dark app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">e-ENSAS</v-list-item-title>
          <v-list-item-subtitle>Nouvelle plateforme</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.url"
          class="ensas-nav"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", url: "/" },
        { title: "Profile", icon: "person", url: "/profile" },
        { title: "Anonces", icon: "announcement", url: "/annonces" },
        { title: "Aclualitees", icon: "assignment", url: "/actualitees" },
        { title: "Calendrier", icon: "date_range", url: "/calendar" },
        { title: "Reinscription", icon: "input", url: "/reinscription" },
        { title: "Concours", icon: "question_answer", url: "/concours" },
        {
          title: "Choix de filieres",
          icon: "mdi-help-box",
          url: "/choix_filieres"
        },
        { title: "Espace PFE", icon: "school", url: null },
        { title: "Parametres", icon: "settings", url: null }
      ],
      right: null,
      notifications: [
        {
          content: "Mike, John responded to your email"
        },
        {
          content: "You have 5 new tasks"
        },
        {
          content: "You're now a friend with Andrew"
        },
        {
          content: "Another Notification"
        },
        {
          content: "Abdessadek Hoummani !"
        }
      ]
    };
  },
  methods: {
    onDrawer() {
      this.drawer = !this.drawer;
    },
    method() {}
  }
};
</script>

<style lang="scss" scoped>
.ensas-nav:active {
  color: white;
}
.ensas-nav:hover {
  color: white;
}
.ensas-nav:link:focus {
  color: white;
  text-decoration-color: white;
}
</style>
