export default axios => ({
  signin: (parameters = {}) => {
    return axios.post('accounts/login/', {
      ...parameters
    })
  },
  signup: (parameters = {}) => {
    return axios.post()
  }
})
