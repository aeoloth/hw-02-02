import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import hw_02_02 from './hw_02_02';
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <hw_02_02 />
  </React.StrictMode>,
  document.getElementById('hw-02-t02')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
