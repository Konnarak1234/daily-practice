import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Find the root HTML element created by Vite.
const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element was not found.");
}

// Mount the React component tree into the browser DOM.
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
