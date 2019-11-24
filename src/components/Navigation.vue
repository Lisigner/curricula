<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Curricula</router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/activities">activities</router-link>
          <router-link class="nav-item nav-link" to="/login">log in</router-link>
          <router-link class="nav-item nav-link" to="/register">register</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>