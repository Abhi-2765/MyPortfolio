import { useEffect, useState } from "react";
import Desktop from "./Pages/Desktop";
import Mobile from "./Pages/Mobile";

const App = () => {

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (<Mobile/>) : (<Desktop/>)}
    </div>
  );
};

export default App;
