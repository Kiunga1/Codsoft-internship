
import ProjectCard from './ProjectCard';
import projectsData from '../../public/projectsData';

const ProjectsSection = () => {
   
  return (
    <section className="py-16 bg-black">
    <div className="container mx-auto px-4">
      <div className='flex justify-between'>
        <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
        <p >
          <a href="#contact" className=" hover:text-blue-500 border-b-2 border-blue-500 transition-colors text-white text-xl font-semibold">CONTACT ME</a>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
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
