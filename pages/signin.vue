<template>
  <div class="container-fluid vh-100">
    <div class="d-flex flex-column">
      <div class="container-fluid flex-column mt-5 confirmPage">
        <div class="d-flex justify-content-center mt-5 py-5">
          <div
            class="signIn brd-rounded d-flex flex-column justify-content-center bg-white shadow"
          >
            <div class="mx-auto my-auto">
              <form @submit.prevent="userLogin">
                <h1>Sign In</h1>
                <div class="d-flex flex-column">
                  <div class="d-flex flex-column mt-3">
                    <label for="username">Username</label>
                    <input
                      id="username"
                      v-model="username"
                      type="text"
                      required
                    >
                  </div>
                  <div class="d-flex flex-column mt-3">
                    <label for="password">Password</label>
                    <input
                      id="password"
                      v-model="password"
                      type="text"
                      required
                    >
                  </div>
                  <button class="btn btn-primary mt-3" type="submit">
                    Sign In
                  </button>
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
  name: 'SignIn',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: #1a202c;
}
.signIn {
  padding: 5%;
  border-radius: 15px;
}
</style>
