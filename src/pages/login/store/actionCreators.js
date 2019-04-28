import * as constants from './constants'

export const setLoginState = () => ({
  type: constants.SET_LOGIN_STATE
})

export const setLogoutState = () => ({
  type: constants.SET_LOGOUT_STATE
})

export const setFromRegister = () => ({
  type: constants.SET_FROMREGISTER
})

export const resetFromRegister = ()=>({
  type: constants.RESET_FROMREGISTER
})

export const changeUsername = (data)=>({
  type: constants.CHANGE_USERNAME,
  data: data
})

export const changePassword = (data)=>({
  type: constants.CHANGE_PASSWORD,
  data: data
})

export const handleWrongMessage = ()=>({
  type: constants.ALERT_WRONG_MESSAGE
})
