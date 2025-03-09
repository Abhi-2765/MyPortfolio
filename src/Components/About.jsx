const About = () => {
  return (
    <div className="max-w-3xl p-6 md:p-8 text-white rounded-lg shadow-lg relative">
      {/* Sticky Section Title with proper height & padding */}
      <div className="sticky top-0 z-10 bg-[rgb(6,19,37)] shadow-lg">
        <h2 className="font-poppins font-bold text-2xl text-white border-b border-gray-600 py-2 w-full">
          About Me
        </h2>
      </div>

      {/* Content section with enough padding to prevent jumpiness */}
      <div className="mt-4 flex flex-col gap-6">
        <p className="text-gray-300 text-[16px] leading-7">
          I'm a <span className="text-white">Computer Science and Engineering</span> undergraduate at the
          prestigious <span className="text-white">Indian Institute of Technology (Indian School of Mines), Dhanbad</span>.
          My academic journey reflects my dedication to excellence, as evidenced by my impressive rankings in nationwide competitive examinations and my academic performance.
        </p>

        <p className="text-gray-300 text-[16px] leading-7">
          I'm excited to be an <span className="text-white">Upcoming SWE STEP intern at Google</span>, highlighting my technical abilities and potential.
          On campus, I actively participate as a member of the <span className="text-white">Competitive Coding Club (C3)</span> and previously contributed to the <span className="text-white">Fintech Club</span>.
        </p>

        <p className="text-gray-300 text-[16px] leading-7">
          I'm proficient in multiple programming languages including <span className="text-white">C, C++, Python, and JavaScript</span>,
          with expertise in technologies like <span className="text-white">Firebase</span> and <span className="text-white">React</span>. My passion for competitive programming is demonstrated through consistent participation on platforms like
          <span className="text-white"> Codeforces, CodeChef, and Leetcode</span>, where I've solved hundreds of challenging problems.
        </p>

        <p className="text-gray-300 text-[16px] leading-7">
          In my leisure time, I enjoy <span className="text-white">chess, sudoku, badminton,</span> and <span className="text-white">cricket</span>, which help sharpen both my mind and body.
        </p>
      </div>

      <div className="h-1 bg-[#64ffda] mt-6 w-16 mx-auto"></div>
    </div>
  );
};

export default About;
