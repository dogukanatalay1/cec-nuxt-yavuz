import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedEvents: [],
      accounts: [],
      books: []
    },
    mutations: {
      setEvents(state, events) {
        state.fetchedEvents = events
      },
      addEvents(state, event) {
        state.fetchedEvents.push(event)
      },
      updateEvent(state, editedEvent) {
        // window.console.log('Mutations => ' + editedEvent)
        const eventIndex = state.fetchedEvents.findIndex(
          event => event.id === editedEvent.id
        )
        // window.console.log('Mutations | EVENT INDEX => ' + eventIndex)
        state.fetchedEvents[eventIndex] = editedEvent
      },
      setAccounts(state, accounts) {
        state.accounts = accounts
      },
      setBooks(state, books) {
        state.books = books
      }
    },
    actions: {
      // nuxtServerInit(vuexContext, context) {
      //   return context.app.$axios.get('https://ktucectest.herokuapp.com/api/events/').then((response) => {
      //     const data = response.data
      //     const eventArray = []
      //     for (const key in data) {
      //       // data["id"] = key
      //       console.log(key)
      //       eventArray.push({
      //         id: key,
      //         ...data[key]
      //       })
      //     }
      //     window.console.log(eventArray)
      //     vuexContext.commit('setEvents', eventArray)
      //   })
      // },
      setEvents(vuexContext, events) {
        vuexContext.commit('setEvents', events)
      },
      addEvents(vuexContext, event) {
        return this.$axios
          .post(process.env.BASE_URL + 'events.json', event)
          .then((response) => {
            vuexContext.commit('addEvent', {
              ...event,
              id: response.data.name
              // event comes first to be replaced with id that belongs to response.data
            })
          })
      },
      updateEvent(vuexContext, editedEvent) {
        return this.$axios
          .put(process.env.BASE_URL + editedEvent.id + '.json', editedEvent)
          .then((response) => {
            // window.console.log('Action => ' + editedEvent)
            vuexContext.commit('updateEvent', editedEvent)
          })
          .catch(e => window.console.log(e))
      }
    },
    getters: {
      getEvents(state) {
        return state.fetchedEvents
      },
      getAccounts(state) {
        return state.accounts
      }
    }
  })
}

export default createStore
