export default axios => ({
  getEvents: (parameters = {}) => {
    return axios.get('events/', {
      ...parameters
    })
  },
  getSingleEvent: (eventId, parameters = {}) => {
    return axios.get(`events/${eventId}`)
  }
})
