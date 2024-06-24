import React from 'react';
import App from './App.tsx';
import './styles/global.css';
import store from './store/store.ts';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import ReactDOM, { Container } from 'react-dom/client';

const element: Element | null = document.getElementById('root');
const container = element as Container
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
