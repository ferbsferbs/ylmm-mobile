import {combineReducers} from 'redux';
import {AUTH_LOGIN, AUTH_LOGOUT} from '../constants';

const INITIAL_STATE = {
  loggedUser: {},
  branchUserOid: '',
  chofer: {},
  user:'',
  pass:''
};
const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        // State
        ...state,
        // Redux Store
        loggedUser: action.payload.loggedUser,
        branchUserOid: action.payload.branchUserOid,
        chofer: action.payload.chofer,
        user:action.payload.user,
        pass:action.payload.pass
      };
    }
    case AUTH_LOGOUT: {
      return INITIAL_STATE
    }
    default:
      return state;
  }
};

export default AuthReducer;
