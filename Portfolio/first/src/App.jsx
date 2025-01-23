import { useState } from 'react'
import './App.css'

import { Navbar } from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import ContactForm from './Components/Contact'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Stat from './Components/State'

function App() {

  return (
    <>
   <Navbar/>
  <Hero/>
  <About  />
  <Skills/>
  <Projects/>
  <Stat/>
  <ContactForm/>
  
  
    </>
  )
}

export default App
