import { SET_CURRENT_USER } from '../constant'
import isEmpty from 'lodash/isEmpty'

const initialState = {
  isAuthorized: false,
  user: {},
}

export default function auth(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthorized: !isEmpty(action.user),
        user: action.user,
      }
    default:
      return state
  }
}
