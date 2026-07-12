import React from 'react'
import NavBar from './components/navBar'
import AgeGate from './components/ageGate'
import Hero from './pages/hero'
import ProductsGrid from "./pages/productsGrid"
import TutorialSection from './pages/tutorial-page'

const App = () => {
  return (
    <div>
      <AgeGate></AgeGate>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProductsGrid></ProductsGrid>
      <TutorialSection></TutorialSection>
    </div>
  )
}

export default App