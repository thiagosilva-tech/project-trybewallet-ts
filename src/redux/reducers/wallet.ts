// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { Action } from '../../types';
import { FETCH_CURRENCIES, SUBMIT_WALLET_DATA, UPDATE_WALLET_DATA } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function walletReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case SUBMIT_WALLET_DATA:
      return { ...state, expenses: [...state.expenses, action.payload] };
    case UPDATE_WALLET_DATA:
      return { ...state, expenses: action.payload };
    case FETCH_CURRENCIES:
      return { ...state, currencies: action.payload };
    default:
      return state;
  }
}

export default walletReducer;
