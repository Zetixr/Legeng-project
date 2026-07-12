import React from 'react'
import NavBar from './components/navBar'
import AgeGate from './components/ageGate'
import Hero from './pages/hero'
import ProductsGrid from "./pages/productsGrid"
import TutorialSection from './pages/tutorial-page'
import ProductionSection from './pages/production-section'
import AdvantagesPage from './pages/advantages-page'

const App = () => {
  return (
    <div>
      <AgeGate />
      <NavBar />
      
      {/* Каждой секции даем свой id для скролла */}
      <div id="hero"><Hero /></div>
      <div id="assortment"><ProductsGrid /></div>
      <div id="tutorial"><TutorialSection /></div>
      <div id="about"><ProductionSection /></div>
      <div id="advantages"><AdvantagesPage /></div>
    </div>
  )
}

export default App