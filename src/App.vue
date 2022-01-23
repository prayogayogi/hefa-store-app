<template>
  <div id="app">
    <router-view />
    <!-- Include Components Footer -->
    <Footer />
    <!-- End Include Components Footer -->
  </div>
</template>

<script>
import Footer from "./components/layouts/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
