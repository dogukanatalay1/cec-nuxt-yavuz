<template>
  <footer id="footer" class="footer_2">
    <div class="container">
      <div class="footer_top">
        <div class="row pb-5">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="footer_single_col footer_intro">
              <div class="cecicon-container d-flex align-items-center justify-content-center">
                <img src="@/assets/images/cec(1).png" alt="" class="f_logo">
              </div>
              <p>
                Ante amet vitae vulputate odio nulla vel pretium pulvinar
                aenean. Rhoncus eget adipiscing etiam arcu. Ultricies justo
                ipsum nec amet.
              </p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-2">
            <div class="footer_single_col">
              <h3>Hızlı Linkler</h3>
              <ul class="location_info quick_inf0">
                <li>
                  <nuxt-link to="/about">
                    Hakkımızda
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/events">
                    Etkinlikler
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/books">
                    Kitaplar
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/signup">
                    Kayıt Ol
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="footer_single_col contact">
              <h3>Contact Us</h3>
              <p>Ante amet vitae vulputate odio nulla vel pretium aenean.</p>
              <div class="contact_info">
                <span>555 555 55 55 </span>
                <span class="email">cec@ktu.edu.tr</span>
              </div>
              <ul class="social_items d-flex list-unstyled">
                <li>
                  <a href="#" class="icon">
                    <fa :icon="['fab', 'facebook']" />
                  </a>
                </li>
                <li>
                  <a href="#" class="icon">
                    <fa :icon="['fab', 'twitter']" />
                  </a>
                </li>
                <li>
                  <a href="#" class="icon">
                    <fa :icon="['fab', 'linkedin']" />
                  </a>
                </li>
                <li>
                  <a href="#" class="icon">

                    <fa :icon="['fab', 'instagram']" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shapes_bg">
      <img src="@/assets/images/bg2.png" style="width: 1270px" alt="" class="shape_3">
      <img src="@/assets/images/footer_2.png" alt="" class="shape_1">
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

.footer_single_col {
  padding: 0 !important;
}

.footer_2 {
  background-color: $about-black  !important;
}

.cecicon-container {
  height: 100px;
}

.f_logo {
  width: 100px;
  height: 100px !important;
}

.red-span {
  color: $red;
}

.row {
  display: flex !important;
  padding: 0 100px;
  justify-content: space-around !important;
  flex-direction: row !important;
  text-align: center;
}

.icon {
  font-size: 32px !important;
  color: #fff;
}

.social_items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & li {
    margin-left: 0;
  }
}


ul li {
  margin-left: -14px;
  transition: 0.2s ease-in-out all;

  &:hover {
    transform: scale(1.1);
  }
}

ul li a:hover {
  color: #aaa !important;
}

ul li a::before {
  display: none;
}
</style>
