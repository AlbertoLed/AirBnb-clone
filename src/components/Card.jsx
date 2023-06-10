import React from 'react'
import starIcon from '../../public/star.svg'
import './Card.css'

function Card({img, rating, reviewCount, location, title, price}) {
    //
    //alt={imgAlt}
    return(
        <div className='card'>
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