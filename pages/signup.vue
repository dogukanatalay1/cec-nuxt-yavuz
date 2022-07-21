<template>
  <div class="d-flex flex-row">
    <div class="signup">
      <div class="form-group">
        <label class="form-label" for="first">What is your name?</label>
        <input id="first" class="form-input" type="text" @click="denemefunc">
      </div>
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

.form-group {
  position: relative;

  & + .form-group {
    margin-top: 30px;
  }
}

.form-label {
  position: absolute;
  left: 0;
  top: 10px;
  color: #999;
  background-color: #fff;
  z-index: 10;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
}

.focused .form-label {
  transform: translateY(-125%);
  font-size: 0.75em;
}

.form-input {
  position: relative;
  padding: 12px 0px 5px 0;
  width: 100%;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 0 0 #e5e5e5;
  transition: box-shadow 150ms ease-out;

  &:focus {
    box-shadow: 0 2px 0 0 blue;
  }
}

.form-input.filled {
  box-shadow: 0 2px 0 0 lightgreen;
}

.signup {
  width: 50%;
  background-color: red;
  height: 100vh;
}

.picture {
  height: 100vh;
  width: 50%;
  background-image: url('assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
