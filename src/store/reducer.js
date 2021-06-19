import {combineReducers} from 'redux-immutable'
import {reducer as headReducer} from '../common/header/store'
import  {reducer as homeReducer} from '../pages/home/store'
import  {reducer as DetailReducer} from '../pages/detail/store'
import  {reducer as LoginReducer} from '../pages/login/store'

export default combineReducers({
    header:headReducer,
    home:homeReducer,
    detail:DetailReducer,
    login:LoginReducer
})