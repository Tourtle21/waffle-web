import React from 'react';
import ReactDOM from 'react-dom';
import './extra/index.css';
import App from './App';
import reportWebVitals from './extra/reportWebVitals';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
const Router = HashRouter;

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <Router>
        <App />
      </Router>
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
