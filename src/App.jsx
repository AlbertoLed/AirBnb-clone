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
      {...item}
    />
  )

  console.log(data)
  return (
    <div className='content'>
      <Nav />
      <Header />
      <div className='cards-list'>
        {cards}
      </div>
    </div>
  )
}

export default App
