import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  login: false,
  fromRegister: false,
  wrongMessage: false,
  username: '',
  password: ''
})

export default(state = defaultState, action) => {
  switch(action.type){
    case constants.SET_LOGIN_STATE:
      return state.set('login', true)
    case constants.SET_LOGOUT_STATE:
      return state.set('login', false)
    case constants.SET_FROMREGISTER:
      return state.set('fromRegister', true)
    case constants.RESET_FROMREGISTER:
      return state.set('fromRegister', false)
    case constants.CHANGE_USERNAME:
      return state.merge({
        wrongMessage: false,
        username: action.data
      })
    case constants.CHANGE_PASSWORD:
      return state.merge({
        wrongMessage: false,
        password: action.data
      })
    case constants.ALERT_WRONG_MESSAGE:
      return state.set('wrongMessage', true)
    default:
      return state
  }
}