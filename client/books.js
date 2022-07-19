export default axios => ({
  getBooks: (parameters = {}) => {
    return axios.get('books/', {
      ...parameters
    })
  }
})
