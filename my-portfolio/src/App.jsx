import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-300'>
      <Header/>
      <HeroSection/>
      <div className="container mx-auto px-4">
        <hr className="section-divider" />
      </div>
      <SkillsSection/>
      <ProjectsSection/>

    </div>
  )
}

export default App
