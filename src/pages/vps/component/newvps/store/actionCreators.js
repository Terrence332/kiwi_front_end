import * as constants from './constants'
import axios from 'axios'

export const setProcessingAction = () => ({
  type: constants.SET_PROCESSING
})

export const resetProcessingAction = () => ({
  type: constants.RESET_PROCESSING
})

const getInitOSContentAction = (data) => ({
  type: constants.INIT_AVAILABLE_OS,
  data: data
})

export const getInitOSContent = () => {
  return (dispatch)=>{
    axios({
      method: 'get',
      url: '/api/availableOS.json'
    })
    .then((res)=>{
      if(res.data.code===1000){
        dispatch(getInitOSContentAction(res.data.OSList))
      }else{
        console.log('Failed')
      }
    })
    .catch((e)=>{
      console.log(e)
    })
  }
}

export const setNameAction = (data) => ({
  type: constants.SET_NAME,
  data: data
})

export const setOSAction = (data) => ({
  type: constants.SET_OS,
  data: data
})

export const setVersionAction = (data) => ({
  type: constants.SET_VERSION,
  data: data
})

export const setCoresAction = (data) => ({
  type: constants.SET_CORES,
  data: data
})

export const setRAMAction = (data) => ({
  type: constants.SET_RAM,
  data: data
})

export const setIPAction = (data) => ({
  type: constants.SET_IP,
  data: data
})

export const setHostnameActon = (data) => ({
  type: constants.SET_HOSTNAME,
  data: data
})