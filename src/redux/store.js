import { createStore, applyMiddleware } from 'redux';

import appReducers from './reducers';

const backboneNotifier = (store) => (next) => (action) => {

  // we send notification only if the action was originated from react
  if (action.origin === 'react') {
console.log('dispatchEvent', action);
    window.EventManager.dispatchEvent('redux:to:backbone', action);
  }

  next(action);
};

const middleware = applyMiddleware(backboneNotifier);

window.applicationStore = createStore(appReducers, {}, middleware);
