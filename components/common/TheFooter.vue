<template>
  <footer class="footer_2">
    <div class="container">
      <div class="footer_top">
        <div class="row pb-5">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="footer_single_col footer_intro">
              <img src="@/assets/images/cec-icon.png" alt="" class="f_logo">
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
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">Etkinlikler</a></li>
                <li><a href="#">Kitaplar</a></li>
                <li><a href="#">Kayıt Ol</a></li>
              </ul>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="footer_single_col contact">
              <h3>Contact Us</h3>
              <p>Ante amet vitae vulputate odio nulla vel pretium aenean.</p>
              <div class="contact_info">
                <span>+000 124 325</span>
                <span class="email">cec@ktu.edu.tr</span>
              </div>
              <ul class="social_items d-flex list-unstyled">
                <li>
                  <a href="#" class="icon">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon">
                    <ion-icon  name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon">
                    <ion-icon  name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" class="icon">
                    <ion-icon  name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shapes_bg">
      <img src="@/assets/images/bg2.png" alt="" class="shape_3">
      <img src="@/assets/images/footer_2.png" alt="" class="shape_1">
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

.row{
  display: flex !important;
  padding: 0 100px; 
  flex-direction: row !important;
  justify-content: space-around !important;

}

.icon{
  font-size: 32px !important;
  color: #fff;

}

ul li{
  transition: .2s ease-in-out all;
    &:hover{
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
