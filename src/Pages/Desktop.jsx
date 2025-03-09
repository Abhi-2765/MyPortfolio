import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Programming from "../Components/Programming";
import Education from "../Components/Education";

const Desktop = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:h-auto">
      {/* Left Side (Hero Section) */}
      <div className="w-full md:w-1/2 h-screen text-white flex items-center justify-center md:fixed md:left-0">
        <Hero mobile={false} />
      </div>

      {/* Right Side (Scrollable Sections) */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto md:ml-[50%] px-6 pb-6 space-y-10">
        <section id="about">
          <About />
        </section>
        {/* <section id="experience">
          <Experience />
        </section> */}
        <section id="education">
          <Education/>
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="programming">
          <Programming />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Desktop;
