<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="../../assets/logo_small.png" alt="Hefa Store" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav text-uppercase mx-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/category"
                >Category</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/designer">Designer</router-link>
            </li>
          </ul>
          <router-link to="/cart" class="nav-link text-white"
            ><i class="fas fa-shopping-cart"></i> My Cart
            (<span>12</span>)</router-link
          >
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>