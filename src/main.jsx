import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CursorProvider } from './context/CursorContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CursorProvider>

    <App />
  </CursorProvider>
  </BrowserRouter>,
)
