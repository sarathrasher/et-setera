import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import ConnectedApp from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './State/store';
import { Provider } from 'react-redux';

let app = 
  <Provider store={store}>
    <ConnectedApp />
  </Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
