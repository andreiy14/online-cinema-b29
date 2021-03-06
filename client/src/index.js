import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  './fonts/TTNorms-BlackItalic.otf'
import { UserContextProvider } from "./context/userContext";
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
     <UserContextProvider>
    <Router>
      <App />
    </Router>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
