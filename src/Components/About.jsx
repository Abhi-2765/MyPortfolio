import { motion } from "framer-motion";

const About = () => {
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
        About Me
      </motion.h2>

      {/* Description */}
      <p className="text-gray-300 text-[16px] leading-7">
        I'm a <span className="text-white">Computer Science and Engineering</span> undergraduate at the
        prestigious <span className="text-white">Indian Institute of Technology (Indian School of Mines), Dhanbad</span>.
        My academic journey reflects my dedication to excellence, as evidenced by my impressive rankings in nationwide competitive examinations and my academic performance.
      </p>

      <p className="text-gray-300 text-[16px] mt-4 leading-7">
        I'm excited to be an <span className="text-white">Upcoming SWE STEP intern at Google</span>, highlighting my technical abilities and potential.
        On campus, I actively participate as a member of the <span className="text-white">Competitive Coding Club (C3)</span> and previously contributed to the <span className="text-white">Fintech Club</span>.
      </p>

      <p className="text-gray-300 text-[16px] mt-4 leading-7">
        I'm proficient in multiple programming languages including <span className="text-white">C, C++, Python, and JavaScript</span>,
        with expertise in technologies like <span className="text-white">Firebase</span> and <span className="text-white">React</span>. My passion for competitive programming is demonstrated through consistent participation on platforms like
        <span className="text-white"> Codeforces, CodeChef, and Leetcode</span>, where I've solved hundreds of challenging problems.
      </p>

      <p className="text-gray-300 text-[16px] mt-4 leading-7">
        In my leisure time, I enjoy <span className="text-white">chess, sudoku, badminton,</span> and <span className="text-white">cricket</span>, which help sharpen both my mind and body.
      </p>

      {/* Subtle underline hover effect */}
      <motion.div
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        className="h-1 bg-[#64ffda] mt-6 w-16"
      ></motion.div>
    </motion.div>
  );
};

export default About;
