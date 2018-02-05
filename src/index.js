
// Get React functions.
import React from 'react';
import { render } from 'react-dom';
// Get react-redux functions.
import { Provider } from 'react-redux';
// Get Redux store.
import store from './redux/store.js';
//Get app
import App from './components/app.js';

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
