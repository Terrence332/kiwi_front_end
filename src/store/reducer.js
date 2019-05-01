import {combineReducers} from 'redux-immutable'
import {reducer as loginReducer} from '../pages/login/store'
import {reducer as registerReducer} from '../pages/register/store'
import {reducer as netdiskReducer} from '../pages/netdisk/store'

const reducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  netdisk: netdiskReducer
})

export default reducer