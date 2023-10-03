export type LoginData = {
  email: string,
};

export type WalletData = {
  currencies: string[], // array de string
  expenses: object[], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: boolean, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: number,
};

export type State = {
  user: LoginData,
  wallet: WalletData,
};

export type Action = {
  type: string;
  payload: LoginData | WalletData;
};
