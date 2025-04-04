import axios from "axios";
import { useEffect } from "react";

const Codechef = ({setCCRank, setCCRating, setCCProblems}) => {

    const ccURL = "https://codechef-api.vercel.app/handle/abhi_2765";    

    useEffect(()=>{
        try {
            async function fetchDetails(){
                const res = await axios.get(ccURL);
                setCCRank(res.data.stars);
                setCCProblems(62);
                setCCRating(res.data.highestRating);
            }
        fetchDetails();
        } catch (error) {
            console.log(error);
            setCCRank("3★");
            setCCRating(1762);
            setCCProblems(100);
        }
    }, [])

    return (
        <div className="hidden"></div>
    )
}

export default Codechef