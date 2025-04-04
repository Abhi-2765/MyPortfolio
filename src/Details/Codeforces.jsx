import axios from "axios";
import { useEffect } from "react";

const Codeforces = ({ setCfRank, setCfRating, setCfProblems }) => {
  const cfHandle = "AbhiRam27";
  const cfURL = `https://codeforces.com/api/user.info?handles=${cfHandle}`;
  const cfProblemsURL = `https://codeforces.com/api/user.status?handle=${cfHandle}`;

  useEffect(() => {
    const fetchCodeforcesData = async () => {
      try {
        const [userInfoRes, statusRes] = await Promise.all([
          axios.get(cfURL),
          axios.get(cfProblemsURL),
        ]);

        const submissions = statusRes.data.result;
        const solvedProblems = submissions.filter(sub => sub.verdict === "OK").length;
        setCfProblems(solvedProblems + 85);

        const user = userInfoRes.data.result[0];
        setCfRating(user.maxRating ?? 'N/A');
        setCfRank(user.maxRank ?? 'N/A');

      } catch (error) {
        console.error("Error fetching Codeforces data:", error);
        setCfRating("1490");
        setCfRank("specialist");
      }
    };

    fetchCodeforcesData();
  }, []);

  return <div className="hidden" />;
};

export default Codeforces;
