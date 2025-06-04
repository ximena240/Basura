import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
<<<<<<< HEAD:main.jsx
import App from './public/images/App.jsx'
=======
import App from './pantallas/App.jsx'
>>>>>>> origin/main:src/main.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </StrictMode>
)