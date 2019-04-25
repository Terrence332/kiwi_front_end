import * as constants from './constants'
import axios from 'axios'

export const changeUsername = (username) => {
  return({
    type: constants.CHANGE_USERNAME,
    data: username
  })
}

export const changeEmail = (email) => {
  return({
    type: constants.CHANGE_EMAIL,
    data: email
  })
}

export const changePassword = (password) => {
  return({
    type: constants.CHANGE_PASSWORD,
    data: password
  })
}

export const changePassword2 = (password2) => {
  return({
    type: constants.CHANGE_PASSWORD2,
    data: password2
  })
}

const getUsernameOutAction = (data) => ({
  type: constants.SET_USERNAME_REPEAT,
  data: data
})

export const usernameOut = (username) => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/api/portal/checkusername/?username=${username}`
    })
    .then((res)=>{
      if(res.data.code===1000){
        dispatch(getUsernameOutAction(res.data.msg))
      }else{
        // 后端出现异常，code:1001
        dispatch(getUsernameOutAction(true))
      }
      
    })
    .catch((e)=>{
      console.log(e)
    })
  }
}

const getEmailOutAction = (data) => ({
  type: constants.SET_EMAIL_REPEAT,
  data: data
})

export const emailOut = (email) => {
  return (dispatch) => {
    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/api/portal/checkemail/?email=${email}`
    })
    .then((res)=>{
      if(res.data.code===1000){
        dispatch(getEmailOutAction(res.data.msg))
      }else{
        // 后端出现异常，code：1001
        dispatch(getEmailOutAction(true))
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  }
}

export const registerAction = () => {
  return({
    type: constants.REGISTER
  })
}

export const getVerificationAction = (data) => {
  return({
    type: constants.VERIFICATION_CHANGE,
    data: data
  })
}

export const verificationAction = (code)=>{
  return (dispatch) => {
    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/api/portal/verification/?code=${code}`
    })
    .then((res)=>{
      if(res.data.code===1000){
        dispatch(getVerificationAction(res.data.msg))
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  }
}