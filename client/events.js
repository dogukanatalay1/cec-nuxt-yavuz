export default axios => ({
  getEvents: (parameters = {}) => {
    return axios.get('events/past', {
      ...parameters
    })
  },
  getSingleEvent: (eventId, parameters = {}) => {
    return axios.get(`events/${eventId}`)
  },
  getUpcomingEvents: (parameters = {}) => {
    return axios.get('events/upcoming')
  }
})
