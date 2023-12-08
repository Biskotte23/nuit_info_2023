import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { Theme } from './themes/Theme.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <Dashboard />
    </Theme>
  </React.StrictMode>
);
