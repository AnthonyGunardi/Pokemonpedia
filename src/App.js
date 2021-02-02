import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import PokeDetail from './pages/PokeDetail'

function App () {
  return (
    <>
    <Header />
    <div className="flex container mx-auto flex-wrap sm:flex-nowrap sm:mt-3">
      <PokeDetail />
      <Sidebar />
    </div>
    <Footer />
    </>
  )
}

export default App;
