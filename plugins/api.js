import Events from '~/client/events'
import Books from '~/client/books'

export default (context, inject) => {
  const factories = {
    events: Events(context.$axios),
    books: Books(context.$axios)
  }

  // Inject $API
  inject('API', factories)
}
