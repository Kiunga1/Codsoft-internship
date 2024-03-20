import React from 'react'

const SkillsSection = () => {
  return (
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 justify-center text-center md:justify-start ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-start md:text-left">
            <div className='text-2xl font-semibold P-2'>HTML5</div>
            <div className='text-2xl font-semibold'>CSS3 </div>
            <div className='text-2xl font-semibold'>JavaScript</div>
            <div className='text-2xl font-semibold'>React</div>
            <div className='text-2xl font-semibold'>Tailwind CSS</div>
            <div className='text-2xl font-semibold'>BootStrap</div>
            <div className='text-2xl font-semibold'>Version Control (Git)</div>
          </div>
        </div>
      </section>
  )
}

export default SkillsSection
