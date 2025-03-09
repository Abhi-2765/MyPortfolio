import { useEffect, useState } from "react";
import Desktop from "./Pages/Desktop";
import Mobile from "./Pages/Mobile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./Pages/ProjectList";

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
    <Router>
      <Routes>
        <Route path="/" element={(isMobile ? (<Mobile/>) : (<Desktop/>))}/>
        <Route path="/projects" element={<ProjectList/>}/>
      </Routes>
    </Router>
  );
};

export default App;
