<template>
  <div class="hero">
    <div class="hero-content">
      <h1>KTU CEC'e hoşgeldiniz</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias beatae culpa, distinctio dolorum doloremque
        quod!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
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
  z-index: -2;
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    text-align: center;
    width: 100%;
    overflow: hidden;
    max-width: 700px;
    @media screen and(max-width:974px){
      margin-top: 200px;
    }

    & h1,
    & p {
      color: $white;
      text-transform: uppercase;
      transform: translateX(-100%);
      font-family: 'Poppins', sans-serif;
    }

    & h1 {
      margin-bottom: 20px;
      font-size: 50px;
      animation: 1.4s slide-right .8s forwards;
    }

    & p {
      line-height: 1.73;
      font-size: 18px;
      animation: 1.4s slide-right 1.1s forwards;
    }
  }

  @keyframes slide-right {
    to {
      transform: translateX(0);
    }
  }
}
</style>
