import TechStack from "./TechStack";

const ProjectCard = ({ title, description, tools, imageUrl, projectLink, repoLink }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 p-2 group opacity-100 translate-y-0">
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 hover:cursor-pointer">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[140px] object-cover rounded-md transition-all duration-300 group-hover:brightness-110"
        />
      </a>

      <div className="flex flex-col justify-center w-full md:w-2/3 mt-4 md:mt-0 md:ml-4">
        
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <h3 className="font-poppins text-lg font-semibold text-white transition-colors duration-300 group-hover:text-teal-400">
            {title}
          </h3>
        </a>

        {description.map((point, index) => (
          <p key={index} className="text-gray-300 text-sm mb-1 leading-relaxed">
            {point}
          </p>
        ))}

        <div className="mt-2 flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <TechStack key={index} name={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
