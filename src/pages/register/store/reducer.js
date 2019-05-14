import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  username: '',
  email: '',
  password: '',
  confirm_password: '',
  username_repeat: false,
  email_repeat: false,
  register_step: 1,
  verification: false
})

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.CHANGE_USERNAME:
      return state.merge({
        username: action.data,
        username_repeat: false
      })
    case constants.CHANGE_EMAIL:
      return state.merge({
        email: action.data,
        email_repeat: false
      })
    case constants.CHANGE_PASSWORD:
      return state.set('password', action.data)
    case constants.CHANGE_PASSWORD2:
      return state.set('confirm_password', action.data)
    case constants.SET_USERNAME_REPEAT:
      return state.set('username_repeat', action.data)
    case constants.SET_EMAIL_REPEAT:
      return state.set('email_repeat', action.data)
    case constants.REGISTER:
      return state.set('register_step', 2)
    case constants.VERIFICATION_CHANGE:
      return state.set('verification', action.data)
    default:
      return state
  }
}