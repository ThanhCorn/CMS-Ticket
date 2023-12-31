import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { DateProvider } from './context/DateContext';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <DateProvider>
        <App />
      </DateProvider>
    </Provider>
  </React.StrictMode>,
);
