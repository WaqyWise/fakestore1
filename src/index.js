import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from '../src/App';
import reportWebVitals from './reportWebVitals';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import redux provider
import { Provider } from "react-redux";
// import redux store
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* initialized storage */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
