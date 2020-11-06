import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from "styled-components";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import storeInstance from './store/store'

import theme from './theme/theme.json'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={storeInstance}>
          <App />
        </Provider>
      </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
