const Programming = () => {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <table className="w-[500px] border-collapse border border-gray-200 text-gray-400 font-poppins text-center">
          <thead>
            <tr className="bg-[#0a192f] text-white text-sm md:text-base">
              <th className="border border-gray-200 p-3 w-1/3">Platform</th>
              <th className="border border-gray-200 p-2 w-1/3">Best Rating</th>
              <th className="border border-gray-200 p-2 w-1/3">Problems Solved</th>
            </tr>
          </thead>
          <tbody className="text-center">

            <tr className="hover:bg-[#112240] transition duration-300">
              <td className="border border-gray-200 p-3 ">
                <a 
                  href="https://codeforces.com/profile/AbhiRam27" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-white transition duration-300"
                >
                  Codeforces
                </a>
              </td>
              <td className="border border-gray-200 p-2 text-xs md:text-sm">Specialist (1448)</td>
              <td className="border border-gray-200 p-2 text-xs md:text-sm">525</td>
            </tr>

            <tr className="hover:bg-[#112240] transition duration-300">
              <td className="border border-gray-200 p-3">
                <a 
                  href="https://www.codechef.com/users/abhi_2765" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-white transition duration-300"
                >
                  CodeChef
                </a>
              </td>
              <td className="border border-gray-200 p-2 text-xs md:text-sm">3 Star (1742)</td>
              <td className="border border-gray-200 p-2 text-xs md:text-sm">55</td>
            </tr>

            <tr className="hover:bg-[#112240] transition duration-300">
              <td className="border border-gray-200 p-3 ">
                <a 
                  href="https://leetcode.com/u/Abhi-2790/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-white transition duration-300"
                >
                  LeetCode
                </a>
              </td>
              <td className="border border-gray-200 p-2 text-xs md:text-sm">1540</td>
              <td className="border border-gray-200 p-2 text-xs md:text-sm">107</td>
            </tr>

            <tr className="hover:bg-[#112240] transition duration-300">
              <td className="border border-gray-200 p-3 ">
                <a 
                  href="https://atcoder.jp/users/Abhi_2706" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-white transition duration-300"
                >
                  AtCoder
                </a>
              </td>
              <td className="border border-gray-200 p-2 text-xs md:text-sm">Red (422)</td>
              <td className="border border-gray-200 p-2 text-xs md:text-sm">45</td>
            </tr>

            <tr className="hover:bg-[#112240] transition duration-300">
              <td className="border border-gray-200 p-3 ">
                <a 
                  href="https://www.hackerrank.com/profile/b_abhi2790" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-white transition duration-300"
                >
                  Hackerrank
                </a>
              </td>
              <td className="border border-gray-200 p-2 text-xs md:text-sm">5 Star <p>(in Problem Solving)</p></td>
              <td className="border border-gray-200 p-2 text-xs md:text-sm">73</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Programming;
  