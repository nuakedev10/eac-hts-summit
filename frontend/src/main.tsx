import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RoutedApp } from './RoutedApp';
import '../css/styles.css';
import '../css/features.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutedApp />
    </BrowserRouter>
  </React.StrictMode>,
);
