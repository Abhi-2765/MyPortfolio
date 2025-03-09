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
    <div className="max-w-[600px] mx-auto p-6">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Skills
      </h2>

      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-medium text-white mb-3 hover:text-[#64ffda] transition-colors duration-300 cursor-pointer">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            <CLang />
            <CPP />
            <JavaScript />
            <Python />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-3 hover:text-[#64ffda] transition-colors duration-300 cursor-pointer">
            Web Development
          </h3>
          <div className="flex flex-wrap gap-4">
            <HTML />
            <CSS />
            <Tailwind />
            <Bootstrap />
            <ReactIcon />
            <NodeJS />
            <MongoDB />
          </div>
        </div>

        {/* Other Technologies Section */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3 hover:text-[#64ffda] transition-colors duration-300 cursor-pointer">
            Other Technologies
          </h3>
          <div className="flex flex-wrap gap-4">
            <Firebase />
            <Jupyter />
            <Colab />
            <Git />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
