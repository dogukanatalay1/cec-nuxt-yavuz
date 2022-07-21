<template>
  <div class="d-flex flex-row">
    <div class="signup">
      <div class="form-group">
        <label class="form-label" for="first">What is your name?</label>
        <input @click="denemefunc" id="first" class="form-input" type="text" />
      </div>
    </div>

    <div class="picture">

    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {

    }
  },
  methods: {
    denemefunc() {
      document.querySelector('input').focus(function () {
        document.querySelector(this).parents('.form-group').classList.add('focused');
      });

      document.querySelector('input').blur(function () {
        var inputValue = document.querySelector(this).value;
        if (inputValue == "") {
          document.querySelector(this).classList.remove('filled');
          document.querySelector(this).parents('.form-group').classList.remove('focused');
        } else {
          document.querySelector(this).classList.add('filled');
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/colors.scss';

.form-group {
  position: relative;

  &+.form-group {
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
  font-size: .75em;
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
