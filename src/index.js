import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={window.applicationStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
