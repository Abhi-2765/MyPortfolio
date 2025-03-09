import TechStack from "./TechStack";

const ProjectCard = ({ title, description, tools, imageUrl, projectLink, repoLink }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-900 text-white rounded-lg shadow-lg border border-gray-800 transition-all duration-300 hover:bg-gray-800 max-w-3xl p-4 group">
      
      {/* Left Side - Clickable Image */}
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 hover:cursor-pointer">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[140px] object-cover rounded-md transition-all duration-300 group-hover:brightness-110"
        />
      </a>

      {/* Right Side - Project Details */}
      <div className="flex flex-col justify-center w-full md:w-2/3 mt-4 md:mt-0 md:ml-4">
        
        {/* Project Title - Links to GitHub Repo */}
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <h3 className="font-roboto text-lg text-white transition-colors duration-300 group-hover:text-teal-400">
            {title}
          </h3>
        </a>

        {/* Project Description */}
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="mt-2 flex flex-wrap gap-1">
          {tools.map((tool, index) => (
            <TechStack key={index} name={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
