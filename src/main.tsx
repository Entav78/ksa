import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import '@/styles/style.scss';
import './styles/style.scss';
import './styles/tailwind.scss';
import { loadThemePreference } from './utils/themeToggle';

loadThemePreference();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
