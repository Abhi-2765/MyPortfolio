import { motion } from "framer-motion";

const Programming = () => {
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
        Programming Profiles
      </motion.h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700 text-gray-300 font-poppins text-center">
          <thead>
            <tr className="bg-[#0a192f] text-white text-sm md:text-base">
              <th className="border border-gray-700 p-3">Platform</th>
              <th className="border border-gray-700 p-2">Best Rating</th>
              <th className="border border-gray-700 p-2">Problems Solved</th>
            </tr>
          </thead>
          <tbody className="text-center">

            {[
              { name: "Codeforces", rating: "Specialist (1448)", solved: "525", link: "https://codeforces.com/profile/AbhiRam27" },
              { name: "CodeChef", rating: "3 Star (1742)", solved: "55", link: "https://www.codechef.com/users/abhi_2765" },
              { name: "LeetCode", rating: "1540", solved: "107", link: "https://leetcode.com/u/Abhi-2790/" },
              { name: "AtCoder", rating: "Red (422)", solved: "45", link: "https://atcoder.jp/users/Abhi_2706" },
              { name: "Hackerrank", rating: "5 Star (Problem Solving)", solved: "73", link: "https://www.hackerrank.com/profile/b_abhi2790" }
            ].map((platform, index) => (
              <tr key={index} className="hover:bg-[#112240] transition duration-300">
                <td className="border border-gray-700 p-3">
                  <a 
                    href={platform.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#64ffda] hover:text-white transition duration-300"
                  >
                    {platform.name}
                  </a>
                </td>
                <td className="border border-gray-700 p-2 text-xs md:text-sm">{platform.rating}</td>
                <td className="border border-gray-700 p-2 text-xs md:text-sm">{platform.solved}</td>
              </tr>
            ))}

          </tbody>
        </table>
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

export default Programming;
