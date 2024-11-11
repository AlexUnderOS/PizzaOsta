import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import WelcomePage from './pages/Welcome/WelcomePage'
import TopNav from './layouts/nav/top-nav/TopNav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import NotfoundPage from './pages/Errors/NotfoundPage'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <header>
                <TopNav />
            </header>

            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<NotfoundPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
