import React from 'react'
import NavBar from './components/navBar'
import AgeGate from './components/ageGate'
import Hero from './pages/hero'
import ProductsGrid from "./pages/productsGrid"

const App = () => {
  return (
    <div>
      <AgeGate></AgeGate>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProductsGrid></ProductsGrid>
    </div>
  )
}

export default App