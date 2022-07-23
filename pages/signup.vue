<template>
  <div class="d-flex flex-row">
    <div class="signup d-flex flex-column justify-content-center align-items-center">

      <div class="mb-5 text-center">
        <h2 class="mb-2">Kayıt Ol</h2>
        <p>Aşağıdaki formu doldurarak sen de KTU CEC ailesine katılabilirsin!</p>
      </div>

      <form action="" class="signup-form">

        <div class="row">

          <div class="user-box">
            <input type="text" name="" required="">
            <label>Ad</label>
          </div>

          <div class="user-box">
            <input type="text" name="" required="">
            <label>Soyad</label>
          </div>

        </div>

        <div class="row">

          <div class="user-box">
            <!--INPUT TYPE EMAİL VERİNCE VE İNPUTA EMAİL YAZMAYINCA CSS BOZULUYOR-->
            <input type="text" name="" required="">
            <label>
              <ion-icon name="mail-outline"></ion-icon>E-mail
            </label>
          </div>

          <div class="user-box">
            <input type="number" name="" required="">
            <label>
              <ion-icon name="call-outline"></ion-icon>Telefon Numarası
            </label>
          </div>

        </div>

        <div class="row">

          <div class="user-box">
            <input type="text" name="" required="">
            <label>
              <ion-icon name="school-outline"></ion-icon>Bölüm
            </label>
          </div>

          <div class="user-box">
            <input type="number" name="" required="">
            <label>Okul Numarası</label>
          </div>

        </div>

        <div class="row">

          <div class="user-box">
            <input type="password" name="" required="">
            <label>
              <ion-icon name="lock-closed-outline"></ion-icon>Şifre
            </label>
          </div>


          <div class="user-box">
            <input type="password" name="" required="true">
            <label>
              <ion-icon name="lock-closed-outline"></ion-icon>Şifreyi Doğrula
            </label>
          </div>

        </div>

        <div class="row">

          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <button type="submit" class="btn btn-danger">Kayıt Ol</button>

        </div>

      </form>

    </div>

    <div class="picture" />
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

.user-box {
  margin: 0 10px;
  position: relative;

  & input {
    width: 100%;
    padding: 14px 0;
    font-size: 16px;
    margin-bottom: 30px;
    border: 1.6px solid black;
    outline: none;
    padding-left: 7px;
    border-radius: 8px;
    transition: .4s ease all;

    &:focus~label,
    &:valid~label {
      top: -26px;
      left: 2px;
      color: red;
      background-color: white;
      font-size: 12px;
    }

    &:focus,
    &:valid {
      border: 1.6px solid red;
    }

    &:focus~label>ion-icon,
    &:valid~label>ion-icon {
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
    transition: .5s ease all;
    padding: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

ion-icon {
  margin-right: 4px;
  transition: .4s ease-out all;
}

.signup {
  width: 50%;
  height: 100vh;

  &-form {
    display: flex;
    flex-direction: column;

    .row {
      display: flex;
      justify-content: space-between;
    }
  }
}

.picture {
  height: 100vh;
  width: 50%;
  background-image: url('assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
