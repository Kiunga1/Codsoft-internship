/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const ProjectCard = ({ imageUrl, title, skills, projectUrl, codeUrl }) => {
  return (
    <div className="relative py-2">
      <div className="bg-black rounded-lg shadow-md overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-72 mb-4" />
        <div className="h-auto absolute inset-0 bg-black opacity-0 hover:opacity-50 flex justify-center items-center">
          <div className="text-white text-center">
            <p className="mb-2"><a href={projectUrl} className="underline text-white hover:text-blue-500 hover:border-b hover:border-blue-500">View Project</a></p>
            <p><a href={codeUrl} className="underline text-white hover:text-blue-500 hover:border-b hover:border-blue-500">View Code</a></p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 text-white text-sm rounded-full py-1 px-2 mr-2 mb-2">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard
