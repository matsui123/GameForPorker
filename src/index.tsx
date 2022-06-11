import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Modal, { Styles } from 'react-modal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
Modal.setAppElement('#root');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);