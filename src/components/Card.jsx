import React from 'react'
import starIcon from '../../public/star.svg'
import './Card.css'

function Card(props) {
    const {coverImg, stats, location, title, price, openSpots} = props
    
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
            <img className='card__img' src={`../../public/${coverImg}`} />
            <div className='card__stats margin'>
                <img className='stats__star' src={starIcon} alt="star" />
                <p className='card__text'>{stats.rating}
                </p>
                <p className='card__text card__text--grey'>
                {`(${stats.reviewCount}) •${location}`}</p>
            </div>
            <p className='card__title card__text'>{title}</p>
            <p className='card__text'><span className='card__text--bold'>From ${price}</span> / person</p>
        </div>
    )
}

export default Card