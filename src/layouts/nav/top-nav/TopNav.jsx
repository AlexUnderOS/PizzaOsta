import './TopNav.scss'
import useParallax from '../../../hooks/useParalax'
import { useEffect, useState } from 'react'

function TopNav() {
    const [isSticky, setIsSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    useParallax('.pizza-constructor')

    return (
        <nav className="top-nav">
            <div className="content-1">
                <div className="l-side">
                    <img
                        draggable="false"
                        className="logo"
                        src="/src/images/pizzalogo.png"
                        alt="pizza osta"
                    />
                    <h1>Pizza Osta</h1>
                    <p>+371 999 999 99</p>
                </div>
                <div className="r-side">
                    <div className="pizza-constructor">
                        <a href="/pizza-constructor">Constructor</a>
                    </div>
                    <a href="" className="login">
                        Log In / Sign Up
                    </a>
                </div>
            </div>
            <div className={`content-2 ${isSticky ? 'sticky' : ''}`}>
                <ul>
                    <li>Offers</li>
                    <li>Order</li>
                    <li>Find Us</li>
                </ul>
            </div>
        </nav>
    )
}

export default TopNav
