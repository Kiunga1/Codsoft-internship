/* eslint-disable react/no-unescaped-entities */

import HeroImage from '../../public/assets/hero-img.jpeg'

const HeroSection = () => {
  return (
    <section className="bg-gray-200 text-black py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={HeroImage} alt="Hero" className="w-full rounded-full" />
        </div>
        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">Nice to meet you!<br/> I'm Ann Kiunga.</h2>
          <p className="text-lg mt-3">  I'm a front-end developer passionate about 
            building accessible web apps that users love.
            Let's collaborate to create standout digital solutions and build something beautiful together.</p>
          <p className="mt-6 ">
            <a href="#contact" className=" hover:text-blue-400 border-b-2 border-blue-400 transition-colors font-semibold">CONTACT ME</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
