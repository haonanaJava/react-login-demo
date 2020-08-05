import axios from 'axios'

export const userSignupRequest = (userData) => {
  //thunk
  return (dispatch) => {
    return axios.post('/api/users/signup', userData)
  }
}

export const isUserExists = (username) => {
  return (dispatch) => {
    return axios.get(`/api/users/valid_un/${username}`)
  }
}

export const isEmailExists = (email) => {
  return (dispatch) => {
    return axios.get(`/api/users/valid_em/${email}`)
  }
}
