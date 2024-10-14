
import React from 'react'
import { About, Footer, Header,Skills,Testimonials,Work } from './containers'
import { Navbar } from './components'
import './App.scss'
const HomePage = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About /> 
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage