import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  availableOS: [],
  processing: false,
  name: '',
  os: '',
  version: '',
  cores: 1,
  ram: 2,
  ip: '',
  hostname: 'localhost',
  ip_repeat: false
})

export default(state = defaultState, action) => {
  switch(action.type){
    case constants.INIT_AVAILABLE_OS:
      return state.set('availableOS', action.data)
    case constants.SET_PROCESSING:
      return state.set('processing', true)
    case constants.RESET_PROCESSING:
      return state.set('processing', false)
    case constants.SET_NAME:
      return state.set('name', action.data)
    case constants.SET_OS:
      return state.set('os', action.data)
    case constants.SET_VERSION:
      return state.set('version', action.data)
    case constants.SET_CORES:
      return state.set('cores', action.data)
    case constants.SET_RAM:
      return state.set('ram', action.data)
    case constants.SET_IP:
      return state.set('ip', action.data)
    case constants.SET_HOSTNAME:
      return state.set('hostname', action.data)
    case constants.SET_IP_REPEAT:
      return state.set('ip_repeat'. action.data)
    default:
      return state
  }
}