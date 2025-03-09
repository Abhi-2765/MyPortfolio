import ProjectCard from "./ProjectCard";
import { ProjectDetails } from "../Details/projectDetails.js";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 md:p-10 rounded-lg text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed bg-[#1a1a1a] shadow-lg"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        className="font-poppins font-bold text-2xl text-white mb-4 border-b border-gray-600 pb-2"
      >
        Projects
      </motion.h2>

      {/* Projects List */}
      <div className="flex flex-col gap-6">
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

      {/* Underline hover effect */}
      <motion.div
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        className="h-1 bg-[#64ffda] mt-6 w-16"
      ></motion.div>
    </motion.div>
  );
};

export default Projects;
