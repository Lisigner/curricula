<template>
  <div id="main-app" class="container">
    <Navigation />
    <router-view 
    class="container" 
    :user="user" 
    @logout="logout"
    />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Firebase from "firebase";
import db from "./db.js";

export default {
  name: "MainApp",
  data: function() {
    return {
      user: null
    };
  },
  methods: {
    logout: function() {
      Firebase.auth()
      .signOut()
      .then( () => {
        this.user = null;
        this.$router.push("login");
      });
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.displayName;
      }
    });
    db
  },
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>