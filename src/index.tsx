import React from 'react';
import ReactDOM, { Container } from 'react-dom/client';
import './styles/global.css';
import App from './App.tsx';
import { Provider } from "react-redux"
import store from './store/store.ts';

const element: Element | null = document.getElementById('root');
const container = element as Container
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
