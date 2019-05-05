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
    case constants.INITIAL_CONTENT:
      return state.merge({
        'folderList': fromJS(action.folderList),
        'fileList' : fromJS(action.fileList)
      })
    case constants.BACK_TO_PREVIOUS:
      return state.merge({
        'currentPath': action.currentPath,
        'folderList': fromJS(action.folderList),
        'fileList' : fromJS(action.fileList)
      })
    case constants.CHANGE_FOLDER:
      return state.merge({
        'currentPath': action.currentPath,
        'folderList': fromJS(action.folderList),
        'fileList' : fromJS(action.fileList)
      })
    default:
      return state
  }
}