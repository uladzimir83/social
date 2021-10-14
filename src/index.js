import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import App from './App';
import store from './Store/Store';

ReactDOM.render(
    <App store={store} />,
  document.getElementById('root')
);