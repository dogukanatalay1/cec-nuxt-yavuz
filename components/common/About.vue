<template>
  <div>
    <section class="learn_shep">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-5">
            <div class="title">
              <h2>Take The First Step To Learn With Us.</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                esentium voluptatum delenitamus et iusto odio dignissimos
                ducimus qui blanditiis pri atqueint.
              </p>
              <a href="#" title="">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 ml-auto p-0">
            <div class="shep_banner_wrapper">
              <div class="step_single_banner">
                <img
                  src="images/features/features_2_1.jpg"
                  alt=""
                  class="img-fluid"
                >
                <img
                  src="images/features/features_2_2.jpg"
                  alt=""
                  class="img-fluid"
                >
              </div>
              <div class="step_single_banner">
                <img
                  src="images/features/features_2_3.jpg"
                  alt=""
                  class="img-fluid"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Larnign Step -->
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/colors.scss';

.learn_shep {
  padding: 0 0 120px;
  position: relative;
  z-index: 1;
}
.learn_shep .title {
  position: absolute;
  top: 0%;
  left: 0;
  z-index: 1;
  width: 100%;
  text-align: left;
  padding-right: 110px;
  padding-top: 160px;
}
.learn_shep .title h2 {
  color: #333146;
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 40px;
  font-family: 'Poppins', sans-serif;
}
.learn_shep .title p {
  color: #6a7a83;
  margin-bottom: 55px;
  font-weight: 300;
}
.learn_shep .title a {
  background: #ff5a2c;
  font-weight: 500;
  border-radius: 5px;
  color: #ffffff;
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  padding: 0 45px;
  transition: all 0.3s ease-in-out;
}
.learn_shep .title a:hover {
  background: #092ace;
}
.learn_shep .shep_banner_wrapper {
  display: flex;
  align-items: center;
  padding-left: 10%;
}
.learn_shep .shep_banner_wrapper .step_single_banner {
  width: 50%;
}
.learn_shep .shep_banner_wrapper .step_single_banner img {
  width: 100%;
  position: relative;
  z-index: 2;
  padding: 20px;
}
</style>
