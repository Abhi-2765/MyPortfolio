import { ProjectDetails } from "../Details/projectDetails";
import ProjectCard from "../Components/ProjectCard";

const ProjectList = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {ProjectDetails.map((project, index) => (
          <div key={index} className="max-w-3xl w-full">
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
