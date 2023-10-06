import fetchCurrencies from '../../helpers/fetchCurrencies';
import fetchCurrenciesObj from '../../helpers/fetchCurrenciesObj';
import { Currencies, Dispatch, Expenses } from '../../types';

// Coloque aqui suas actions
export const SUBMIT_LOGIN_DATA = 'SUBMIT_LOGIN_DATA';

export function submitLogin(emailData: string) {
  return {
    type: SUBMIT_LOGIN_DATA,
    payload: emailData,
  };
}

export const SUBMIT_WALLET_DATA = 'SUBMIT_WALLET_DATA';

export function submitWallet(expese: Expenses) {
  return {
    type: SUBMIT_WALLET_DATA,
    payload: expese,
  };
}

export function fetchCurrenciesThunk(walletForm: Expenses) {
  return async (dispatch: Dispatch) => {
    const currencies = await fetchCurrenciesObj();
    const newWalletForm = { ...walletForm, exchangeRates: currencies };
    dispatch(submitWallet(newWalletForm));
  };
}

export const UPDATE_WALLET_DATA = 'UPDATE_WALLET_DATA';

export function updateWallet(expeses: Expenses[]) {
  return {
    type: UPDATE_WALLET_DATA,
    payload: expeses,
  };
}

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

export function updateCurrencies(currencies: Currencies[]) {
  return {
    type: FETCH_CURRENCIES,
    payload: currencies,
  };
}

export function fetchCurrenciesInitial() {
  return async (dispatch: Dispatch) => {
    const result = await fetchCurrencies();
    dispatch(updateCurrencies(result));
  };
}
