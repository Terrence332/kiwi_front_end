import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  login: false,
  fromRegister: false
})

export default(state = defaultState, action) => {
  switch(action.type){
    case constants.SET_LOGIN_STATE:
      return state.set('login', true)
    case constants.SET_FROMREGISTER:
      return state.set('fromRegister', true)
    case constants.RESET_FROMREGISTER:
      return state.set('fromRegister', false)
    default:
      return state
  }
}