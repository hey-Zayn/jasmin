import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Prices from './components/Prices'
import Contact from './components/Contact'

const page = () => {
  return (
    <div className='bg-[#F9FAFB] overflow-hidden container mx-auto' >

      <Hero />
      <About />
      <Services />
      <Prices />
      <Contact />
    </div>
  )
}

export default page