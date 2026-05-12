// Importing StrictMode for highlighting potential React issues
import { StrictMode } from 'react'

// Importing createRoot for rendering React app
import { createRoot } from 'react-dom/client'

// Global CSS file
import './index.css'

// Main App Component
import App from './App.jsx'

// React Router for routing support
import { BrowserRouter } from 'react-router-dom'

// Rendering React Application
createRoot(document.getElementById('root')).render(

  // BrowserRouter enables routing in the app
  <BrowserRouter>

    {/* StrictMode helps in identifying problems during development */}
    <StrictMode>

      {/* Main Application Component */}
      <App />

    </StrictMode>

  </BrowserRouter>

)