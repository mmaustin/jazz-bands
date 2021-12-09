import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
//import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import bandsReducer from './reducers/bandsReducer';
import './index.css';
import App from './components/App';

const store = createStore(bandsReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
);


