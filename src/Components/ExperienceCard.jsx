import TechStack from "./TechStack";

const ExperienceCard = ({ role, company, start, end, description, tools }) => {
  return (
    <div className="flex flex-col md:flex-row hover:bg-[rgba(255, 255, 255, 0.1)] p-4 rounded-lg transition duration-300">
      {/* Period */}
      <div className="text-gray-400 text-sm w-full md:w-1/3 flex items-start font-poppins mb-4 md:mb-0">
        <span>{start}</span> — <span>{end}</span>
      </div>

      {/* Job Details */}
      <div className="w-full md:w-2/3 flex flex-col font-poppins">
        {/* Role & Company */}
        <div className="mb-1">
          <div className="flex items-center mb-2 text-lg font-semibold">
            <span>{role}</span>
            <span className="mx-0.5 text-gray-400">|</span>
            <a
              href="#"
              className="text-blue-400 hover:text-teal-400 transition-colors duration-300"
            >
              {company}
            </a>
          </div>
        </div>

        {/* Job Description */}
        {description.map((point, index) => (
          <p key={index} className="text-gray-300 text-sm mb-1 leading-relaxed">
            {point}
          </p>
        ))}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tools.map((stack) => (
            <TechStack key={stack} name={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
