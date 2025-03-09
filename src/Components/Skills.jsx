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

const Skills = () => {
  return (
    <div className="max-w-3xl p-6 md:p-8 text-white rounded-lg shadow-lg relative">
      {/* Sticky Section Title with proper height & padding */}
      <div className="sticky top-0 z-10 bg-[rgb(6,19,37)] shadow-lg">
        <h2 className="font-poppins font-bold text-2xl text-white border-b border-gray-600 py-2 w-full">
          Skills
        </h2>
      </div>

      {/* Content section with enough padding to prevent jumpiness */}
      <div className="mt-4 flex flex-col gap-6">
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

      <div className="h-1 bg-[#64ffda] mt-6 w-16 mx-auto"></div>
    </div>
  );
};

export default Skills;