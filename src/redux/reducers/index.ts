// import user from './user';
// import wallet from './wallet';

import { combineReducers } from 'redux';
import loginReducer from './user';
import walletReducer from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers(
  {
    user: loginReducer,
    wallet: walletReducer,
  },
);

export default rootReducer; // delete essa linha e configure os seus reducers
