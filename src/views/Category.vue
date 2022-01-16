<template>
  <div class="category">
    <!-- Similar Product -->
    <section class="similar-product">
      <div class="container">
        <div class="row mb-3">
          <div class="col">
            <h3>Category</h3>
            <p>Miliki Pakaian dengan kategory terbaik</p>
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
                    <h4>Category 1</h4>
                    <p>200 items</p>
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
                    <h4>Category 2</h4>
                    <p>100 items</p>
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
                    <h4>Category 3</h4>
                    <p>500 items</p>
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
                    <h4>Category 4</h4>
                    <p>1500 items</p>
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
                    <h4>Category 5</h4>
                    <p>550 items</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <!-- Akhir Similar Product -->

    <!-- Include Component Designer -->
    <Designer />
    <!-- End Include Component Designer -->
  </div>
</template>
<script>
import Designer from "../components/layouts/Designer.vue";
export default {
  components: { Designer },
  name: "Category",
};
</script>

<style>
</style>
