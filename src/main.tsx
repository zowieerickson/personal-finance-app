import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
