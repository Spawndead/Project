import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Buy from './buy';
import Head from './heading';
import MenHead from './menhead';
import Menc from './menc';
import WomenHead from './womenhead';
import Womenc from './womenc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Head/>
    <Buy/>
    <MenHead/>
    <Menc/>
    <WomenHead/>
    <Womenc/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
