<template>
  <div class="books">
    <h3 class="books-header mb-5 mt-2">
      Kulübümüzde Bulunan Kitaplar
    </h3>
    <input id="" v-model="bookName" name="bookName" type="text">
    <BooksBook v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BookList',
  data () {
    return {
      books: [],
      bookName: ''
    }
  },
  watch: {
    bookName () {
      axios
        .get(
          `https://ktucectest.herokuapp.com/api/books/?search=${this.bookName}`
        )
        .then((response) => {
          this.books = response.data
          // console.log(response)
        })
    }
  },
  created () {
    this.getBooks()
  },
  methods: {
    getBooks () {
      this.$API.books.getBooks().then((response) => {
        this.books = response.data
        // console.log(response)
      })
    }
    // getBooks () {
    //   axios.get('https://ktucectest.herokuapp.com/api/books/')
    //     .then((response) => {
    //       this.books = response.data.books
    //     })
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/main.scss';

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 5px;
  transition: 0.4s ease-in-out all;

  &:hover {
    background-color: #777;
  }
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

.books {
  margin: 20px;
  width: 32%;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: $about-black;
  max-height: 70vh;
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  &-header {
    text-align: center;
    color: #fff;
  }
}
</style>
