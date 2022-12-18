import { BrowserRouter } from "react-router-dom";
import { useState } from 'react';
import App from './App/App';

export default function RoutesControl() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
