<template>
<div class="mt-3">
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col-10 col-md-10 col-lg-8 col-xl-7">
        <h4 class="display-4 text-primary mb-2">Curricula</h4>
        <p class="lead">
          This app creates activities, allows users to view, select
          and review activities they would like to participate in. It's a good example of a
          Single Page Application which includes connection to a database and
          routing through views.
          <a
            href="https://vuejs.org/"
          >Vue.js</a>
          with
          <a href="https://firebase.google.com">Firebase</a>.
          <font-awesome-icon class="text-danger" icon="star"></font-awesome-icon>
        </p>

        <router-link class="btn btn-outline-primary mr-2" to="/register">Register</router-link>
        <router-link class="btn btn-outline-primary mr-2" to="/login">Log In</router-link>
        <router-link class="btn btn-primary" to="/activities">Activities</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "home",
  props: ["user"],
  components: {
    FontAwesomeIcon
  }
};
</script>