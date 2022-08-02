<template>
  <div class="container mx-auto">
    <div class="booklist">
      <div class="booklist-content">
        <h1>KTÜ CEC Kütüphanesinden kitap alın</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos
          quisquam voluptatum consequuntur, obcaecati doloribus, distinctio eos,
          earum deleniti ipsa molestiae fuga dignissimos iure quidem eaque vel
          voluptates ratione quod?
        </p>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          reprehenderit sunt voluptatibus, impedit sit nobis rem optio illo eum?
          Repudiandae odio unde adipisci. Voluptates, suscipit exercitationem?
          Suscipit reprehenderit vero iste ratione, autem quas modi, consequatur
          vel dolore unde, nam sequi!
        </p>
        <h3>Lorem, ipsum dolor.</h3>
        <ul>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sapiente
          illum cupiditate! Ab facere provident natus, consequuntur et quae
          repudiandae distinctio expedita sequi culpa beatae pariatur, eaque
          veritatis ipsa tempore nisi? Quaerat nobis sunt atque provident
          voluptate modi, doloribus quisquam ad a reprehenderit quidem saepe
          expedita cupiditate quis? Quae, dolore.
        </p>
      </div>
      <div class="books">
        <h3 class="books-header mb-5 mt-2">
          Kulübümüzde Bulunan Kitaplar
        </h3>
        <div class="books-search">
          <ion-icon name="search-outline" /><input
            v-model="bookName"
            class="ml-2"
            name="bookName"
            type="text"
            placeholder="Kitap Arayın"
          >
        </div>
        <BooksBook v-for="book in books" :key="book.id" :book="book" />
      </div>
    </div>
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

ion-icon {
  margin-left: 10px;
}

h1,
h2,
h3 {
  font-weight: bold !important;
}

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

.container {
  width: 94%;
}

.booklist {
  margin: 70px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
  }

  &-content {
    width: 65%;
    min-height: 100vh;
    padding: 0 30px;

    @media screen and (max-width: 750px) {
      width: 100%;
      padding: 0;
    }
  }

  .books {
    margin: 0 20px;
    width: 35%;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: $about-black;
    max-height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;

    @media screen and (max-width: 750px) {
      width: 100%;
      margin: 0;
      margin-bottom: 70px;
    }

    &-search {
      border-radius: 5px;
      border: 1px solid red;
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      align-items: center;
      background-color: white;

      & input {
        border: none;
        border-radius: inherit;
        width: 95%;
        background-color: white;

        &:focus,
        &:valid {
          outline: none;
        }

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          transition: background-color 10000s;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }

    &-header {
      text-align: center;
      color: #fff;
    }
  }
}
</style>
