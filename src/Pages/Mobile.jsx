import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Programming from "../Components/Programming";
import Education from "../Components/Education";

const Mobile = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="h-screen flex items-center justify-center">
        <Hero mobile={true}/>
      </section>
      <section className="flex items-center justify-center">
        <About />
      </section>
      <section className="flex items-center justify-center">
        <Experience />
      </section>
      <section className="flex items-center justify-center">
        <Education/>
      </section>
      <section className="flex items-center justify-center">
        <Projects />
      </section>
      <section className="flex items-center justify-center">
        <Programming />
      </section>
      <section className="flex items-center justify-center">
        <Skills />
      </section>
      <section className="flex items-center justify-center">
        <Contact />
      </section>
      <section className="h-75">
        <div className="h-75 flex items-center justify-center">
          <p className="text-gray-400 text-center bottom-0">
            &copy; {new Date().getFullYear()} Sai Abhirama Varma Buddaraju. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
