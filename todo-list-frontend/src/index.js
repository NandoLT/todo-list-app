import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import './assets/css/index.css';

import storage from './utils/storage';
import { configureClient } from './dataServices/client'

const accesToken = storage.get(process.env.REACT_APP_KEY_AUTH);
configureClient({ accesToken })

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App isLogged={ !!accesToken } />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

