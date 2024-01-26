import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Création du BrowserRouter sans quoi, le routing ne peut pas fonctionner */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
