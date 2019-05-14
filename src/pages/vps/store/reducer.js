import {combineReducers} from 'redux-immutable'
import {reducer as myvpsReducer} from '../component/myvps/store' 
import {reducer as newvpsReducer} from '../component/newvps/store'

const reducer = combineReducers({
  myvps: myvpsReducer,
  newvps: newvpsReducer
})

export default reducer