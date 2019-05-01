import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  drawVisable: false,
  currentPath: '/',
  folderList: [],
  fileList: []
})

export default(state = defaultState, action) => {
  switch(action.type){
    case constants.SET_DRAW_VISABLE:
      return state.set('drawVisable', action.data)
    case constants.GET_CURRENT_PATH:
      return state.set('currentPath', action.currentPath)
    case constants.GET_FILES_LIST:
      return state.merge({
        'folderList': fromJS(action.folderList),
        'fileList': fromJS(action.fileList)
      })
    default:
      return state
  }
}