<template>
  <div class="d-flex flex-row">
    <nuxt-link to="/">
      <img class="login-logo" src="~/assets/images/cec-icon.png" alt="">
    </nuxt-link>
    <div
      class="signup d-flex flex-column justify-content-center align-items-center"
    >
      <div class="mb-5 text-center">
        <h2 class="mb-2 signup-header">
          Kayıt Ol
        </h2>
        <p class="signup-text">
          Aşağıdaki formu doldurarak sen de KTU CEC ailesine katılabilirsin!
        </p>
      </div>

      <form action="" class="signup-form" @submit.prevent="register">
        <div class="row">
          <div class="user-box">
            <input
              v-model="firstName"
              type="text"
              name="firstName"
              required=""
            >
            <label> <ion-icon name="person-outline" />Ad </label>
          </div>

          <div class="user-box">
            <input v-model="lastName" type="text" name="" required="">
            <label> <ion-icon name="person-outline" />Soyad </label>
          </div>
        </div>

        <div class="row">
          <div class="user-box">
            <!--!!!! INPUT TYPE EMAİL VERİNCE VE İNPUTA EMAİL YAZMAYINCA CSS BOZULUYOR-->
            <input v-model="email" type="text" name="" required="">
            <label> <ion-icon name="mail-outline" />E-mail </label>
          </div>

          <div class="user-box">
            <input v-model="phone" type="text" name="" required="">
            <label> <ion-icon name="call-outline" />Telefon Numarası </label>
          </div>
        </div>

        <div class="row">
          <div class="user-box">
            <input v-model="department" type="text" name="" required="">
            <label> <ion-icon name="school-outline" />Bölüm </label>
          </div>

          <div class="user-box">
            <input v-model="school_number" type="text" name="" required="">
            <label> <ion-icon name="school-outline" />Okul Numarası </label>
          </div>
        </div>

        <div class="row d-flex justify-content-between">
          <div class="user-box">
            <input v-model="password1" type="password" name="" required="">
            <label> <ion-icon name="lock-closed-outline" />Şifre </label>
          </div>

          <div class="user-box">
            <input
              v-model="password2"
              type="password"
              name=""
              required="true"
            >
            <label>
              <ion-icon name="lock-closed-outline" />Şifreyi Doğrula
            </label>
          </div>
        </div>

        <div class="row d-flex justify-content-between align-items-center">
          <div class="user-box">
            <input v-model="grade" type="text" name="" required="">
            <label> <ion-icon name="school-outline" />Sınıf </label>
          </div>

          <div class="user-box d-flex flex-column">
            <button type="submit" class="btn btn-danger">
              Kayıt Ol
            </button>
            <span class="signup-text">Hesabın var mı?
              <nuxt-link to="/signin" style="" class=""> Giriş yap! </nuxt-link>
            </span>
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
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      grade: '',
      school_number: '',
      password1: '',
      password2: ''
    }
  },
  methods: {
    async register () {
      try {
        await this.$axios.post('accounts/create/', {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          phone: this.phone,
          department: this.department,
          grade: this.grade,
          school_number: this.school_number,
          password1: this.password1,
          password2: this.password2
        })

        await this.$auth
          .loginWith('local', {
            data: {
              email: this.email,
              password: this.password1
            }
          })
          .then(() => this.$router.push('/'))
          .then(console.log(this.$auth.loggedIn))
      } catch (error) {
        window.console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

.picture {
  display: block;
  width: 50%;
  background-image: url('assets/images/hero1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  @media screen and (max-width: 750px) {
    display: none;
  }
}

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
    background-color: transparent;
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1.6px solid black;
    outline: none;
    padding-left: 7px;
    transition: 0.4s ease all;

    @media screen and (max-width: 750px) {
      border-color: white;
      color: white;
    }

    &:focus ~ label,
    &:valid ~ label {
      top: -26px;
      left: 0px;
      margin-left: 0;
      color: red;
      background-color: transparent;
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
  min-height: 100vh;

  @media screen and(max-width:980px) {
    padding-top: 100px;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
    background-image: linear-gradient(
        to bottom,
        rgba(51, 14, 11, 0.8),
        rgba(51, 14, 11, 0.9)
      ),
      url('assets/images/hero1.jpg');
    background-size: cover;
  }

  &-header,
  &-text {
    @media screen and (max-width: 750px) {
      color: white;
    }
  }

  &-form {
    .row {
      flex-direction: row;

      @media screen and (max-width: 980px) {
        flex-direction: column;
      }
    }
  }
}
</style>
