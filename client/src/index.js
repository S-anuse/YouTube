import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore } from "redux";
import { thunk } from 'redux-thunk';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Reducers from './Reducers'; 

console.log("Google Client ID:", process.env.REACT_APP_GOOGLE_CLIENT_ID);

// ✅ Redux Store Setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));

// ✅ Render App - Keep only ONE BrowserRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}> 
      <BrowserRouter> 
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);

reportWebVitals();
