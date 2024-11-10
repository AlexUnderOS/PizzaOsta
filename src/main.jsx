import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import WelcomePage from './pages/Welcome/WelcomePage'
import TopNav from './layouts/nav/top-nav/TopNav'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TopNav />
        <WelcomePage />
    </StrictMode>
)
