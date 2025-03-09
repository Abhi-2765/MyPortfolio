import { ProjectDetails } from "../Details/projectDetails";
import ProjectCard from "../Components/ProjectCard";

const ProjectList = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-6">
      {/* Responsive Heading */}
      <p className="text-3xl font-bold mb-6 pb-4 font-poppins text-teal-500 border-b-2 w-full text-center">
        My Projects
      </p>

      {/* Flexbox Layout for Responsiveness */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl px-6">
        {ProjectDetails.map((project, index) => (
          <div key={index} className="w-full md:w-1/2 flex justify-center">
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
