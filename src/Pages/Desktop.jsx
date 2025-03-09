import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Programming from "../Components/Programming";

const Desktop = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:h-auto">
      
        <div className="w-full md:w-1/2 h-screen md:h-auto bg-gray-900 text-white flex items-center justify-center md:fixed md:left-0">
            <Hero />
        </div>

      <div className="w-full md:w-1/2 h-screen overflow-y-auto md:overflow-y-scroll md:ml-[50%] p-6 space-y-10 scroll-smooth">
            <About />
            <Experience />
            <Projects />
            <Programming />
            <Skills />
            <Contact />
      </div>

    </div>
  )
}

export default Desktop