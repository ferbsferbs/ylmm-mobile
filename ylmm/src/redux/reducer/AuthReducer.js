import {combineReducers} from 'redux';
import {AUTH_LOGIN, AUTH_LOGOUT} from '../constants';

const INITIAL_STATE = {
 accountType:'PLACE'
};
const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
 
    case AUTH_LOGOUT: {
      return INITIAL_STATE
    }
    default:
      return state;
  }
};

export default AuthReducer;
