import React from 'react'
import photoGrid from '../../public/photo-grid.png'

function Header () {
    return (
        <header className='header'>
            <div className='content'>
                <img className='header__photos' src={photoGrid} alt="Photos" />
                <div className='header__text-box'>
                    <h1 className='header__title'>Online Experiences</h1>
                    <p className='header__text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>
            
        </header>
    )
}

export default Header