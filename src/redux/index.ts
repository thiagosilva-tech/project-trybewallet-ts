import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension/';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// configure aqui sua store
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));

if (window.Cypress) {
  window.store = store;
}

export default store;
