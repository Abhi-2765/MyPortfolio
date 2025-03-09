import TechStack from "./TechStack";

const Experience = () => {
  return (
    <div className="max-w-3xl p-6 md:p-8 text-white rounded-lg shadow-lg transition-all duration-300 hover:border-gray-600 hover:bg-gray-800 hover:text-teal-400 flex flex-col md:flex-row">
      
      {/* Period */}
      <div className="mt-1 p-0 text-gray-400 text-sm w-full md:w-1/3 flex items-start font-poppins mb-1 md:mb-0">
        <span>May, 2025</span> — <span>PRESENT</span>
      </div>

      {/* Job Details */}
      <div className="w-full md:w-2/3 flex flex-col font-poppins">
        {/* Role & Company */}
        <div className="mb-1">
          <div className="flex items-center mb-2 font-poppins text-lg font-semibold transition-colors duration-10">
                <p>SWE STEP Intern</p>
            <span className="text-white font-poppins">{", "} </span>
            <span className="mx-1"></span>
            <a href="#" className="hover: text-blue-400">
                <p>Google</p>
            </a>
          </div>
        </div>

        {/* Job Description */}
        <div className="text-gray-300 text-sm mb-4 leading-relaxed">
          Built, styled, and shipped high-quality websites, design systems,
          mobile apps, and digital experiences for a diverse array of projects
          including Harvard Business School, Everytown for Gun Safety, Pratt
          Institute, Koala Health, Vanderbilt University, The 19th News, and
          more. Provided leadership within the engineering department through
          close collaboration, knowledge sharing, and spearheading the
          development of internal tools.
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "React", "TypeScript"].map((stack) => (
            <TechStack key={stack} name={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
