import {fromJS} from 'immutable';
import * as constants from './constants'

const defaultState=fromJS({
  isLogin:false
});

export default (state=defaultState,action) =>{
    switch (action.type) {
        case constants.CHANGE_LOGIN:
          return state.set('isLogin',action.value);
        case constants.CHANGE_LOOUT:
          return state.set('isLogin',action.value);
        default:
            return state
    } 
}