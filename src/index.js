import React from 'react';
import ReactDOM from 'react-dom/client';

import "./Css/style.css";
import "./Css/style.css.map";
import "./Css/style.min.css";
import "./Css/style.min.css.map";

import "./Css/materialdesignicons.css.map";
import "./Css/materialdesignicons.min.css";
import "./Css/materialdesignicons.min.css.map";

import "./Css/testimonial.css";
import "./Css/testimonial.min.css";
import "./Css/testimonial.css.map";
import "./Css/testimonial.min.css.map";

import "./Css/tiny-slider.css";

import "./Css/bootstrap.min.css";
import "./Css/bootstrap.min.css.map";
import "./js/tiny-slider.js";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/tiny-slider/src/tiny-slider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
