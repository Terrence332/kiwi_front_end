import {combineReducers} from 'redux-immutable'
import {reducer as filesReducer} from '../component/files/store' 

const reducer = combineReducers({
  files: filesReducer
})

export default reducer