import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/fonts.css';
import './components/ui/common.css';
import './components/ui/box.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
