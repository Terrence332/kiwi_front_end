import * as constants from './constants'

export const setLoginState = () => ({
  type: constants.SET_LOGIN_STATE
})

export const setFromRegister = () => ({
  type: constants.SET_FROMREGISTER
})

export const resetFromRegister = ()=>({
  type: constants.RESET_FROMREGISTER
})