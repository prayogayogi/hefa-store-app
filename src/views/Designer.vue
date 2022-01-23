<template>
  <div class="designer">
    <!-- Include Components Navbar -->
    <Navbar />
    <!-- End Include Components Navbar -->

        <!-- Similar Product -->
    <section class="similar-product">
      <div class="container">
        <div class="row mb-3">
          <div class="col">
            <h3>Designers</h3>
            <p>Miliki Pakaian dengan Designers terbaik</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 col-sm-6">
            <figure class="figure">
              <img
                src="hefa-store/img/single/similar/1.png"
                class="figure-img img-fluid"
              />
              <figcaption class="figure-caption">
                <div class="row">
                  <div class="col">
                    <h4>Anne Mortgery</h4>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          <div class="col-md-4 col-sm-6">
            <figure class="figure">
              <img
                src="hefa-store/img/single/similar/2.png"
                class="figure-img img-fluid"
              />
              <figcaption class="figure-caption">
                <div class="row">
                  <div class="col">
                    <a
                      href="http://"
                      class="btn btn-sm btn-success float-right mt-2"
                      >New</a
                    >
                    <h4>Anne Mortgery</h4>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          <div class="col-md-4 col-sm-6">
            <figure class="figure">
              <img
                src="hefa-store/img/single/similar/1.png"
                class="figure-img img-fluid"
              />
              <figcaption class="figure-caption">
                <div class="row">
                  <div class="col">
                    <h4>Anne Mortgery</h4>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          <div class="col-md-4 col-sm-6">
            <figure class="figure">
              <img
                src="hefa-store/img/single/similar/3.png"
                class="figure-img img-fluid"
              />
              <figcaption class="figure-caption">
                <div class="row">
                  <div class="col">
                    <h4>Anne Mortgery</h4>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          <div class="col-md-4 col-sm-6">
            <figure class="figure">
              <img
                src="hefa-store/img/single/similar/1.png"
                class="figure-img img-fluid"
              />
              <figcaption class="figure-caption">
                <div class="row">
                  <div class="col">
                    <h4>Anne Mortgery</h4>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <!-- Akhir Similar Product -->

  </div>
</template>

<script>
import Navbar from "../components/layouts/Navbar.vue"


export default {
  name:'Designer',
  components:{
    Navbar
  }
}
</script>