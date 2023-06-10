import React from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import data from './data.js'

function App() {

  const cards = data.map(item => 
    <Card 
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  )

  console.log(data)
  return (
    <>
      <Nav />
      <Header />
      <div className='cards-list'>
        {cards}
      </div>
    </>
  )
}

export default App
