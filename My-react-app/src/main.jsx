import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import LandingPage from './LandingPage.jsx'
import LogInPortal from './LandingPage/LoginHolder/LogInPortal.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/portalpage' element={<LogInPortal />} />
        <Route path='/app' element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
