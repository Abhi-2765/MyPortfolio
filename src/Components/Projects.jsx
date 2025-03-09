import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { ProjectDetails } from "../Details/projectDetails.js";

const Projects = () => {
  return (
    <div className="my-5 max-w-3xl p-6 md:p-8 text-white rounded-lg shadow-lg">
      {/* Sticky Section Title with proper height & padding */}
      <div className="sticky top-0 z-10 bg-[rgb(6,19,37)] shadow-lg">
        <h2 className="font-poppins font-bold text-2xl text-[#64ffda] border-b border-gray-600 py-2 w-full">
          Projects
        </h2>
      </div>

      <div className="mt-4 flex flex-col gap-6">
        {ProjectDetails.slice(0, 2).map((project, index) => (
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

        {/* Link to View All Projects */}
        <div className="text-center">
          <Link 
            to="/projects" 
            className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            View all Projects
          </Link>
        </div>
      </div>

      <div className="h-1 bg-[#64ffda] mt-6 w-16 mx-auto"></div>
    </div>
  );
};

export default Projects;
