import ProjectCard from "./ProjectCard";
import { ProjectDetails } from "../Details/projectDetails.js";

const Projects = () => {
  return (
    <div className="flex flex-col max-w-3xl p-6 md:p-8 rounded-lg text-gray-300 mx-auto text-lg leading-relaxed">
      <p className="mb-6 font-poppins font-bold text-xl text-white hover:text-[#64ffda] transition-colors duration-300 cursor-pointer">
        Projects
      </p>

      {ProjectDetails.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description} 
          tools={project.tools}
          imageUrl={project.imageUrl}
          projectLink={project.projectLink}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
};

export default Projects;
