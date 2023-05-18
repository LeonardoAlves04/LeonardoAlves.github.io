import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { themes } from "./theme";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer: { cart: cartReducer },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode >
);


