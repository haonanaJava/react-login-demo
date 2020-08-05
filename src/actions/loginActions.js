import axios from 'axios'
import setAuthorizationToken from '../utils/setAuthorizationToken/index'
import { SET_CURRENT_USER } from '../constant'
import jwtDecode from 'jwt-decode'

export const loginRequest = (loginData) => {
  return (dispatch) => {
    return axios
      .post('/api/users/login', loginData)
      .then((res) => {
        const token = res.data
        localStorage.setItem('jwtToken', token)
        setAuthorizationToken(token)
        dispatch(setCurrentUser(jwtDecode(token)))
      })
      .catch((err) => console.log(err))
  }
}

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  }
}

export const logout = () => {
  return (dispath) => {
    localStorage.removeItem('jwtToken')
    setAuthorizationToken(false)
    dispath(setCurrentUser({}))
  }
}
