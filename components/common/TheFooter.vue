<template>
  <footer>
    <div class="container">
      <div class="layer-1 d-flex my-4">
        <div class="logo">
          <img
            class="logo-img mb-4"
            src="~/assets/images/cec-icon.png"
            alt=""
          >
          <p class="logo-content">
            KTÜ Bilgisayar Mühendisliği Bölümü, Kanuni Kampüsü, 61080, Trabzon
          </p>
        </div>

        <div class="content-menu">
          <h5 class="content-menu-header">
            Hakkımızda
          </h5>
          <hr>
          <div class="content-menu-links d-flex">
            <a href="">Referanslar</a>
            <a href="">Etkinlikler</a>
            <a href="">Projeler</a>
            <a href="">Biz Kimiz?</a>
          </div>
        </div>

        <div class="content-menu">
          <h5 class="content-menu-header">
            İletişim
          </h5>
          <hr>
          <div class="content-menu-links d-flex">
            <span>Telefon: <a href="">0555 555 55 55</a> </span>
            <span>E-mail: <a href="">cec@example.com</a></span>
            <span>Çalışma Saatleri: 08:00 - 17:00</span>
          </div>
        </div>

        <div class="content-menu">
          <div class="content-menu-links d-flex">
            <nuxt-link to="signup" class="login-button mb-3" href="">
              Kayıt ol / Giriş Yap
            </nuxt-link>
            <a class="contact-button" href="">Bizimle İletişime Geçin</a>
          </div>
        </div>
      </div>
      <hr>
      <div class="layer-2">
        sponsorlar
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

hr {
  color: $about-black;
}

footer {
  padding: 40px 0;
  background: linear-gradient(
    to left bottom,
    darken($red, 30%),
    darken($red, 17%)
  );
  background-image: url('assets/images/waves.png');
  color: $about-black;
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 0;
  border-top-left-radius: 120px;

  .layer-1 {
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    .logo {
      max-width: 30%;

      &-img {
        transition: 0.4s ease all;
        filter: drop-shadow(0 0 15px darken($about-black, 50%));

        &:hover {
          transform: scale(1.05);
        }
      }

      &-content {
        text-align: center;
      }
    }

    .content-menu {
      &-header {
        color: $white;
      }

      &-links {
        flex-direction: column;

        a {
          transition: 0.5s ease all;
          text-decoration: none;
          color: $about-black;

          &:hover {
            color: darken($white, 15%);
          }
        }

        .login-button {
          border: 1px solid $white;
          color: white;
          padding: 12px 16px;
          border-radius: 8px;

          &:hover {
            background: $white;
            color: darken($red, 25%);
          }
        }

        .contact-button {
        }
      }
    }
  }

  .layer-2 {
  }
}
</style>
