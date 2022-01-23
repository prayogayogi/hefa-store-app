<template>
  <div class="single-product">
    <!-- Include Components Navbar -->
    <Navbar />
    <!-- End Include Components Navbar -->

    <!-- Breadcrumbs -->
    <div class="container mt-5">
      <nav>
        <ol class="breadcrumb bg-transparent pl-0">
          <li class="breadcrumb-item"><a href="#">Category</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Single Product
          </li>
        </ol>
      </nav>
    </div>

    <!-- Single Product -->
    <section class="single-product">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <figure class="figure">
              <img
                src="hefa-store/img/single/1.png"
                class="figure-img img-fluid"
              />
              <figcaption
                class="
                  figure-caption
                  product-thumbnail-container
                  d-flex
                  justify-content-between
                "
              >
                <a href="">
                  <img src="hefa-store/img/single/thumbnail/1.png" />
                </a>
                <a href="">
                  <img src="hefa-store/img/single/thumbnail/2.png" />
                </a>
                <a href="">
                  <img src="hefa-store/img/single/thumbnail/3.png" />
                </a>
                <a href="">
                  <img src="hefa-store/img/single/thumbnail/4.png" />
                </a>
              </figcaption>
            </figure>
          </div>

          <div class="col-lg-4">
            <h3>Jeans: Giordano XI</h3>
            <p class="text-muted">IDR 290.000.000</p>
            <button
              type="button"
              class="btn btn-sm"
              style="background-color: #eaeaef; color: white"
            >
              <i class="fas fa-minus-circle"></i>
            </button>
            <span class="mx-2">20</span>
            <button
              type="button"
              class="btn btn-sm btn-success"
              style="color: white"
            >
              <i class="fas fa-plus-circle"></i>
            </button>

            <div class="btn-product">
              <router-link to="/cart" class="btn btn-warning text-white"
                >Add to Cart</router-link
              >
              <a
                href=""
                class="btn"
                style="background-color: #eaeaef; color: #adadad"
                >Add to Wishlist</a
              >
            </div>

            <div class="designed-by">
              <h5>Designed by</h5>
              <div class="row">
                <div class="col-2">
                  <img src="hefa-store/img/single/2.png" />
                </div>
                <div class="col">
                  <h4>Anne Mortgery</h4>
                  <p>14.2K <span>Followers</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Description & Review -->
    <section class="product-description p-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="description-tab"
                  data-toggle="tab"
                  href="#description"
                  role="tab"
                  aria-controls="description"
                  aria-selected="true"
                  >Product Description</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="review-tab"
                  data-toggle="tab"
                  href="#review"
                  role="tab"
                  aria-controls="review"
                  aria-selected="false"
                  >Reviews (20)</a
                >
              </li>
            </ul>
            <div class="tab-content p-3" id="myTabContent">
              <div
                class="tab-pane fade show active product-review"
                id="description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <p>
                  Payday is finally here and you’ve got some extra cash to help
                  you stock up your summer wardrobe. Not sure where to start?
                  ASOS Stylist Beccy Goldsworthy is here with the best of what’s
                  new, from 80s-inspired tracksuits to some seriously fresh
                  trainers. Check out her picks below and watch the video for
                  more.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  nec felis metus. Vivamus eu urna tempor, pretium erat quis,
                  volutpat eros. Cras consectetur dolor at venenatis feugiat.
                  Fusce nunc risus, finibus eget augue ac, ornare gravida
                  turpis. Morbi consequat, nisi sit amet viverra feugiat, lacus
                  mauris ornare erat, at pharetra odio dolor id elit.
                  Pellentesque eu aliquet ex. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div
                class="tab-pane fade product-review"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <div class="row">
                  <div class="col-1 d-none d-md-block">
                    <img src="hefa-store/img/single/review/1.png" />
                  </div>
                  <div class="col">
                    <h5>Joe Mackenzie</h5>
                    <p>
                      Produknya bagus dan bahannya juga rapih cocok untuk kulit
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1 d-none d-md-block">
                    <img src="hefa-store/img/single/review/2.png" />
                  </div>
                  <div class="col">
                    <h5>Brian Smith</h5>
                    <p>
                      Produknya bagus dan bahannya juga rapih cocok untuk kulit
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1 d-none d-md-block">
                    <img src="hefa-store/img/single/review/1.png" />
                  </div>
                  <div class="col">
                    <h5>Joe Mackenzie</h5>
                    <p>
                      Produknya bagus dan bahannya juga rapih cocok untuk kulit
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1 d-none d-md-block">
                    <img src="hefa-store/img/single/review/2.png" />
                  </div>
                  <div class="col">
                    <h5>Brian Smith</h5>
                    <p>
                      Produknya bagus dan bahannya juga rapih cocok untuk kulit
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1 d-none d-md-block">
                    <img src="hefa-store/img/single/review/1.png" />
                  </div>
                  <div class="col">
                    <h5>Joe Mackenzie</h5>
                    <p>
                      Produknya bagus dan bahannya juga rapih cocok untuk kulit
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-1 d-none d-md-block">
                    <img src="hefa-store/img/single/review/2.png" />
                  </div>
                  <div class="col">
                    <h5>Brian Smith</h5>
                    <p>
                      Produknya bagus dan bahannya juga rapih cocok untuk kulit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Akhir Product Description & Review -->

    <!-- Start import Component Similar Product -->
    <Similar-product />
    <!-- End import Component Similar Product -->
  </div>
</template>

<script>
import SimilarProduct from "../components/layouts/SimilarProduct.vue";
import Navbar from "../components/layouts/Navbar.vue";

export default {
  components: {
    Navbar,
    SimilarProduct,
  },
  name: "SingelProduct",
};
</script>