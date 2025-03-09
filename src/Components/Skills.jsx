import CLang from "../assets/CLang";
import CPP from "../assets/CPP";
import Python from "../assets/Python";
import JavaScript from "../assets/JavaScript";
import Firebase from "../assets/Fireabase";
import Bootstrap from "../assets/Bootstrap";
import HTML from "../assets/HTML";
import CSS from "../assets/CSS";
import NodeJS from "../assets/NodeJS";
import ReactIcon from "../assets/ReactIcon";
import MongoDB from "../assets/MongoDB";
import Tailwind from "../assets/Tailwind";
import Jupyter from "../assets/Jupyter";
import Colab from "../assets/Colab";
import Git from "../assets/Git";
import { motion } from "framer-motion";

const Skills = () => {
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
        Skills
      </motion.h2>

      <div className="flex flex-col gap-8">
        {/* Programming Languages */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3 hover:text-[#64ffda] transition-colors duration-300 cursor-pointer">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <CLang />
            <CPP />
            <JavaScript />
            <Python />
          </div>
        </div>

        {/* Web Development */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3 hover:text-[#64ffda] transition-colors duration-300 cursor-pointer">
            Web Development
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <HTML />
            <CSS />
            <Tailwind />
            <Bootstrap />
            <ReactIcon />
            <NodeJS />
            <MongoDB />
          </div>
        </div>

        {/* Other Technologies */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3 hover:text-[#64ffda] transition-colors duration-300 cursor-pointer">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <Firebase />
            <Jupyter />
            <Colab />
            <Git />
          </div>
        </div>
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

export default Skills;
