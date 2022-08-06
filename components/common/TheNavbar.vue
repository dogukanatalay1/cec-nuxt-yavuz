<template>
  <nav>
    <h2 class="logo">
      <nuxt-link to="/" v-bind:style="{ color: colorChange }" class="logo-icon" href="#">
        KTU <span>CEC</span>
      </nuxt-link>
      <!-- <nuxt-link v-else class="logo-icon" to="/">
        <span style="color: black"> KTU </span><span>CEC</span>
      </nuxt-link> -->
    </h2>
    <div class="nav">
      <ul>
        <li>
          <nuxt-link class="menu-btn" href="#" v-bind:style="{ color: colorChange }" to="/about">
            Hakkımızda
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/events" href="#" class="menu-btn" v-bind:style="{ color: colorChange }">
            Etkinlikler
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/books" href="#" class="menu-btn" v-bind:style="{ color: colorChange }">
            Kitaplar
          </nuxt-link>
        </li>
        <li><a class="menu-btn" href="#footer" v-bind:style="{ color: colorChange }">İletişim</a></li>
      </ul>

      <nuxt-link class="login-btn d-flex justify-content-center" to="/signin">
        <span class="mr-2"> Kayıt Ol </span>
        <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
      </nuxt-link>
    </div>

    <!--MOBILE NAVBAR-->

    <div id="hamburger-icon" @click="toggleMobileMenu()">
      <div class="bar1" />
      <div class="bar2" />
      <div class="bar3" />

      <ul class="mobile-menu">
        <li>
          <nuxt-link class="menu-btn" v-bind:style="{ color: colorChange }" to="/about" href="#">
            Hakkımızda
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/events" v-bind:style="{ color: colorChange }" class="menu-btn" href="#">
            Etkinlikler
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/books" v-bind:style="{ color: colorChange }" class="menu-btn" href="#">
            Kitaplar
          </nuxt-link>
        </li>
        <li><a class="menu-btn" v-bind:style="{ color: colorChange }" href="#footer">İletişim</a></li>

        <nuxt-link v-if="!$auth.loggedIn" class="login-btn d-flex justify-content-center" to="/signin">
          <span style="color: #fff" class="mr-2"> Kayıt Ol </span>
          <ion-icon style="font-size: 22px" name="log-out-outline" />
        </nuxt-link>
        <button v-if="$auth.loggedIn" class="login-btn d-flex justify-content-center" @click="logout()">
          <span style="color: #fff" class="mr-2"> Çıkış Yap </span>
          <ion-icon style="font-size: 22px" name="log-out-outline" />
        </button>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarVue',
  data() {
    return {
      isClicked: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isClicked = !this.isClicked
      const menu = document.querySelector('#hamburger-icon')
      const nav = document.querySelector('nav')
      const mobilemenu = document.querySelector('.mobile-menu')
      nav.classList.toggle('mb')
      menu.classList.toggle('open')

      if (this.isClicked) {
        mobilemenu.style.transform = 'scale(1)'
      } else {
        mobilemenu.style.transform = 'scale(0)'
      }
    },
    logout() {
      this.$auth.logout()
    }
  },
  computed: {
    colorChange() {
      if (this.$nuxt.$route.path === '/') {
        return '#fff'
      }
      else {
        return '#111'
      }
    }
  },
  created() {
    this.deneme
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.mb {
  margin-bottom: 250px;
}

nav {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-left: 5%;
  padding-right: 7%;
  padding-bottom: 30px;
  transition: 0.4s ease all;
}

.logo-icon {
  cursor: pointer;
  text-decoration: none;
  color: white;
}

.logo {
  color: white;
  font-size: 50px;
}

span {
  color: $red;
}

nav ul li {
  list-style-type: none;
  display: inline-block;
  padding: 10px 20px;
}

.menu-btn {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}

.menu-btn:hover {
  color: $red;
}

.login-btn {
  border: none;
  background: $red;
  padding: 12px 30px;
  color: $white;
  font-weight: bold;
  height: 45px;
  border-radius: 30px;
  font-size: 16px;
  transition: 0.4s;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span{
    color: $white;
  }
}

.login-btn:hover {
  transform: scale(1.2);
  transition: 0.4s;
}

#hamburger-icon {
  margin: auto 0;
  display: none;
  cursor: pointer;

  & div {
    width: 35px;
    height: 3px;
    background-color: $red;
    margin: 6px 0;
    transition: 0.4s ease all;
  }
}

.open .bar1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 6px);
  transform: rotate(-45deg) translate(-6px, 6px);
}

.open .bar2 {
  opacity: 0;
}

.open .bar3 {
  -webkit-transform: rotate(45deg) translate(-6px -8px);
  transform: rotate(45deg) translate(-6px, -8px);
}

.open .mobile-menu {}

.mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform: scale(0);
  position: absolute;
  top: 110px;
  left: 0;
  width: 100%;
  z-index: 9999;
  transition: 0.4s ease all;
}

@media screen and (max-width: 975px) {
  .nav {
    display: none;
  }

  #hamburger-icon {
    display: block;
  }
}
</style>
