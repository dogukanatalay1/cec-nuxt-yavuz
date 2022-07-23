<template>
  <div class="d-flex flex-row">
    <div class="login flex-item flex-column">
      <img class="login-logo" src="~/assets/images/cec-icon.png" alt="">

      <form class="login-form flex-item flex-column">
        <h2 class="login-header mb-5">
          Giriş Yap
        </h2>

        <div class="login-form-group my-3">
          <ion-icon name="person-circle-outline" />
          <input id="email" type="email" required>
          <label>E-mail</label>
        </div>

        <div class="login-form-group my-3">
          <ion-icon name="lock-closed-outline" />
          <input id="password" type="password" required>
          <label>Password</label>
        </div>

        <div class="flex-item justify-content-between buttons my-3">
          <button type="submit" class="btn btn-danger">
            Giriş Yap
          </button>
          <span>Hesabın Yok mu? <nuxt-link to="/signup">Kayıt Ol</nuxt-link></span>
        </div>
      </form>
    </div>

    <div class="picture" />
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

input {
  background-color: transparent;
  border: none;
  width: 100%;
  border: 1.6px solid #6a7a83;
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-left: 10px;
  transition: 0.4s ease all;

  &:focus,
  &:valid {
    outline: none;
    border: 1.6px solid $red;
    border-left: none;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: -26px;
    color: red;
    background-color: white;
    font-size: 12px;
  }

  //removing background color in autofill
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px white inset !important;
  }
}

label {
  position: absolute;
  top: 0;
  margin-top: 12px;
  margin-left: 50px;
  font-size: 16px;
  color: red;
  pointer-events: none;
  transition: 0.5s ease all;
  padding: 0 4px;
}

a {
  color: $red;

  &:hover {
    color: darken($red, 8%);
  }
}

.login {
  height: 100vh;
  width: 50%;
  position: relative;

  &-logo {
    width: 180px;
    position: absolute;
    top: 10px;
    left: 30px;
  }

  &-form {
    width: 60%;
    background: white;

    &-group {
      width: 80%;
      display: flex;
      position: relative;
    }

    .buttons {
      width: 80%;
    }
  }
}

.flex-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-icon {
  font-size: 30px;
  padding: 8px;
  background-color: $red;
  color: white;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid $red;
}

.picture {
  height: 100vh;
  width: 50%;
  background-image: url('assets/images/hero1.JPG');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
