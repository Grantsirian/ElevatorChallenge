import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Context } from './context/CartContext';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>,
)
