import React from 'react'
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    //project data
  const projects = [
    {
      imageUrl: 'public/assets/github-user-thumbnail.webp',
      title: 'Github User Search App',
      skills: ['React', 'Tailwind CSS', 'JavaScript'],
      projectUrl: 'https://github-user-search-app-liart-two.vercel.app/',
      codeUrl: 'https://github.com/Kiunga1/github_user_search_app'
    },
    {
      imageUrl: 'public/assets/countries-api-project.webp',
      title: 'World Countries API App',
      skills: ['React', 'Tailwind CSS', 'JavaScript'],
      projectUrl: 'https://worldinsightapp.netlify.app/',
      codeUrl: 'https://github.com/Kiunga1/Countries-App/tree/main'
    },
    {
      imageUrl: 'public/assets/audiophile-ecommerce-project.webp',
      title: 'Audiophile E-commerce Website',
      skills: ['React', 'CSS', 'JavaScript'],
      projectUrl: 'https://audiophile-ecommerce-website-oxfio9nqe-anns-projects-58b329f7.vercel.app/',
      codeUrl: 'https://github.com/Kiunga1/audiophile-ecommerce-website'
    },
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
    },
    {
      imageUrl: 'public/assets/t-mart website.png',
      title: 'Boookmark Landing Page',
      skills: ['HTML', 'CSS', 'JavaScript'],
      projectUrl: 'https://kiunga1.github.io/E-commerce-website/#',
      codeUrl: 'https://github.com/Kiunga1/E-commerce-website'
    },
    {
      imageUrl: 'public/assets/azubi-landingpage.png',
      title: 'AzubiAfrica Landing Page',
      skills: ['HTML', 'CSS', 'JavaScript'],
      projectUrl: 'https://kiunga1.github.io/Azubi_Africa_Landing_Page/',
      codeUrl: 'https://github.com/Kiunga1/Azubi_Africa_Landing_Page'
    },
    {
      imageUrl: 'public/assets/bookmark-landing-page.webp',
      title: 'Boookmark Landing Page',
      skills: ['HTML', 'CSS', 'JavaScript'],
      projectUrl: 'https://bookmark-landing-page-pearl-two.vercel.app/',
      codeUrl: 'https://github.com/Kiunga1/Codsoft-internship/tree/main/Bookmark-Landing-Page'
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
