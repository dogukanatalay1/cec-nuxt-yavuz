<template>
  <div class="book" @click="changeIsClicked">
    <div class="book-inner d-flex">
      <div class="book-inner-icon">
        <ion-icon v-if="!isClicked" name="chevron-forward-outline" />
        <ion-icon v-else name="chevron-down-outline" />
      </div>
      <p class="book-inner-title">
        {{ book.title }}
      </p>
    </div>
    <div v-if="isClicked" class="book-wrapper">
      <div class="book-wrapper-author mb-2">
        <span class="black"> Yazar: </span>{{ book.author }}
      </div>
      <div class="book-wrapper-content">
        <span class="black">İçerik:</span> {{ book.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isClicked: false
    }
  },
  methods: {
    changeIsClicked () {
      this.isClicked = !this.isClicked
      // console.log(this.isClicked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/main.scss';

.book {
  margin: 10px 0;
  padding: 20px 5px;
  transition: 0.5s ease all;
  cursor: pointer;
  // background-color: $red;
  background-color: #c81d11;
  border-radius: 10px;
  transition: 0.4s;

  &-inner-title {
    color: #fff;
  }

  &:hover {
    padding: 20px 5px;
    transition: 0.4s;
    transform: scale(1.03);
  }

  &-inner-icon {
    color: #fff;
  }

  &:hover .book-inner-icon {
    color: #fff;
    // transform: rotate(90deg);
  }

  &:hover .book-inner-title {
    color: #fff;
  }

  &-inner-icon {
    transition: 0.5s ease all;
    font-size: 20px;
    margin-right: 7px;
  }

  &-inner-title {
    transition: 0.5s ease all;
  }

  &-wrapper {
    animation-name: usttengel;
    animation-duration: 1s;

    &-author,
    &-content {
      font-size: 14px;
      color: #fff;
    }
  }
}

@keyframes usttengel {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
}

.black {
  color: black;
  font-size: 16px;
}
</style>
