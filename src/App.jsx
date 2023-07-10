import React from 'react'
import './App.css'

import { Intro, Socials, About, Services, Contact } from './containers'
import { Navbar, Footer } from './components'

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Intro />
        <Socials />
        <About />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}

export default App