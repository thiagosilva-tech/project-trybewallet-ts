// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { Action } from '../../types';
import { SUBMIT_WALLET_DATA } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

function walletReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case SUBMIT_WALLET_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default walletReducer;
