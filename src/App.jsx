import React from 'react'
import NavBar from './components/navBar'
import AgeGate from './components/ageGate'
import Hero from './pages/hero'
const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <AgeGate></AgeGate>
      <Hero></Hero>
    </div>
  )
}

export default App