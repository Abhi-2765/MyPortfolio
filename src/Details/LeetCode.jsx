import axios from 'axios';
import React, { useEffect } from 'react'

const LeetCode = ({setLCProblems}) => {

    const leetCodeAPIURL = "https://alfa-leetcode-api.onrender.com/Abhi-2790/solved";   
    
    useEffect(() => {
        async function fetchproblems() {
            const res = await axios.get(leetCodeAPIURL);
            setLCProblems(res.data.solvedProblem);
        }

        fetchproblems();
    }, [])
    
    return (
        <div className='hidden'></div>
    )
}

export default LeetCode