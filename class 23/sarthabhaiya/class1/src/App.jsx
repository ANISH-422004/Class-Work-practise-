import React from 'react'
import Navbar from './components/Navbar'
import Section2 from './components/Section2'
import Cards from './components/cards'
import Section3 from './components/Section3'
import Section4 from './components/Section4'


const App = () => {
  return (
    <div>
      <Navbar/> 
      <Section2/>
      <Cards/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default App