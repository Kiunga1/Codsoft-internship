
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Header/>
      <HeroSection/>
      <div className="container mx-auto px-4 py-4">
        <hr className="section-divider" />
      </div>
      <SkillsSection/>
      <div className="container mx-auto px-4 py-4">
        <hr className="section-divider" />
      </div>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
