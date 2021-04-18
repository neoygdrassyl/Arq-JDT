import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import "./services/i18n";

render((
  <BrowserRouter>
      <App/>
  </BrowserRouter>
), document.getElementById('root'));

reportWebVitals();
