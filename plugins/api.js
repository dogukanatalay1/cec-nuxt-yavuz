import Account from '~/client/account'
import Events from '~/client/events'
import Books from '~/client/books'

export default (context, inject) => {
  const factories = {
    account: Account(context.$axios),
    events: Events(context.$axios),
    books: Books(context.$axios)
  }

  // Inject $API
  inject('API', factories)
}
