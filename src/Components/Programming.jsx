import { useState } from "react";
import Codeforces from "../Details/Codeforces";
import Codechef from "../Details/Codechef";
import LeetCode from "../Details/LeetCode";

const Programming = () => {

  const [cfRating, setCfRating] = useState(null);
  const [cfRank, setCfRank] = useState("specialist");
  const [cfProblems, setCfProblems] = useState(558);

  const [ccRating, setCCRating] = useState(0);
  const [ccRank, setCCRank] = useState("3 ⭐");
  const [ccProblems, setCCProblems] = useState(0);

  const [lcProblems, setLCProblems] = useState(0);

  return (
    <div className="p-6 md:p-10 rounded-lg text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed shadow-lg relative">
      {/* Sticky Section Title */}
      <div className="sticky top-0 z-10 bg-[rgb(6,19,37)] shadow-lg">
        <h2 className="font-poppins font-bold text-2xl text-[#64ffda] border-b border-gray-600 py-2 w-full">
          Programming Profiles
        </h2>
      </div>

      <Codeforces setCfRank={setCfRank} setCfRating={setCfRating} setCfProblems={setCfProblems}/>
      <Codechef setCCRank={setCCRank} setCCRating={setCCRating} setCCProblems={setCCProblems}/>
      <LeetCode setLCProblems={setLCProblems}/>

      {/* Table */}
      <div className="mt-4 overflow-x-auto">
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
              { name: "Codeforces", rating:  `${cfRank[0].toUpperCase() + cfRank.slice(1)} (${cfRating})`, solved: `${cfProblems}`, link: "https://codeforces.com/profile/AbhiRam27" },
              { name: "CodeChef", rating: `${ccRank[0] + " " + ccRank[1]} (${ccRating})`, solved: `${ccProblems}`, link: "https://www.codechef.com/users/abhi_2765" },
              { name: "LeetCode", rating: "1540", solved: `${lcProblems}`, link: "https://leetcode.com/u/Abhi-2790/" },
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

      <div className="h-1 bg-[#64ffda] mt-6 w-16 mx-auto"></div>
    </div>
  );
};

export default Programming;
