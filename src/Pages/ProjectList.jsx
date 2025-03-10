import { ProjectDetails } from "../Details/projectDetails";
import ProjectCard from "../Components/ProjectCard";

const ProjectList = () => {
  return (
    <div className="flex flex-col min-h-screen w-full p-6">
      {/* Responsive Heading */}
      <p className="text-3xl font-bold mb-6 pb-4 font-poppins text-teal-500 border-b-2 w-full text-center">
        My Projects
      </p>

      {/* Grid Layout for Restricting Two Cards Per Row on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ProjectDetails.map((project, index) => (
          <div key={index} className="p-2">
            <ProjectCard
              title={project.title}
              description={project.description}
              tools={project.tools}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
              repoLink={project.repoLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
