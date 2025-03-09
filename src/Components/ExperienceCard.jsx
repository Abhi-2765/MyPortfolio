import TechStack from "./TechStack";

const ExperienceCard = () => {
  return (
    <div className="flex flex-col md:flex-row hover:bg-[rgba(255, 255, 255, 0.1)]">
    {/* Period */}
    <div className="text-gray-400 text-sm w-full md:w-1/3 flex items-start font-poppins mb-4 md:mb-0">
      <span>May, 2025</span> — <span>PRESENT</span>
    </div>

    {/* Job Details */}
    <div className="w-full md:w-2/3 flex flex-col font-poppins">
      {/* Role & Company */}
      <div className="mb-1">
        <div className="flex items-center mb-2 text-lg font-semibold">
          <p>SWE STEP Intern</p>
          <span className="mx-1 text-gray-400">{","}</span>
          <a
            href="#"
            className="text-blue-400 hover:text-teal-400 transition-colors duration-300"
          >
            Google
          </a>
        </div>
      </div>

      {/* Job Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        Built, styled, and shipped high-quality websites, design systems,
        mobile apps, and digital experiences for a diverse array of projects
        including Harvard Business School, Everytown for Gun Safety, Pratt
        Institute, Koala Health, Vanderbilt University, The 19th News, and
        more. Provided leadership within the engineering department through
        close collaboration, knowledge sharing, and spearheading the
        development of internal tools.
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {["JavaScript", "React", "TypeScript"].map((stack) => (
          <TechStack key={stack} name={stack} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default ExperienceCard