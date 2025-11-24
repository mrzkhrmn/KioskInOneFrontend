import './styles/main.css'
import './styles/background.css'
import 'react-toastify/dist/ReactToastify.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
