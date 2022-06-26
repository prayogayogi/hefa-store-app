<template>
  <div class="not-found">
    <div class="container cart-header">
      <div class="row mt-5 text-center">
        <div class="col">
          <h3>Not Found</h3>
          <p>Pastikan Link Yang Anda Tuju Benar</p>
          <img
            class="img-fluid"
            src="https://cdn.dribbble.com/users/992274/screenshots/7392790/media/95483df50a0a3324c4cf9ccb1094b825.jpg"
            alt="Not Found"
          />
        </div>
      </div>
      <div class="row">
        <div class="col text-center mb-4">
          <router-link to="/" class="btn btn-md-primary">Back Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
img {
  margin-bottom: 30px;
  margin-top: -20px;
}

.btn-md-primary {
  background-color: #1b2690;
  color: rgb(248, 248, 248);
}

.btn-md-primary:hover {
  background-color: rgb(248, 248, 248);
  color: #1b2690;
  border: 1px solid #1b2690;
  box-shadow: #1b2690 2px 2px 2px 1px;
}
</style>
