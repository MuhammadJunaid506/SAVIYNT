import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import { createRoot } from 'react-dom/client';

import App from './App';

createRoot(document.getElementById('root')).render( 
  <Provider store={store}>
    <App />
  </Provider>
);
