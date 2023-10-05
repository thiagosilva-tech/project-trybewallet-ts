import fetchCurrencies from '../../helpers/fetchCurrencies';
import { Dispatch, Expenses } from '../../types';

// Coloque aqui suas actions
export const SUBMIT_LOGIN_DATA = 'SUBMIT_LOGIN_DATA';

export function submitLogin(emailData: string) {
  return {
    type: SUBMIT_LOGIN_DATA,
    payload: emailData,
  };
}

export const SUBMIT_WALLET_DATA = 'SUBMIT_WALLET_DATA';

export function submitWallet(expeses: Expenses) {
  return {
    type: SUBMIT_WALLET_DATA,
    payload: expeses,
  };
}

export function fetchCurrenciesThunk(walletForm: Expenses) {
  return async (dispatch: Dispatch) => {
    const currencies = await fetchCurrencies();
    const newWalletForm = { ...walletForm, exchangeRates: currencies };
    dispatch(submitWallet(newWalletForm));
  };
}
