import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type LoginData = {
  email: string,
};

export type Currencies = {
  code: string
  codein: string
  name: string
  high: string
  low: string
  varBid: string
  pctChange: string
  bid: string
  ask: string
  timestamp: string
  create_date: string
};

export type Expenses = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: Currencies[]
};

export type WalletData = {
  currencies: Currencies[], // array de string
  expenses: Expenses[], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: boolean, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: number,
};

export type State = {
  user: LoginData,
  wallet: WalletData,
};

export type Action = {
  type: string;
  payload: AnyAction;
};

export type Dispatch = ThunkDispatch<Expenses, null, AnyAction>;
