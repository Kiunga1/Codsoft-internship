import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Header/>
      <HeroSection/>
    </div>
  )
}

export default App
