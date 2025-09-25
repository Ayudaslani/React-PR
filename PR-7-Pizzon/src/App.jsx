import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OurTeamBanner from './component/ourteambanner/ourteambanner'
import TeamChef from './component/TeamChef/TeamChef'
import Teamprofessionals from './component/TeamProfessionals/Teamprofessionals'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <OurTeamBanner />
      <TeamChef />
      <Teamprofessionals />
    <Footer/>
    </>
  )
}

export default App
