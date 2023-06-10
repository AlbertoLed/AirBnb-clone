import React from 'react'
import starIcon from '../../public/star.svg'
import './Card.css'

function Card({img, rating, reviewCount, location, title, price, openSpots}) {
    let badgeText;
    if( openSpots === 0 ) {
        badgeText = 'SOLD OUT'
    }
    else if(location === 'Online') {
        badgeText = 'ONLINE'
    }

    return(
        <div className='card'>
            {badgeText && <div className='card__badge'>{badgeText}</div>}
            <img className='card__img' src={`../../public/${img}`} />
            <div className='card__stats margin'>
                <img className='stats__star' src={starIcon} alt="star" />
                <p className='card__text'>{rating}
                </p>
                <p className='card__text card__text--grey'>
                {`(${reviewCount}) •${location}`}</p>
            </div>
            <p className='card__title card__text'>{title}</p>
            <p className='card__text'><span className='card__text--bold'>From ${price}</span> / person</p>
        </div>
    )
}

export default Card