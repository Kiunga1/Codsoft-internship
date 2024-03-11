import React from 'react'

const SkillsSection = () => {
  return (
    <section className="bg-gray-200 text-black py-16">
    <div className="container mx-auto px-4 justify-center text-center md:justify-start md:text-left">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-start">
        <div className='text-xl font-semibold'>HTML5</div>
        <div className='text-xl font-semibold'>CSS3 (including Flexbox and Grid)</div>
        <div className='text-xl font-semibold'>JavaScript</div>
        <div className='text-xl font-semibold'>React</div>
        <div className='text-xl font-semibold'>Tailwind CSS</div>
        <div className='text-xl font-semibold'>BootStrap</div>
        <div className='text-xl font-semibold'>Version Control (Git)</div>
      </div>
    </div>
  </section>
  )
}

export default SkillsSection
