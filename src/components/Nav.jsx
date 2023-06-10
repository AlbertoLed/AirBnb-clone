import React from 'react'
import airbnbLogo from '../../public/airbnb-logo.png'

function Nav() {
    return (
        <nav className='nav'>
                <img className='nav__logo' src={airbnbLogo} alt="Airbnb Logo" />

        </nav>
    )
}

export default Nav