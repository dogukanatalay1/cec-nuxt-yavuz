<template>
  <div class="hero">
    <nav>
      <h2 class="logo">
        <a class="logo-icon" href="#">KTU <span>CEC</span></a>
      </h2>
      <ul>
        <li><a class="menu-btn" href="#">Anasayfa</a></li>
        <li><a class="menu-btn" href="#">Hakkımızda</a></li>
        <li><a class="menu-btn" href="#">Etkinlikler</a></li>
        <li><a class="menu-btn" href="#">Kitaplar</a></li>
        <li><a class="menu-btn" href="#">İletişim</a></li>
      </ul>
      <nuxt-link class="login-btn" to="/signin">
        Kayıt Ol
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/colors.scss';
.hero {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 1.3), rgba(0, 0, 0, 0.2)),
    url('@/assets/images/hero1.jpg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
nav {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-left: 5%;
  padding-right: 7%;
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
  color: white;
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
  color: white;
  font-weight: bold;
  height: 45px;
  border-radius: 30px;
  font-size: 16px;
  transition: 0.4s;
  text-decoration: none;
}
.login-btn:hover {
  transform: scale(1.2);
  transition: 0.4s;
}
</style>
