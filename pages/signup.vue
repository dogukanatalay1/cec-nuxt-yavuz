<template>
  <div class="container-fluid vh-100">
    <div class="d-flex flex-column">
      <div class="container-fluid flex-column mt-5 confirmPage">
        <div class="d-flex justify-content-center mt-5 py-5">
          <div
            class="signUp brd-rounded d-flex flex-column justify-content-center bg-white shadow"
          >
            <div class="mx-auto my-auto">
              <form @submit.prevent="register">
                <h1>Kayıt Ol</h1>
                <div class="d-flex flex-row">
                  <div class="d-flex flex-column">
                    <div class="d-flex flex-column mt-3 mr-5">
                      <label for="bio"> Hakkımda </label>
                      <input v-model="bio" type="text">
                    </div>
                    <div class="d-flex flex-column mt-3">
                      <label for="email">Email</label>
                      <input id="email" v-model="email" type="text">
                    </div>
                    <!-- <div class="d-flex flex-column mt-3">
                      <label for="username">Kullanıcı Adı</label>
                      <input id="username" v-model="username" type="text">
                    </div> -->
                    <div class="d-flex flex-column mt-3">
                      <label for="password">Şifre</label>
                      <input id="password1" v-model="password1" type="text">
                      <label for="password">Şifreyi Tekrarla</label>
                      <input id="password2" v-model="password2" type="text">
                    </div>
                    <button class="btn btn-primary mt-3" type="submit">
                      Kayıt Ol
                    </button>
                  </div>

                  <div class="d-flex flex-column mt-3">
                    <label for="first_name">İsim</label>
                    <input id="first_name" v-model="first_name" type="text">
                    <label for="last_name">Soyisim</label>
                    <input id="last_name" v-model="last_name" type="text">

                    <div class="d-flex flex-column mt-3">
                      <label for="phone">Telefon Numarası (10 haneli)</label>
                      <input id="phone" v-model="phone" type="text">
                      <label for="department">Bölümünüz</label>
                      <input id="department" v-model="departmand" type="text">
                    </div>
                  </div>
                  <div class="d-flex flex-column mt-3">
                    <label for="grade">Sınıfınız</label>
                    <!-- <input id="grade" v-model="grade" type="text"> -->
                    <select id="grade" v-model="grade" name="grade">
                      <option value="1">
                        1
                      </option>
                      <option value="2">
                        2
                      </option>
                      <option value="3">
                        3
                      </option>
                      <option value="4">
                        4
                      </option>
                      <option value="5">
                        5
                      </option>
                      <option value="6">
                        6
                      </option>
                    </select>
                  </div>
                  <div>
                    <label for="school_number">Okul Numaran</label>
                    <input
                      id="school_number"
                      v-model="school_number"
                      type="text"
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: #1a202c;
}
.signUp {
  padding: 5%;
  border-radius: 15px;
}

input {
  width: 200px;
}
</style>
