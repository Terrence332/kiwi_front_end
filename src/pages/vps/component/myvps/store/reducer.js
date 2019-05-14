import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  vpsList: []
})

export default(state = defaultState, action) => {
  switch(action.type){
    case constants.INIT_CONTENT:
      return state.set('vpsList', fromJS(action.data))
    case constants.REFRESH_CONTENT:
      return state.set('vpsList', fromJS(action.data))
    default:
      return state
  }
}