import React from 'react'
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    //project data
  const projects = [
    {
      imageUrl: 'public/assets/thumbnail-project-2-large.webp',
      title: 'E-learning landing page',
      skills: ['React', 'Tailwind CSS', 'JavaScript'],
      projectUrl: 'https://skilled-e-learning-landing-page-by-a.netlify.app/',
      codeUrl: 'https://github.com/Kiunga1/Skilled-E-learning-landing-page'
    },
    {
      imageUrl: 'public/assets/thumbnail-project-3-large.webp',
      title: 'Todo web app',
      skills: ['React', 'JavaScript', 'Tailwind CSS'],
      projectUrl: 'https://todoproapplication.netlify.app/',
      codeUrl: 'https://github.com/Kiunga1/To-do-app'
    }
    
  ];
  return (
    <section className="py-16 bg-gray-200">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            skills={project.skills}
            projectUrl={project.projectUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </div>
  </section>

  )
}

export default ProjectsSection
