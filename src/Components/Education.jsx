const Education = () => {
    return (
      <div className="max-w-3xl p-6 md:p-8 text-white rounded-lg shadow-lg relative">
        {/* Sticky Section Title */}
        <div className="sticky top-0 z-10 bg-[rgb(6,19,37)] shadow-lg">
          <h2 className="font-poppins font-bold text-2xl text-[#64ffda] border-b border-gray-600 py-2 w-full">
            Education
          </h2>
        </div>
  
        {/* Education Details */}
        <div className="mt-4 flex flex-col gap-6">
          <p className="text-gray-300 text-[16px] leading-7">
            <span className="text-white font-semibold">Institution: </span>  
            <a href="https://www.iitism.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Technology (Indian School of Mines), Dhanbad</a>
          </p>
  
          <p className="text-gray-300 text-[16px] leading-7">
            <span className="text-white font-semibold">Degree: </span>  
            Bachelor of Technology (B.Tech)
          </p>
  
          <p className="text-gray-300 text-[16px] leading-7">
            <span className="text-white font-semibold">Discipline: </span>  
            Computer Science and Engineering
          </p>
  
          <p className="text-gray-300 text-[16px] leading-7">
            <span className="text-white font-semibold">Batch: </span>  
            2023 - 2027
          </p>
  
          <p className="text-gray-300 text-[16px] leading-7">
            <span className="text-white font-semibold">Current CGPA: </span>  
            9.77 / 10
          </p>
  
          <p className="text-gray-300 text-[16px] leading-7">
            <span className="text-white font-semibold">Relevant Courses: </span>  
            Data Structures and Algorithms, Probability and Statistics, Operating Systems,  
            Object-Oriented Programming, Computer Architecture and Organization
          </p>
  
          {/* Transcript Button */}
          <a
            href="https://drive.google.com/file/d/1jyocERkvpcfp0C-Bzer3fBTGjrqOWdFY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#64ffda] text-[#0a192f] font-semibold py-2 px-4 
                       rounded-md hover:bg-[#52e0c4] transition duration-300 text-center"
          >
            View Transcript
          </a>
        </div>
  
        {/* Section Underline */}
        <div className="h-1 bg-[#64ffda] mt-6 w-16 mx-auto"></div>
      </div>
    );
  };
  
  export default Education;
  