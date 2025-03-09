import ExperienceCard from "./ExperienceCard";
import { experienceDetails } from "../Details/experienceDetails";

const Experience = () => {
  return (
    <div className="max-w-3xl p-6 md:p-8 text-white rounded-lg shadow-lg relative">
      {/* Sticky Section Title with proper height & padding */}
      <div className="sticky top-0 z-10 bg-[rgb(6,19,37)] shadow-lg">
        <h2 className="font-poppins font-bold text-2xl text-[#64ffda] border-b border-gray-600 py-2 w-full">
          Experience
        </h2>
      </div>

      <div className="mt-4 flex flex-col gap-6">
        {experienceDetails.map((job, index) => (
          <ExperienceCard
            key={index}
            role={job.role}
            company={job.company}
            start={job.start}
            end={job.end}
            description={job.description}
            tools={job.tools}
          />
        ))}
      </div>

      <div className="h-1 bg-[#64ffda] mt-6 w-16 mx-auto"></div>
    </div>
  );
};

export default Experience;
