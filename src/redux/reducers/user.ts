import { Action } from '../../types';
import { SUBMIT_LOGIN_DATA } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

function loginReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case SUBMIT_LOGIN_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default loginReducer;
