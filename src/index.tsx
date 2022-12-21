import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesControl from './views/RoutesControl';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutesControl />
  </React.StrictMode>
);
