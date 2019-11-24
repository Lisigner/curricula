<template>
  <div id="main-app" class="container">
    <Navigation />
    <router-view 
    class="container" 
    :user="user" 
    />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Firebase from "firebase";
import db from "./db.js";

export default {
  name: "MainApp",
  data: function() {
    return {
      user: null
    };
  },
  components: {
    Navigation
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.email;
      }
    });
    db.collection("users")
    .doc("Ymd5PfPONGcrwLP3Pkyo")
    .get()
    .then(snapshot => {
      this.user = snapshot.data().name;
    });
  },
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>