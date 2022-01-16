<template>
  <div id="app">
    <!-- Include Components Navbar -->
    <Navbar />
    <!-- End Include Components Navbar -->
    <router-view />
    <!-- Include Components Footer -->
    <Footer />
    <!-- End Include Components Footer -->
  </div>
</template>

<script>
import Footer from "./components/layouts/Footer.vue";
import Navbar from "./components/layouts/Navbar.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
