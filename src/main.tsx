import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { DateProvider } from './context/DateContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DateProvider>
      <App />
    </DateProvider>
  </React.StrictMode>,
);
