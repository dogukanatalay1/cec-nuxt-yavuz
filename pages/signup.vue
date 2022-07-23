<template>
  <div class="d-flex flex-row">
    <img class="login-logo" src="~/assets/images/cec-icon.png" alt="">
    <div
      class="signup d-flex flex-column justify-content-center align-items-center"
    >
      <div class="mb-5 text-center">
        <h2 class="mb-2">
          Kayıt Ol
        </h2>
        <p>
          Aşağıdaki formu doldurarak sen de KTU CEC ailesine katılabilirsin!
        </p>
      </div>

      <form action="" class="signup-form">
        <div class="row">
          <div class="user-box">
            <input type="text" name="" required="">
            <label> <ion-icon name="person-outline" />Ad </label>
          </div>

          <div class="user-box">
            <input type="text" name="" required="">
            <label> <ion-icon name="person-outline" />Soyad </label>
          </div>
        </div>

        <div class="row">
          <div class="user-box">
            <!--INPUT TYPE EMAİL VERİNCE VE İNPUTA EMAİL YAZMAYINCA CSS BOZULUYOR-->
            <input type="text" name="" required="">
            <label> <ion-icon name="mail-outline" />E-mail </label>
          </div>

          <div class="user-box">
            <input type="number" name="" required="">
            <label> <ion-icon name="call-outline" />Telefon Numarası </label>
          </div>
        </div>

        <div class="row">
          <div class="user-box">
            <input type="text" name="" required="">
            <label> <ion-icon name="school-outline" />Bölüm </label>
          </div>

          <div class="user-box">
            <input type="number" name="" required="">
            <label> <ion-icon name="school-outline" />Okul Numarası </label>
          </div>
        </div>

        <div class="row d-flex justify-content-between">
          <div class="user-box">
            <input type="password" name="" required="">
            <label> <ion-icon name="lock-closed-outline" />Şifre </label>
          </div>

          <div class="user-box">
            <input type="password" name="" required="true">
            <label>
              <ion-icon name="lock-closed-outline" />Şifreyi Doğrula
            </label>
          </div>
        </div>

        <div class="row d-flex justify-content-between align-items-center">
          <div class="user-box">
            <input type="number" name="" required="">
            <label> <ion-icon name="school-outline" />Sınıf </label>
          </div>

          <div class="user-box d-flex flex-column">
            <button type="submit" class="btn btn-danger">
              Kayıt Ol
            </button>
            <span>Hesabın var mı?
              <nuxt-link to="/signin" style="" class="">
                Giriş yap!
              </nuxt-link></span>
          </div>
        </div>
      </form>
    </div>

    <div class="picture" />
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

a {
  color: $red;

  &:hover {
    color: darken($red, 8%);
  }
}

.login-logo {
  width: 180px;
  position: absolute;
  top: 10px;
  left: 30px;
}

button {
  margin-bottom: 16px;
}

.user-box {
  position: relative;
  margin: 0 8px;

  & input {
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1.6px solid black;
    outline: none;
    padding-left: 7px;
    transition: 0.4s ease all;

    &:focus ~ label,
    &:valid ~ label {
      top: -26px;
      left: 0px;
      margin-left: 0;
      color: red;
      background-color: white;
      font-size: 12px;
    }

    &:focus,
    &:valid {
      border-bottom-color: red;
    }

    &:focus ~ label > ion-icon,
    &:valid ~ label > ion-icon {
      font-size: 0px;
    }
  }

  & label {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 14px;
    margin-left: 8px;
    font-size: 16px;
    color: red;
    pointer-events: none;
    transition: 0.5s ease all;
    padding: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

ion-icon {
  margin-right: 4px;
  transition: 0.4s ease-out all;
}

.signup {
  width: 50%;
  height: 100vh;

  &-form {
    display: flex;
    flex-direction: column;
  }
}

.picture {
  height: 100vh;
  width: 50%;
  background-image: url('assets/images/hero1.JPG');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
