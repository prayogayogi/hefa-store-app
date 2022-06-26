<template>
  <div class="similar-product">
    
    <!-- Include Components Navbar -->
    <Navbar />
    <!-- End Include Components Navbar -->

    <!-- Start About -->
    <section class="about">
      <div class="container">
        <div class="row mb-3">
          <div class="col col-md-6">
            <h3>About Us</h3>
            <p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p class="text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
          </div>
          <div class="col-md-6 col-sm-6 align-self-center mt-md-4">
            <figure class="figure">
              <img
                src="hefa-store/img/about-us.png"
                class="figure-img img-fluid"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <!-- End About -->

  </div>
</template>

<script>
import Navbar from "../components/layouts/Navbar.vue"
export default {
  name:"About",
  components:{
    Navbar
  }
}
</script>


<style scoped>
p{
  color: #171717;
}

img{
  border-radius: 20px;
}
</style>