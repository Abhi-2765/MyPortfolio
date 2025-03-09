import TechStack from "./TechStack";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tools, imageUrl, projectLink, repoLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center md:items-start bg-[#1a1a1a] text-white rounded-lg shadow-lg border border-gray-700 transition-all duration-300 hover:bg-gray-800 p-4 group"
    >
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
          <h3 className="font-poppins text-lg font-semibold text-white transition-colors duration-300 group-hover:text-teal-400">
            {title}
          </h3>
        </a>

        {/* Project Description */}
        <p className="text-gray-300 text-[16px] mt-2 leading-7">{description}</p>

        {/* Tech Stack */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <TechStack key={index} name={tool} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
