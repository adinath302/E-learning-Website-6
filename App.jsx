import React from 'react'
import Hero from './Components/Hero/Hero.jsx'
import Service from './Components/Service/Service.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Subscribe from './Components/Subscribe/Subscribe.jsx'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Hero />
      <Service />
      <Banner />
      <Subscribe />
    </main>
  )
}

export default App
