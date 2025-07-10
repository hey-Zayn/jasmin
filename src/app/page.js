import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Prices from './components/Prices'
import Contact from './components/Contact'

const page = () => {
  return (
    <div className='bg-[#f9f5f0] overflow-hidden container mx-auto px-4 sm:px-6 lg:px-8'>

      <Hero />
      <About />
      <Services />
      <Prices />
      <Contact />
    </div>
  )
}

export default page